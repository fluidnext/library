import {CommunicatorInterface} from "./CommunicatorInterface";
import {CommunicatorAdapterInterface} from "./adapter/CommunicatorAdapterInterface";
import {EventManager, EventManagerInterface} from "../event";
import {TransformInterface} from "../trasform/TransformInterface";
/**
 * @class Communicator
 */
export class Communicator implements CommunicatorInterface {

    /**
     * @type {CommunicatorAdapterInterface}
     */
    protected adapter: CommunicatorAdapterInterface;

    /**
     * @type CommunicatorAdapterInterface
     */
    protected eventManager: EventManagerInterface;

    /**
     * @type TransformInterface
     */
    protected transform: TransformInterface = null;

    /**
     * @param {CommunicatorAdapterInterface} adapter
     * @param {TransformInterface} transform
     */
    constructor(adapter: CommunicatorAdapterInterface, transform: TransformInterface = null) {

        this.adapter = adapter;

        this.eventManager = new EventManager();

        this.transform = transform
;    }

    /**
     * @inheritDoc
     */
    getPath() {
        this.adapter.getPath()
    }

    /**
     * @inheritDoc
     */
    onMessage(callback: Function): void {
        this.adapter.onMessageAdapter(callback);
    }

    /**
     * @inheritDoc
     */
    onError(callback: Function): void {
        this.adapter.onErrorAdapter(callback);
    }

    /**
     * @inheritDoc
     */
    onSend(callback: Function): void {
        this.eventManager.on('send', callback);
    }

    /**
     * @inheritDoc
     */
    send(data: any): void {
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
