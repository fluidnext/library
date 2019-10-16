import { CommunicatorInterface } from "./CommunicatorInterface";
import { CommunicatorAdapterInterface } from "./adapter/CommunicatorAdapterInterface";
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
    send(data: Object): void;
}
