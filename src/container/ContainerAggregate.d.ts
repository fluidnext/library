import { ContainerInterface } from './ContainerInterface';
import { ContainerAwareInterface } from "./ContainerAwareInterface";
/**
 * Container
 */
export declare class ContainerAggregate implements ContainerInterface, ContainerAwareInterface {
    /**
     * @type {ContainerInterface}
     */
    protected container: ContainerInterface;
    /**
     * @type {object}
     */
    protected services: object;
    /**
     * @type any
     */
    protected prototipeClass: any;
    /**
     * @inheritDoc
     */
    getContainer(): ContainerInterface;
    /**
     * @inheritDoc
     */
    setContainer(container: ContainerInterface): this;
    /**
     * @inheritDoc
     */
    get(id: string): any;
    /**
     * @inheritDoc
     */
    getAsync(id: string): Promise<any>;
    /**
     * @inheritDoc
     */
    has(id: string): boolean;
    /**
     * @inheritDoc
     */
    set(id: string, service: any): this;
    /**
     * @param service
     */
    protected isValid(service: any): boolean;
    /**
     * @param prototipeClass
     * @return {this}
     */
    setPrototipeClass(prototipeClass: any): this;
}
