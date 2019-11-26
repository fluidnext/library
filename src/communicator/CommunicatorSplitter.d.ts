import { CommunicatorInterface } from "./CommunicatorInterface";
import { CommunicatorAdapterInterface } from "./adapter/CommunicatorAdapterInterface";
import { EventManagerInterface } from "../event";
import { TransformInterface } from "../trasform/TransformInterface";
import { Communicator } from "./Communicator";
import { GeneratorInterface } from "../util/generator/GeneratorInterface";
/**
 * @class CommunicatorSplitter
 */
export declare class CommunicatorSplitter extends Communicator implements CommunicatorInterface {
    /**
     * @type {string}
     */
    static SPLITTER_MSG: string;
    /**
     * @type {CommunicatorAdapterInterface}
     */
    protected adapter: CommunicatorAdapterInterface;
    /**
     * @type CommunicatorAdapterInterface
     */
    protected eventManager: EventManagerInterface;
    /**
     * @type TransformInterface
     */
    protected transform: TransformInterface;
    /**
     * @type number
     */
    protected chunk: number;
    /**
     * @type string
     */
    protected splitter: string;
    /**
     * @type object
     */
    protected messageCache: object;
    /**
     * @type GeneratorInterface
     */
    private generator;
    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @param {number} chunk
     * @param {TransformInterface} transform
     */
    constructor(adapter: CommunicatorAdapterInterface, chunk?: number, transform?: TransformInterface);
    /**
     * @param data
     * @private
     */
    _computeMessage(data: any): void;
    /**
     * @inheritDoc
     */
    onMessage(callback: Function): void;
    /**
     * @inheritDoc
     */
    send(data: any): void;
    /**
     * @param data
     * @param chunk
     * @private
     */
    static _splitToArray(data: any, chunk: number): any[];
    /**
     * @param message
     * @private
     */
    _hasAllChunk(message: object): boolean;
    /**
     * @return string
     */
    getSplitter(): string;
    /**
     * @param splitter
     * @return CommunicatorSplitter
     */
    setSplitter(splitter: string): this;
    /**
     * @return GeneratorInterface
     */
    getGenerator(): GeneratorInterface;
    /**
     * @param {GeneratorInterface} generator
     */
    setGenerator(generator: GeneratorInterface): void;
}
