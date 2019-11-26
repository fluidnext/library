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
     * @param {Function} data
     */
    sendAdapter(data: string, callback?: Function): void;
    /**
     * @return CommunicatorAdapterInterface
     */
    connect(): CommunicatorAdapterInterface;
    /**
     * @return CommunicatorAdapterInterface
     */
    close(): any;
    /**
     * @return string
     */
    getPath(): any;
}
