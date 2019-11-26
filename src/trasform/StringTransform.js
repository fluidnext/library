/**
 * @class StringTransform
 */
export class StringTransform {
    /**
     * @inheritDoc
     */
    transform(data) {
        let transform = '';
        switch (true) {
            case data !== null && typeof data === 'object':
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
//# sourceMappingURL=StringTransform.js.map