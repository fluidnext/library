/**
 * @interface CommunicatorAdapterInterface
 */
export interface CommunicatorAdapterInterface {
    /**
     * @param {Function} callback
     */
    onMessageAdapter(callback: Function): void;
    /**
     * @param data
     */
    sendAdapter(data: Object): void;
}
