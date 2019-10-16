import { EventManager } from "../event";
/**
 * @class DoubleCommunicator
 */
export class DoubleCommunicator {
    /**
     * @param {CommunicatorAdapterInterface} receiverAdapter
     * @param {CommunicatorAdapterInterface} senderAdapter
     */
    constructor(receiverAdapter, senderAdapter) {
        this.senderAdapter = senderAdapter;
        this.receiverAdapter = receiverAdapter;
        this.eventManager = new EventManager();
    }
    /**
     * @inheritDoc
     */
    onMessage(callback) {
        this.receiverAdapter.onMessageAdapter(callback);
    }
    /**
     * @inheritDoc
     */
    send(data) {
        this.eventManager.emit('send', data);
        this.senderAdapter.sendAdapter(data);
    }
    /**
     * @inheritDoc
     */
    onSend(callback) {
        this.eventManager.on('send', callback);
    }
}
//# sourceMappingURL=DoubleCommunicator.js.map