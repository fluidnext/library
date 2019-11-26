import {CommunicatorInterface} from "./CommunicatorInterface";
import {CommunicatorAdapterInterface} from "./adapter/CommunicatorAdapterInterface";
import {EventManager, EventManagerInterface} from "../event";
import {TransformInterface} from "../trasform/TransformInterface";
import {Communicator} from "./Communicator";
import {GeneratorInterface} from "../util/generator/GeneratorInterface";
import {MongoIdGenerator} from "../util/generator/MongoIdGenerator";
/**
 * @class CommunicatorSplitter
 */
export class CommunicatorSplitter extends Communicator implements CommunicatorInterface {

    /**
     * @type {string}
     */
    static SPLITTER_MSG: string = 'splitter';

    /**
     * @type {CommunicatorAdapterInterface}
     */
    protected adapter: CommunicatorAdapterInterface;

    /**
     * @type CommunicatorAdapterInterface
     */
    protected eventManager: EventManagerInterface;

    /**
     * @type TransformInterface
     */
    protected transform: TransformInterface = null;

    /**
     * @type number
     */
    protected chunk: number;

    /**
     * @type string
     */
    protected splitter: string = CommunicatorSplitter.SPLITTER_MSG;

    /**
     * @type object
     */
    protected messageCache: object = {};

    /**
     * @type GeneratorInterface
     */
    private generator: GeneratorInterface = new MongoIdGenerator();


    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @param {number} chunk
     * @param {TransformInterface} transform
     */
    constructor(adapter: CommunicatorAdapterInterface, chunk: number = 700, transform: TransformInterface = null) {

        super(adapter, transform);

        this.chunk = chunk;

        this.adapter.onMessageAdapter(this._computeMessage.bind(this));
;   }

    /**
     * @param data
     * @private
     */
    _computeMessage(data) {

        try {
            let messageParse = JSON.parse(data.toString());
            if (messageParse[this.getSplitter()]) {

                if (!this.messageCache[messageParse[this.getSplitter()]]) {
                    this.messageCache[messageParse[this.getSplitter()]] =  [];
                }

                this.messageCache[messageParse[this.getSplitter()]].splice(messageParse['chunk'], 0, require('buffer').Buffer.from(messageParse['data']));
                if (this._hasAllChunk(messageParse)) {
                    this.eventManager.emit('message', require('buffer').Buffer.concat(this.messageCache[messageParse[this.getSplitter()]]));
                    delete this.messageCache[messageParse[this.getSplitter()]];
                }

            } else {
                this.eventManager.emit('message', data);
            }
        } catch (error) {
            console.warn(error);
            this.eventManager.emit('message', data);
        }
    }

    /**
     * @inheritDoc
     */
    onMessage(callback: Function): void {
        this.eventManager.on('message', callback);
    }

    /**
     * @inheritDoc
     */
    send(data: any): void {
        this.eventManager.emit('send', data);
        let transformData = this.transform ? this.transform.transform(data) : data;
        if (!transformData.length) {
            throw 'Bad type data';
        }

        console.log(this.chunk, transformData.length);

        if (transformData.length < this.chunk) {
            this.adapter.sendAdapter(transformData);
        } else {
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
    static _splitToArray(data: any, chunk: number) {
        let arraySplit = [data];

        if (data.length > chunk) {
            for (let cont = 0, computeChunk = 0; data.length > computeChunk; cont++, computeChunk = cont*chunk) {
                arraySplit[cont] = data.substr(computeChunk, chunk)
            }
        }

        return arraySplit;
    }

    /**
     * @param message
     * @private
     */
    _hasAllChunk(message: object) {

        let has = true;

        if(this.messageCache[message[this.getSplitter()]] && this.messageCache[message[this.getSplitter()]].length === message['total']) {
            for (let cont = 0; this.messageCache[message[this.getSplitter()]].length > cont; cont++) {
                has = has || this.messageCache[message[this.getSplitter()]][cont];
            }

        } else {
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
    setSplitter(splitter: string) {
        this.splitter = splitter;
        return this;
    }

    /**
     * @return GeneratorInterface
     */
    getGenerator(): GeneratorInterface {
        return this.generator;
    }

    /**
     * @param {GeneratorInterface} generator
     */
    setGenerator(generator: GeneratorInterface) {
        this.generator = generator;
    }
}
