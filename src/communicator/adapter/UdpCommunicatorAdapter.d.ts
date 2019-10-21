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
     * @param {String} port
     */
    constructor(port: string);
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
}
