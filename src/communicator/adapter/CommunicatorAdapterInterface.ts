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
     * @param {string} data
     */
    sendAdapter(data: string): void;

    /**
     * @return CommunicatorAdapterInterface
     */
    connect(): CommunicatorAdapterInterface;

    /**
     * @return CommunicatorAdapterInterface
     */
    close();

    /**
     * @return string
     */
    getPath();
}