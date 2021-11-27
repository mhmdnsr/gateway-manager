const mongoose = require("mongoose");
const deviceSchema = require("./device.schema");

const gatewaySchema = new mongoose.Schema({
    serialNumber: {
        required: true,
        unique: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    ipAddress: {
        required: true,
        type: String,
        validate: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
    },
    devices: {
        type: [deviceSchema],
        required: false,
        default: [],
        validate: [(val) => val.length <= 10]
    },
    _createdAt: {
        type: Date,
        required: false,
        default: new Date()
    },
    _updatedAt: {
        type: Date,
        required: false,
        default: undefined
    }
});

module.exports = gatewaySchema;
