import {CommunicatorInterface} from "./CommunicatorInterface";
import {CommunicatorAdapterInterface} from "./adapter/CommunicatorAdapterInterface";

/**
 * @class DoubleCommunicator
 */
export class DoubleCommunicator implements CommunicatorInterface{

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
    constructor(receiverAdapter: CommunicatorAdapterInterface, senderAdapter: CommunicatorAdapterInterface) {

        this.senderAdapter = senderAdapter;

        this.receiverAdapter = receiverAdapter;
    }

    /**
     * @inheritDoc
     */
    onMessage(callback: Function): void {
        this.receiverAdapter.onMessageAdapter(callback);
    }

    /**
     * @inheritDoc
     */
    send(data: Object): void {
        this.senderAdapter.sendAdapter(data);
    }
}