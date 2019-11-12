"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../event");
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
        this.eventManager = new event_1.EventManager();
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
        let sendData = (data !== null && typeof data === 'object') ? JSON.stringify(data) : data;
        this.senderAdapter.sendAdapter(sendData);
    }
    /**
     * @inheritDoc
     */
    onSend(callback) {
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
    setSenderAdapter(adapter) {
        this.senderAdapter = adapter;
        return this;
    }
    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @return CommunicatorAdapterInterface
     */
    setReceiverAdapter(adapter) {
        this.receiverAdapter = adapter;
    }
    /**
     * @inheritDoc
     */
    getPath() {
        return 'TODO';
    }
    close() {
        new Promise((resolve, reject) => { });
    }
}
exports.DoubleCommunicator = DoubleCommunicator;
