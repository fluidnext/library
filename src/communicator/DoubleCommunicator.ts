import {CommunicatorInterface} from "./CommunicatorInterface";
import {CommunicatorAdapterInterface} from "./adapter/CommunicatorAdapterInterface";
import {EventManager, EventManagerInterface} from "../event";

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
     * @type CommunicatorAdapterInterface
     */
    protected eventManager: EventManagerInterface;

    /**
     * @param {CommunicatorAdapterInterface} receiverAdapter
     * @param {CommunicatorAdapterInterface} senderAdapter
     */
    constructor(receiverAdapter: CommunicatorAdapterInterface, senderAdapter: CommunicatorAdapterInterface) {

        this.senderAdapter = senderAdapter;

        this.receiverAdapter = receiverAdapter;

        this.eventManager = new EventManager();
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
        this.eventManager.emit('send', data);
        this.senderAdapter.sendAdapter(data);
    }

    /**
     * @inheritDoc
     */
    onSend(callback: Function): void {
        this.eventManager.on('send', callback);
    }
}