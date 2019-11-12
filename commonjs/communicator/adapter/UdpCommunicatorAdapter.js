"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class UdpCommunicatorAdapter
 */
class UdpCommunicatorAdapter {
    /**
     * @param {String} port
     * @param  options
     */
    constructor(port, options) {
        /**
         * @type string
         */
        this._sentAddress = 'localhost';
        /**
         * @type boolean
         */
        this._isBroadcast = false;
        const Dgram = require('dgram');
        this._udp = Dgram.createSocket('udp4');
        options = options ? options : {};
        this._isBroadcast = !!options['broadcast'];
        this._sendPort = options['sendPort'] ? options['sendPort'] : null;
        this._sentAddress = options['sentAddress'] ? options['sentAddress'] : this._sentAddress;
        this._port = port;
        this._udp.on('listening', () => {
            this._udp.setBroadcast(this._isBroadcast);
        });
    }
    /**
     * @param callback
     */
    onMessageAdapter(callback) {
        this._udp.on('message', callback);
    }
    /**
     * @inheritDoc
     */
    onCloseAdapter(callback) {
        this._udp.on('close', callback);
    }
    /**
     * @inheritDoc
     */
    onErrorAdapter(callback) {
        this._udp.on('error', callback);
    }
    /**
     * @inheritDoc
     */
    sendAdapter(data) {
        this._udp.send(data, 0, data.length, this._sendPort, this._sentAddress);
    }
    /**
     * @inheritDoc
     */
    connect() {
        this._udp.bind(this._port);
        return this;
    }
    /**
     * @inheritDoc
     */
    close() {
        return new Promise((resolve, reject) => {
            try {
                this._udp.close((data) => {
                    console.log('CLOSE SOCKET', data);
                    resolve(this);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     *
     */
    getPath() {
        return this._udp.port;
    }
}
exports.UdpCommunicatorAdapter = UdpCommunicatorAdapter;
