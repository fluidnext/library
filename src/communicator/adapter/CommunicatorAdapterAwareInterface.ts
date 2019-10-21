import {CommunicatorAdapterInterface} from "./CommunicatorAdapterInterface";

/**
 * @interface CommunicatorAdapterInterface
 */
export interface CommunicatorAdapterAwareInterface {

    /**
     * @return any.
     */
    getCommunicatorAdapter() : any;

    /**
     * @return CommunicatorAdapterInterface.
     */
    getCommunicatorAdapter(adapter: any) : CommunicatorAdapterInterface;
}