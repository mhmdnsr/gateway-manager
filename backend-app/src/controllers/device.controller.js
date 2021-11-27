const deviceModel = require('../models/device.model');

module.exports = {
    verifyUid: (req, res) => {
      let {gatewayId, uid} = req.body;
      if(gatewayId && uid){
          deviceModel.verifyUid(gatewayId, uid).then((result) => {
              res.status(200).send(result);
          }).catch(err => {
              res.status(400).send({code: 91, message: "Something went wrong!"});
          })
      } else {
          res.status(400).send({code: 90, message: "Please provide valid info!!"});
      }
    },
    getAllDevicesByGatewayId: (req, res) => {
        if (req.params.gatewayId) {
            deviceModel.getAllDevicesByGatewayId(req.params.gatewayId).then(devices => {
                res.status(200).send(devices);
            }).catch(err => {
                res.status(err.statusCode).send(err.error);
            });
        } else {
            res.status(400).send({code: 10, message: "No gatewayId provided!"});
        }
    },
    getDeviceById: (req, res) => {
        let {gatewayId, deviceId} = req.params;
        if (gatewayId && deviceId) {
            deviceModel.getDeviceById(gatewayId, deviceId).then(device => {
                res.status(200).send(device);
            }).catch(err => {
                res.status(err.statusCode).send(err.error);
            });
        } else {
            res.status(400).send({code: 50, message: "Please provide valid info!!"});
        }
    },
    addDevice: (req, res) => {
        let {gatewayId, uid, vendor, status, createdAt} = req.body;
        if (gatewayId && uid && vendor && createdAt) {
            deviceModel.addDevice(gatewayId, {uid, vendor, status, createdAt}).then((device) => {
                res.status(200).send(device);
            }).catch(err => {
                res.status(err.statusCode).send(err.error);
            });
        } else {
            res.status(400).send({code: 60, message: "Please provide valid device info!"});
        }
    },
    updateDevice: (req, res) => {
        let {gatewayId, deviceId, status} = req.body;
        if (gatewayId && deviceId) {
            deviceModel.updateDeviceStatus(gatewayId, deviceId, status).then((device) => {
                res.status(200).send(device);
            }).catch(err => {
                res.status(err.statusCode).send(err.error);
            });
        } else {
            res.status(400).send({code: 70, message: "Please provide valid device info!"});
        }
    },
    deleteDevice: (req, res) => {
        let {gatewayId, deviceId} = req.params;
        if(gatewayId && deviceId){
            deviceModel.deleteDevice(gatewayId, deviceId).then(result => {
                res.status(200).send(result);
            }).catch(err => {
                res.status(err.statusCode).send(err.error);
            })
        } else {
            res.status(400).send({code: 80, message: "No Id provided!"});
        }
    }
};
