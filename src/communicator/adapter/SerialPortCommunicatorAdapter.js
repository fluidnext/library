/**
 * @class SerialPortCommunicatorAdapter
 */
export class SerialPortCommunicatorAdapter {
    /**
     * @param {String} port
     * @param {Object} options
     */
    constructor(port, options) {
        const SerialPort = require("serialport");
        options = options ? options : {};
        options = Object.assign(options, { autoOpen: false });
        this._serialPort = new SerialPort(port, options);
    }
    /**
     * @inheritDoc
     */
    getCommunicatorAdapter() {
        return this._serialPort;
    }
    /**
     * @inheritDoc
     */
    setCommunicatorAdapter(adapter) {
        this._serialPort = adapter;
        return this;
    }
    /**
     * @inheritDoc
     */
    onMessageAdapter(callback) {
        this._serialPort.on('data', callback);
    }
    /**
     * @inheritDoc
     */
    onCloseAdapter(callback) {
        this._serialPort.on('close', callback);
    }
    /**
     * @inheritDoc
     */
    onErrorAdapter(callback) {
        this._serialPort.on('error', callback);
    }
    /*
     * @inheritDoc
     */
    sendAdapter(data) {
        if (this._serialPort.isOpen) {
            this._serialPort.write(data);
        }
    }
    /**
     * @inheritDoc
     */
    connect() {
        this._serialPort.open();
        return this;
    }
}
//# sourceMappingURL=SerialPortCommunicatorAdapter.js.map