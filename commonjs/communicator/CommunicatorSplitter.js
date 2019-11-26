"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Communicator_1 = require("./Communicator");
const MongoIdGenerator_1 = require("../util/generator/MongoIdGenerator");
/**
 * @class CommunicatorSplitter
 */
class CommunicatorSplitter extends Communicator_1.Communicator {
    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @param {number} chunk
     * @param {TransformInterface} transform
     */
    constructor(adapter, chunk = 700, transform = null) {
        super(adapter, transform);
        /**
         * @type TransformInterface
         */
        this.transform = null;
        /**
         * @type string
         */
        this.splitter = CommunicatorSplitter.SPLITTER_MSG;
        /**
         * @type object
         */
        this.messageCache = {};
        /**
         * @type GeneratorInterface
         */
        this.generator = new MongoIdGenerator_1.MongoIdGenerator();
        this.chunk = chunk;
        this.adapter.onMessageAdapter(this._computeMessage.bind(this));
        ;
    }
    /**
     * @param data
     * @private
     */
    _computeMessage(data) {
        try {
            let messageParse = JSON.parse(data.toString());
            if (messageParse[this.getSplitter()]) {
                if (!this.messageCache[messageParse[this.getSplitter()]]) {
                    this.messageCache[messageParse[this.getSplitter()]] = [];
                }
                this.messageCache[messageParse[this.getSplitter()]].splice(messageParse['chunk'], 0, require('buffer').Buffer.from(messageParse['data']));
                if (this._hasAllChunk(messageParse)) {
                    this.eventManager.emit('message', require('buffer').Buffer.concat(this.messageCache[messageParse[this.getSplitter()]]));
                    delete this.messageCache[messageParse[this.getSplitter()]];
                }
            }
            else {
                this.eventManager.emit('message', data);
            }
        }
        catch (error) {
            console.warn(error);
            this.eventManager.emit('message', data);
        }
    }
    /**
     * @inheritDoc
     */
    onMessage(callback) {
        this.eventManager.on('message', callback);
    }
    /**
     * @inheritDoc
     */
    send(data) {
        this.eventManager.emit('send', data);
        let transformData = this.transform ? this.transform.transform(data) : data;
        if (!transformData.length) {
            throw 'Bad type data';
        }
        console.log(this.chunk, transformData.length);
        if (transformData.length < this.chunk) {
            this.adapter.sendAdapter(transformData);
        }
        else {
            let split = CommunicatorSplitter._splitToArray(transformData, this.chunk);
            let message = {};
            let cont = 0;
            message[this.getSplitter()] = this.generator.generate();
            message['data'] = split[cont];
            message['chunk'] = cont;
            message['total'] = split.length;
            let callback = () => {
                cont++;
                if (split.length <= cont) {
                    return;
                }
                message['data'] = split[cont]; // ID
                message['chunk'] = cont; // ID
                this.adapter.sendAdapter(JSON.stringify(message), callback);
            };
            this.adapter.sendAdapter(JSON.stringify(message), callback);
        }
    }
    /**
     * @param data
     * @param chunk
     * @private
     */
    static _splitToArray(data, chunk) {
        let arraySplit = [data];
        if (data.length > chunk) {
            for (let cont = 0, computeChunk = 0; data.length > computeChunk; cont++, computeChunk = cont * chunk) {
                arraySplit[cont] = data.substr(computeChunk, chunk);
            }
        }
        return arraySplit;
    }
    /**
     * @param message
     * @private
     */
    _hasAllChunk(message) {
        let has = true;
        if (this.messageCache[message[this.getSplitter()]] && this.messageCache[message[this.getSplitter()]].length === message['total']) {
            for (let cont = 0; this.messageCache[message[this.getSplitter()]].length > cont; cont++) {
                has = has || this.messageCache[message[this.getSplitter()]][cont];
            }
        }
        else {
            has = false;
        }
        return has;
    }
    /**
     * @return string
     */
    getSplitter() {
        return this.splitter;
    }
    /**
     * @param splitter
     * @return CommunicatorSplitter
     */
    setSplitter(splitter) {
        this.splitter = splitter;
        return this;
    }
    /**
     * @return GeneratorInterface
     */
    getGenerator() {
        return this.generator;
    }
    /**
     * @param {GeneratorInterface} generator
     */
    setGenerator(generator) {
        this.generator = generator;
    }
}
exports.CommunicatorSplitter = CommunicatorSplitter;
/**
 * @type {string}
 */
CommunicatorSplitter.SPLITTER_MSG = 'splitter';
