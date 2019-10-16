"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class UdpCommunicatorAdapter
 */
class UdpCommunicatorAdapter {
    /**
     * @param {String} port
     * @param {Object} options
     */
    constructor(port, options) {
        const Dgram = require('dgram');
        this._udp = Dgram.createSocket('udp4');
        this._udp.on('listening', (data => { console.log('LISTEN', this._udp.address, port); }));
        this._udp.on('error', (data => { console.log('ERRORRRRRRRRRRRRRRR', data); }));
        this._udp.bind(port);
    }
    /**
     * @param callback
     */
    onMessageAdapter(callback) {
        this._udp.on('message', callback);
    }
    /*
     * @param data
     */
    sendAdapter(data) {
        this._udp.send(data);
    }
    /**
     * @param data
     */
    generateMockData(data) {
        this._udp.emit('data', data);
    }
}
exports.UdpCommunicatorAdapter = UdpCommunicatorAdapter;
