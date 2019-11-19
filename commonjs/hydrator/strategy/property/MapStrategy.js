"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class MapStrategy
 */
class MapStrategy {
    /**
     * @param {string} hydrate
     * @param {string} extract
     */
    constructor(hydrate, extract) {
        /**
         * @type {object}
         */
        this.changeExtractProperty = null;
        /**
         * @type {null}
         */
        this.changeHydrateProperty = null;
        this.changeHydrateProperty = hydrate;
        this.changeExtractProperty = extract;
    }
    /**
     * @inheritDoc
     */
    extractProperty(property) {
        return this.changeExtractProperty ? this.changeExtractProperty : property;
    }
    /**
     * @inheritDoc
     */
    hydrateProperty(property) {
        return this.changeHydrateProperty ? this.changeHydrateProperty : property;
    }
}
exports.MapStrategy = MapStrategy;
