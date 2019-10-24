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
    send(data: any): void {
        this.eventManager.emit('send', data);
        let sendData = (data !== null && typeof data === 'object') ? JSON.stringify(data) : data;
        this.senderAdapter.sendAdapter(sendData);
    }

    /**
     * @inheritDoc
     */
    onSend(callback: Function): void {
        this.eventManager.on('send', callback);
    }

    /**
     * @return CommunicatorAdapterInterface
     */
    getSenderAdapter() {
        return this.senderAdapter;
    }

    /**
     * @return CommunicatorAdapterInterface
     */
    getReceiverAdapter() {
        return this.receiverAdapter;
    }

    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @return CommunicatorAdapterInterface
     */
    setSenderAdapter(adapter: CommunicatorAdapterInterface) {
        this.senderAdapter = adapter;
        return this;
    }

    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @return CommunicatorAdapterInterface
     */
    setReceiverAdapter(adapter: CommunicatorAdapterInterface) {
        this.receiverAdapter = adapter;
    }
}