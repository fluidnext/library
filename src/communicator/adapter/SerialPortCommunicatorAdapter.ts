import {CommunicatorAdapterInterface} from "./CommunicatorAdapterInterface";
import {CommunicatorAdapterAwareInterface} from "./CommunicatorAdapterAwareInterface";
import {Stream} from "stream";

/**
 * @class SerialPortCommunicatorAdapter
 */
export class SerialPortCommunicatorAdapter implements CommunicatorAdapterInterface, CommunicatorAdapterAwareInterface {

    /**
     * @type serialPort
     */
    protected _serialPort;

    /**
     * @type Stream
     */
    protected _parser: Stream = null;

    /**
     * @param {String} port
     * @param {Object} options
     */
    constructor(port: string, options: object) {

        const SerialPort = require("serialport");
        options = options ? options : {};
        options = Object.assign(options, {autoOpen: false});
        this._serialPort = new SerialPort(port, options);
    }

    /**
     * @inheritDoc
     */
    getCommunicatorAdapter() {
        return this._serialPort;
    }

    /**
     * @inheritDoc
     */
    setCommunicatorAdapter(adapter) {
        this._serialPort = adapter;
        return this;
    }

    /**
     * @param {Stream} parser
     * @return CommunicatorAdapterInterface
     */
    setParser(parser: Stream) {
        this._parser = parser;
        return this;
    }

    /**
     * @param Stream
     */
    getParser() {
        return this._parser;
    }

    /**
     * @inheritDoc
     */
    onMessageAdapter(callback) {
        this[this._getStreamString()].on('data', callback);
    }

    /**
     * @inheritDoc
     */
    onCloseAdapter(callback) {
        this[this._getStreamString()].on('close', callback);
    }

    /**
     * @inheritDoc
     */
    onErrorAdapter(callback) {
        this[this._getStreamString()].on('error', callback);
    }

    /*
     * @inheritDoc
     */
    sendAdapter(data) {
        if (this._serialPort.isOpen) {
            this._serialPort.write(data);
        }
    }

    /**
     * @inheritDoc
     */
    connect() {
        this._serialPort.open();
        return this;
    }

    /**
     * @inheritDoc
     */
    close() {
        this._serialPort.close();
        return this;
    }

    /**
     * @private
     */
    _getStreamString() {
        return this._parser ? '_parser' : '_serialPort';
    }
}