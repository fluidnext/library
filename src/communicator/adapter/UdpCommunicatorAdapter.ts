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
     * @type string
     */
    protected _sendPort: string;

    /**
     * @type string
     */
    protected _sentAddress: string = 'localhost';

    /**
     * @type boolean
     */
    protected _isBroadcast: boolean = false;


    /**
     * @param {String} port
     * @param  options
     */
    constructor(port: string, options: any) {

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
        this._udp.close();
        return this;
    }
}