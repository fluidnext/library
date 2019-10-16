/**
 * @interface CommunicatorInterface
 */
export interface CommunicatorInterface {
    /**
     * @param {Function} callback
     */
    onMessage(callback: Function): void;
    /**
     * @param data
     */
    send(data: Object): void;
}