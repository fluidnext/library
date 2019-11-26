"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../event");
/**
 * @class Communicator
 */
class Communicator {
    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @param {TransformInterface} transform
     */
    constructor(adapter, transform = null) {
        /**
         * @type TransformInterface
         */
        this.transform = null;
        this.adapter = adapter;
        this.eventManager = new event_1.EventManager();
        this.transform = transform;
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
        this.adapter.sendAdapter(this.transform ? this.transform.transform(data) : data);
    }
    /**
     * @inheritDoc
     */
    close() {
        return this.adapter.close();
    }
}
exports.Communicator = Communicator;
