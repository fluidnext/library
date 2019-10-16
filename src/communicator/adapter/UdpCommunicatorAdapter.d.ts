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
     * @param {String} port
     * @param {Object} options
     */
    constructor(port: string, options: object);
    /**
     * @param callback
     */
    onMessageAdapter(callback: any): void;
    sendAdapter(data: any): void;
    /**
     * @param data
     */
    generateMockData(data: any): void;
}
