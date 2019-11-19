/// <reference types="node" />
import { CommunicatorAdapterInterface } from "./CommunicatorAdapterInterface";
import { CommunicatorAdapterAwareInterface } from "./CommunicatorAdapterAwareInterface";
import { Stream } from "stream";
/**
 * @class SerialPortCommunicatorAdapter
 */
export declare class SerialPortCommunicatorAdapter implements CommunicatorAdapterInterface, CommunicatorAdapterAwareInterface {
    /**
     * @type serialPort
     */
    protected _serialPort: any;
    /**
     * @type Stream
     */
    protected _parser: Stream;
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
     * @param {Stream} parser
     * @return CommunicatorAdapterInterface
     */
    setParser(parser: Stream): this;
    /**
     * @param Stream
     */
    getParser(): Stream;
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
    /**
     * @inheritDoc
     */
    close(): Promise<unknown>;
    /**
     * @inheritDoc
     */
    getPath(): any;
    /**
     * @private
     */
    _getStreamString(): "_parser" | "_serialPort";
}
