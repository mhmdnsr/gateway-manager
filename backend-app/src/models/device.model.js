const mongoose = require("mongoose");
const gatewaySchema = require('../schemas/gateway.schema');
const errorHandler = require('../shared/error-handler');

let Gateway = mongoose.model('Gateway', gatewaySchema);

module.exports = {
    verifyUid: (gatewayId, uid) => {
        return new Promise(resolve => {
            Gateway.exists({_id: gatewayId, "devices.uid": uid}, (err, isExist) => {
                if (err) {
                    resolve({result: false});
                } else {
                    resolve({result: !!isExist});
                }
            });
        });
    },
    getAllDevicesByGatewayId: (gatewayId) => {
        return new Promise((resolve, reject) => {
            Gateway.findById(gatewayId, (err, gateway) => {
                if (err) {
                    reject(errorHandler(400, {code: 11, message: "Gateway doesn't exist!"}));
                } else {
                    if (gateway) {
                        resolve(gateway.devices);
                    } else {
                        reject(errorHandler(400, {code: 11, message: "Gateway doesn't exist!"}));
                    }
                }
            }).select("devices");
        });
    },
    getDeviceById: (gatewayId, deviceId) => {
        return new Promise((resolve, reject) => {
            Gateway.findById(gatewayId, (err, gateway) => {
                if (err) {
                    reject(errorHandler(400, {code: 51, message: "Gateway doesn't exist!"}));
                } else {
                    if (gateway) {
                        let device = gateway.devices.id(deviceId);
                        if (device) {
                            resolve(device);
                        } else {
                            reject(errorHandler(400, {code: 52, message: "Device doesn't exist!"}));
                        }
                    } else {
                        reject(errorHandler(400, {code: 51, message: "Gateway doesn't exist!"}));
                    }
                }
            });
        });
    },
    addDevice: (gatewayId, {uid, vendor, status, createdAt}) => {
        return new Promise((resolve, reject) => {
            Gateway.findById(gatewayId).then((gateway) => {
                if (gateway.devices.length < 10) {
                    Gateway.findOneAndUpdate({"_id": gatewayId, "devices.uid": {$ne: uid}},
                        {$push: {devices: {_id: new mongoose.Types.ObjectId(), uid, vendor, status, createdAt}}}, {new: true},
                        (err, gateway) => {
                            if (err) {
                                // reject(errorHandler(400, {code: 61, message: `Adding device ${uid} failed!`}));
                                reject(errorHandler(400, {code: 61, message: err}));
                            } else {
                                if (gateway) {
                                    resolve(gateway.devices);
                                } else {
                                    reject(errorHandler(400, {code: 61, message: `Adding device ${uid} failed!`}));
                                }
                            }
                        }
                    );
                } else {
                    reject(errorHandler(400, {code: 62, message: `Count of devices exceeds the limit!`}));
                }
            }).catch((err) => {
                reject(errorHandler(400, {code: 61, message: `Adding device ${uid} failed!`}));
            });
        });
    },
    updateDeviceStatus: (gatewayId, deviceId, status) => {
        return new Promise((resolve, reject) => {
            Gateway.findOneAndUpdate({"_id": gatewayId, "devices._id": deviceId},
                {$set: {"devices.$.status": status}}, {new: true},
                (err, gateway) => {
                    if (err) {
                        reject(errorHandler(400, {code: 71, message: `Updating device status failed!`}));
                    } else {
                        if (gateway) {
                            let device = gateway.devices.id(deviceId);
                            if (device) {
                                resolve(device);
                            } else {
                                reject(errorHandler(400, {code: 73, message: `Device doesn't exist!`}));
                            }
                        } else {
                            reject(errorHandler(400, {code: 72, message: `Gateway doesn't exist!`}));
                        }
                    }
                }
            );
        });
    },
    deleteDevice: (gatewayId, deviceId) => {
        return new Promise((resolve, reject) => {
            Gateway.findOneAndUpdate({"_id": gatewayId}, {$pull: {"devices": {_id: deviceId}}}, (err, gateway) => {
                if (err) {
                    reject(errorHandler(400, {code: 81, message: "Device cannot be deleted!"}));
                } else {
                    if (gateway) {
                        let device = gateway.devices.id(deviceId)
                        if (device) {
                            resolve({status: true});
                        } else {
                            reject(errorHandler(400, {code: 83, message: "Device doesn't exist!"}));
                        }
                    } else {
                        reject(errorHandler(400, {code: 82, message: "Gateway doesn't exist!"}));
                    }
                }
            })
        })
    }
};
