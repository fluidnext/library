/**
 * @class SerialPortCommunicatorAdapter
 */
export class SerialPortCommunicatorAdapter {
    /**
     * @param {String} port
     * @param {Object} options
     */
    constructor(port, options) {
        /**
         * @type {Array}
         */
        this._listeners = [];
        this._listeners = [];
        const SerialPort = require("serialport");
        this._serialPort = new SerialPort(port, options);
        this._serialPort.on('open', (data => {
            console.log('OPENNNNNNNNNNNNNNNNN', data, port);
            for (let cont = 0; this._listeners.length > cont; cont++) {
                this._serialPort.on('data', this._listeners[cont]);
            }
            this._listeners = [];
        }));
        this._serialPort.on('close', (data => { console.log('CLOSEEEEEEEEEEEEEE', data, port); }));
        this._serialPort.on('error', (data => { console.log('ERRORRRRRRRRRRRRRRR', data), port; }));
    }
    /**
     * @param callback
     */
    onMessageAdapter(callback) {
        if (this._serialPort.isOpen) {
            this._serialPort.on('data', callback);
        }
        else {
            this._listeners.push(callback);
        }
    }
    /*
     * @param data
     */
    sendAdapter(data) {
        this._serialPort.write(data);
    }
    /**
     * @param data
     */
    generateMockData(data) {
        this._serialPort.emit('data', data);
    }
}
//# sourceMappingURL=SerialPortCommunicatorAdapter.js.map