import { PropertyStrategyInterface } from "./PropertyStrategyInterface";
/**
 * @class MapStrategy
 */
export declare class MapStrategy implements PropertyStrategyInterface {
    /**
     * @type {object}
     */
    private changeExtractProperty;
    /**
     * @type {null}
     */
    private changeHydrateProperty;
    /**
     * @param {string} hydrate
     * @param {string} extract
     */
    constructor(hydrate: string, extract: string);
    /**
     * @inheritDoc
     */
    extractProperty(property: string): string;
    /**
     * @inheritDoc
     */
    hydrateProperty(property: string): string;
}
