/**
 * @interface CommunicatorAdapterInterface
 */
export interface CommunicatorAdapterInterface {

    /**
     * @param {Function} callback
     */
    onMessageAdapter(callback: Function): void;

    /**
     * @param {Function} callback
     */
    onErrorAdapter(callback: Function): void;

    /**
     * @param {Function} callback
     */
    onCloseAdapter(callback: Function): void;

    /**
     * @param data
     */
    sendAdapter(data: Object): void;

    /**
     * @return CommunicatorAdapterInterface
     */
    connect(): CommunicatorAdapterInterface;
}