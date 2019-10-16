import {HydratorInterface} from "./HydratorInterface";

/**
 *
 */
export class HydratorAware {

    /**
     * @type HydratorInterface;
     */
    protected hydrator: HydratorInterface;

    /**
     * @return {HydratorInterface}
     */
    getHydrator() {
        return this.hydrator;
    }

    /**
     * @param {HydratorInterface} hydrator
     * @return {this}
     */
    setHydrator(hydrator: HydratorInterface) {
        this.hydrator = hydrator;
        return this;
    };
}