import { CommunicatorInterface } from "./CommunicatorInterface";
import { CommunicatorAdapterInterface } from "./adapter/CommunicatorAdapterInterface";
import { EventManagerInterface } from "../event";
import { TransformInterface } from "../trasform/TransformInterface";
/**
 * @class Communicator
 */
export declare class Communicator implements CommunicatorInterface {
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
     * @param {CommunicatorAdapterInterface} adapter
     * @param {TransformInterface} transform
     */
    constructor(adapter: CommunicatorAdapterInterface, transform?: TransformInterface);
    /**
     * @inheritDoc
     */
    getPath(): void;
    /**
     * @inheritDoc
     */
    onMessage(callback: Function): void;
    /**
     * @inheritDoc
     */
    onError(callback: Function): void;
    /**
     * @inheritDoc
     */
    onSend(callback: Function): void;
    /**
     * @inheritDoc
     */
    send(data: any): void;
    /**
     * @inheritDoc
     */
    close(): any;
}
