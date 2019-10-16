import { HydratorInterface } from "./HydratorInterface";
/**
 *
 */
export declare class HydratorAware {
    /**
     * @type HydratorInterface;
     */
    protected hydrator: HydratorInterface;
    /**
     * @return {HydratorInterface}
     */
    getHydrator(): HydratorInterface;
    /**
     * @param {HydratorInterface} hydrator
     * @return {this}
     */
    setHydrator(hydrator: HydratorInterface): this;
}
