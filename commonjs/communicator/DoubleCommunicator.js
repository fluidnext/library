"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class DoubleCommunicator
 */
class DoubleCommunicator {
    /**
     * @param {CommunicatorAdapterInterface} receiverAdapter
     * @param {CommunicatorAdapterInterface} senderAdapter
     */
    constructor(receiverAdapter, senderAdapter) {
        this.senderAdapter = senderAdapter;
        this.receiverAdapter = receiverAdapter;
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
        this.senderAdapter.sendAdapter(data);
    }
}
exports.DoubleCommunicator = DoubleCommunicator;
