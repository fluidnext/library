"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class SerialPortCommunicatorAdapter
 */
class SerialPortCommunicatorAdapter {
    /**
     * @param {String} port
     * @param {Object} options
     */
    constructor(port, options) {
        /**
         * @type Stream
         */
        this._parser = null;
        const SerialPort = require("serialport");
        options = options ? options : {};
        options = Object.assign(options, { autoOpen: false });
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
    setParser(parser) {
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
    sendAdapter(data, callback) {
        if (this._serialPort.isOpen) {
            this._serialPort.write(data, callback ? callback : () => { });
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
        return new Promise((resolve, reject) => {
            this._serialPort.close((error) => {
                if (error) {
                    reject(error);
                }
                resolve(this);
            });
        });
    }
    /**
     * @inheritDoc
     */
    getPath() {
        return this._serialPort.path;
    }
    /**
     * @private
     */
    _getStreamString() {
        return this._parser ? '_parser' : '_serialPort';
    }
}
exports.SerialPortCommunicatorAdapter = SerialPortCommunicatorAdapter;
