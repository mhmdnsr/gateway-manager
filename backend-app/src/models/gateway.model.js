const mongoose = require("mongoose");
const gatewaySchema = require('../schemas/gateway.schema');
const errorHandler = require('../shared/error-handler');

let Gateway = mongoose.model('Gateway', gatewaySchema);

module.exports = {
    verifySerialNumber: (serialNumber) => {
        return new Promise(resolve => {
            Gateway.exists({serialNumber: serialNumber}, (err, isExist) => {
                if (err) {
                    resolve({result: false});
                } else {
                    resolve({result: !!isExist});
                }
            });
        });
    },
    getAllGateways: () => {
        return new Promise((resolve, reject) => {
            Gateway.find({}, null, {sort: {"_createdAt": 1}}, (err, gateway) => {
                if (err) {
                    reject(errorHandler(400, {code: 11, message: "Error while getting all gateways!"}))
                } else {
                    resolve(gateway);
                }
            }).select("_id")
                .select("name")
                .select("serialNumber")
                .select("ipAddress")
                .select("devices");
        });
    },
    getGatewayById: (id) => {
        return new Promise((resolve, reject) => {
            Gateway.findById(id, (err, gateway) => {
                if (err) {
                    reject(errorHandler(400, {code: 11, message: "Gateway doesn't exist!"}));
                } else {
                    if (gateway) {
                        resolve(gateway);
                    } else {
                        reject(errorHandler(400, {code: 11, message: "Gateway doesn't exist!"}));
                    }
                }
            }).select("_id")
                .select("name")
                .select("serialNumber")
                .select("ipAddress")
                .select("devices")
                .select("_createdAt")
                .select("_updatedAt");
        });
    },
    addGateway: ({serialNumber, name, ipAddress}) => {
        return new Promise((resolve, reject) => {
            Gateway.create({serialNumber, name, ipAddress}, (err, gateway) => {
                if (err) {
                    if (err.code === 11000) {
                        reject(errorHandler(400, {code: 21, message: "Gateway already exist!"}));
                    } else {
                        reject(errorHandler(400, {code: 22, message: "Please review gateway data!"}));
                    }
                } else {
                    resolve(gateway);
                }
            });
        });
    },
    updateGateway: (id, {serialNumber, name, ipAddress}) => {
        return new Promise((resolve, reject) => {
            Gateway.findByIdAndUpdate(id, {
                serialNumber,
                name,
                ipAddress,
                _updatedAt: new Date()
            }, {new: true}, (err, gateway) => {
                if (err) {
                    if (err.code === 11000) {
                        reject(errorHandler(400, {code: 31, message: "Gateway serial number already exist!"}));
                    } else {
                        reject(errorHandler(400, {code: 32, message: `Failed to update gateway ${id}`}));
                    }
                } else {
                    if (gateway) {
                        resolve(gateway);
                    } else {
                        reject(errorHandler(400, {code: 33, message: `Gateway doesn't exist!`}));
                    }
                }
            });
        });
    },
    deleteGateway: (id) => {
        return new Promise((resolve, reject) => {
            Gateway.findByIdAndDelete(id, {}, (err, gateway) => {
                if (err) {
                    reject(errorHandler(400, {code: 41, message: "Gateway cannot be deleted!"}));
                } else {
                    if (gateway) {
                        resolve({status: true});
                    } else {
                        reject(errorHandler(400, {code: 42, message: "Gateway doesn't exist!"}));
                    }
                }
            })
        })
    }
};
