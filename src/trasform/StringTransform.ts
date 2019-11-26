import {TransformInterface} from "./TransformInterface";

/**
 * @class StringTransform
 */
export class StringTransform implements TransformInterface {

    /**
     * @inheritDoc
     */
    transform(data: any): any {

        let transform = '';

        switch (true) {
            case data !== null && typeof data === 'object' :
                transform = JSON.stringify(data);
                break;
            case typeof data === 'number':
            case typeof data === 'boolean':
                transform = data.toString();
                break;
        }

        return transform;
    }

}