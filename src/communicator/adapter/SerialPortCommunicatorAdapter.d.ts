import { CommunicatorAdapterInterface } from "./CommunicatorAdapterInterface";
import { CommunicatorAdapterAwareInterface } from "./CommunicatorAdapterAwareInterface";
/**
 * @class SerialPortCommunicatorAdapter
 */
export declare class SerialPortCommunicatorAdapter implements CommunicatorAdapterInterface, CommunicatorAdapterAwareInterface {
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
     * @inheritDoc
     */
    getCommunicatorAdapter(): any;
    /**
     * @inheritDoc
     */
    setCommunicatorAdapter(adapter: any): this;
    /**
     * @inheritDoc
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
    sendAdapter(data: any): void;
    /**
     * @inheritDoc
     */
    connect(): this;
}
