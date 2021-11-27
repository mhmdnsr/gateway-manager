const gatewayModel = require('../models/gateway.model');

module.exports = {
    verifySerialNumber: (req, res) => {
        let {serialNumber} = req.body;
        if(serialNumber){
            gatewayModel.verifySerialNumber(serialNumber).then((result) => {
                res.status(200).send(result);
            }).catch(err => {
                res.status(400).send({code: 91, message: "Something went wrong!"});
            })
        } else {
            res.status(400).send({code: 90, message: "Please provide valid info!!"});
        }
    },
    getAllGateways: (req, res) => {
        gatewayModel.getAllGateways().then(gateways => {
            res.status(200).send(gateways);
        }).catch(err => {
            res.status(err.statusCode).send(err.error);
        });
    },
    getGateWayById: (req, res) => {
        if (req.params.id) {
            gatewayModel.getGatewayById(req.params.id).then(gateway => {
                res.status(200).send(gateway);
            }).catch(err => {
                res.status(err.statusCode).send(err.error);
            });
        } else {
            res.status(400).send({code: 10, message: "No Id provided!"});
        }
    },
    addGateway: (req, res) => {
        if (req.body) {
            let {serialNumber, name, ipAddress} = req.body;
            if (serialNumber && name && ipAddress) {
                gatewayModel.verifySerialNumber(serialNumber).then(({isExist}) => {
                    if(isExist){
                        res.status(400).send({code: 21, message: "Gateway already exist!"});
                    } else {
                        gatewayModel.addGateway({serialNumber, name, ipAddress}).then((gateway) => {
                            res.status(200).send(gateway);
                        }).catch(err => {
                            res.status(err.statusCode).send(err.error);
                        });
                    }
                }).catch((err) => {
                    res.status(400).send({code: 21, message: "Gateway already exist!"});
                });
            } else {
                res.status(400).send({code: 20, message: "Please provide valid gateway info!"});
            }
        } else {
            res.status(400).send({code: 20, message: "Please provide valid gateway info!"});
        }

    },
    updateGateway: (req, res) => {
        if (req.body) {
            let {id, serialNumber, name, ipAddress} = req.body;
            if (id && serialNumber && name && ipAddress) {
                gatewayModel.updateGateway(id, {serialNumber, name, ipAddress}).then((gateway) => {
                    res.status(200).send(gateway);
                }).catch(err => {
                    res.status(err.statusCode).send(err.error);
                });
            } else {
                res.status(400).send({code: 30, message: "Please provide valid gateway info!"});
            }
        } else {
            res.status(400).send({code: 30, message: "Please provide valid gateway info!"});
        }
    },
    deleteGateway: (req, res) => {
        if (req.params.id) {
            gatewayModel.deleteGateway(req.params.id).then(status => {
                res.status(200).send(status);
            }).catch(err => {
                res.status(err.statusCode).send(err.error);
            });
        } else {
            res.status(400).send({code: 40, message: "No Id provided!"});
        }
    }
};
