import { CommunicatorInterface } from "./CommunicatorInterface";
import { CommunicatorAdapterInterface } from "./adapter/CommunicatorAdapterInterface";
import { EventManagerInterface } from "../event";
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
     * @param adapter
     */
    constructor(adapter: CommunicatorAdapterInterface);
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
