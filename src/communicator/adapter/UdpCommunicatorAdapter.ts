import {CommunicatorAdapterInterface} from "./CommunicatorAdapterInterface";

/**
 * @class UdpCommunicatorAdapter
 */
export class UdpCommunicatorAdapter implements CommunicatorAdapterInterface {

    /**
     * @type
     */
    protected _udp;

    /**
     * @param {String} port
     * @param {Object} options
     */
    constructor(port: string, options: object) {

        const Dgram = require('dgram');
        this._udp = Dgram.createSocket('udp4');

        this._udp.on('listening', (data => {console.log('LISTEN', this._udp.address, port)}));

        this._udp.on('error', (data => {console.log('ERRORRRRRRRRRRRRRRR', data); }));

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