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
     * @param {Function} data
     */
    send(data: Object): void;

    /**
     * @return {string}
     */
    getPath();

    /**
     * @return Promise
     */
    close();
}
