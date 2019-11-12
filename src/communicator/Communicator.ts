import {CommunicatorInterface} from "./CommunicatorInterface";
import {CommunicatorAdapterInterface} from "./adapter/CommunicatorAdapterInterface";
import {EventManager, EventManagerInterface} from "../event";
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
     * @param adapter
     */
    constructor(adapter: CommunicatorAdapterInterface) {

        this.adapter = adapter;

        this.eventManager = new EventManager();
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
    onSend(callback: Function): void {
        this.eventManager.on('send', callback);
    }

    /**
     * @inheritDoc
     */
    send(data: any): void {
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
