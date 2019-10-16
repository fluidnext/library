import { CommunicatorAdapterInterface } from "./CommunicatorAdapterInterface";
/**
 * @class SerialPortCommunicatorAdapter
 */
export declare class SerialPortCommunicatorAdapter implements CommunicatorAdapterInterface {
    /**
     * @type {Array}
     */
    protected _listeners: Array<Function>;
    /**
     * @type serialPort
     */
    protected _serialPort: any;
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
