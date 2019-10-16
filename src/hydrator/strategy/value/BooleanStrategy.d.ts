import { ValueStrategyInterface } from "./ValueStrategyInterface";
/**
 *
 */
export declare class BooleanStrategy implements ValueStrategyInterface {
    /**
     * @param {string} property
     * @param data
     * @return {any}
     */
    hydrateValue(property: string, data: any): any;
    /**
     *
     * @param data
     * @returns {{}|*}
     */
    extractValue(data: any): any;
}
