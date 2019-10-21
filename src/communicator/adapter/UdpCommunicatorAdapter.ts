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
     * @type string
     */
    protected _port: string;

    /**
     * @param {String} port
     */
    constructor(port: string) {

        const Dgram = require('dgram');
        this._udp = Dgram.createSocket('udp4');

        this._port = port;
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
        this._udp.send(data);
    }

    /**
     * @inheritDoc
     */
    connect() {
        this._udp.bind(this._port);
        return this;
    }
}