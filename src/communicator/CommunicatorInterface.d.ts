/**
 * @interface CommunicatorInterface
 */
export interface CommunicatorInterface {
    /**
     * @param {Function} callback
     */
    onMessage(callback: Function): void;
    /**
     * @param {Function} callback
     */
    onError(callback: Function): void;
    /**
     * @param {Function} callback
     */
    onSend(callback: Function): void;
    /**
     * @param data
     */
    send(data: Object): void;
    /**
     * @return {string}
     */
    getPath(): any;
    /**
     * @return Promise
     */
    close(): any;
}
