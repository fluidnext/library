import { CommunicatorInterface } from "./CommunicatorInterface";
import { CommunicatorAdapterInterface } from "./adapter/CommunicatorAdapterInterface";
import { EventManagerInterface } from "../event";
/**
 * @class DoubleCommunicator
 */
export declare class DoubleCommunicator implements CommunicatorInterface {
    /**
     * @type CommunicatorAdapterInterface
     */
    protected receiverAdapter: CommunicatorAdapterInterface;
    /**
     * @type CommunicatorAdapterInterface
     */
    protected senderAdapter: CommunicatorAdapterInterface;
    /**
     * @type CommunicatorAdapterInterface
     */
    protected eventManager: EventManagerInterface;
    /**
     * @param {CommunicatorAdapterInterface} receiverAdapter
     * @param {CommunicatorAdapterInterface} senderAdapter
     */
    constructor(receiverAdapter: CommunicatorAdapterInterface, senderAdapter: CommunicatorAdapterInterface);
    /**
     * @inheritDoc
     */
    onMessage(callback: Function): void;
    /**
     * @inheritDoc
     */
    send(data: any): void;
    /**
     * @inheritDoc
     */
    onSend(callback: Function): void;
    /**
     * @return CommunicatorAdapterInterface
     */
    getSenderAdapter(): CommunicatorAdapterInterface;
    /**
     * @return CommunicatorAdapterInterface
     */
    getReceiverAdapter(): CommunicatorAdapterInterface;
    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @return CommunicatorAdapterInterface
     */
    setSenderAdapter(adapter: CommunicatorAdapterInterface): this;
    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @return CommunicatorAdapterInterface
     */
    setReceiverAdapter(adapter: CommunicatorAdapterInterface): void;
}
