const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const Int32Reader = require('./Int32Reader');
const UInt32Reader = require('./UInt32Reader');
const dxt = require('dxt-js');
const Log = require('../../Log');
const XnbError = require('../../XnbError');

/**
 * Binary file Reader
 * @class
 * @extends BaseReader
 */
class RawBinaryFileReader extends BaseReader {
    /**
     * Reads Binary file from buffer.
     * @param {BufferReader} buffer
     * @returns {Object}
     */
    read(buffer) {
        let data = buffer.read(buffer.size - buffer.bytePosition);
        // return the data
        return {
            export: { type: this.type, data }
        };
    }

    /**
     * Writes Binary file into buffer
     * @param {BufferWriter} buffer
     * @param {Mixed} data
     * @param {ReaderResolver}
     */
    write(buffer, content, resolver) {
        // write index of reader
        this.writeIndex(buffer, resolver);
        buffer.concat(content.data);
    }

	isValueType() {
        return false;
    }
}

module.exports = RawBinaryFileReader;
