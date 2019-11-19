"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../event");
/**
 * @class Communicator
 */
class Communicator {
    /**
     * @param adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
        this.eventManager = new event_1.EventManager();
        ;
    }
    /**
     * @inheritDoc
     */
    getPath() {
        this.adapter.getPath();
    }
    /**
     * @inheritDoc
     */
    onMessage(callback) {
        this.adapter.onMessageAdapter(callback);
    }
    /**
     * @inheritDoc
     */
    onError(callback) {
        this.adapter.onErrorAdapter(callback);
    }
    /**
     * @inheritDoc
     */
    onSend(callback) {
        this.eventManager.on('send', callback);
    }
    /**
     * @inheritDoc
     */
    send(data) {
        this.eventManager.emit('send', data);
        //TODO trasformer to get string???
        let sendData = (typeof data === 'object') ? JSON.stringify(data) : data;
        this.adapter.sendAdapter(sendData);
    }
    /**
     * @inheritDoc
     */
    close() {
        return this.adapter.close();
    }
}
exports.Communicator = Communicator;
