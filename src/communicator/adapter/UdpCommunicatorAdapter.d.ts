import { CommunicatorAdapterInterface } from "./CommunicatorAdapterInterface";
/**
 * @class UdpCommunicatorAdapter
 */
export declare class UdpCommunicatorAdapter implements CommunicatorAdapterInterface {
    /**
     * @type
     */
    protected _udp: any;
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
    protected _sentAddress: string;
    /**
     * @type boolean
     */
    protected _isBroadcast: boolean;
    /**
     * @param {String} port
     * @param  options
     */
    constructor(port: string, options: any);
    /**
     * @param callback
     */
    onMessageAdapter(callback: any): void;
    /**
     * @inheritDoc
     */
    onCloseAdapter(callback: any): void;
    /**
     * @inheritDoc
     */
    onErrorAdapter(callback: any): void;
    /**
     * @inheritDoc
     */
    sendAdapter(data: any): void;
    /**
     * @inheritDoc
     */
    connect(): this;
    /**
     * @inheritDoc
     */
    close(): this;
}
