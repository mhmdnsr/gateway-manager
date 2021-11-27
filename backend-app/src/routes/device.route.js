const express =  require('express');
const deviceController = require('../controllers/device.controller');

const router = express.Router();

router.post('/verifyUID', deviceController.verifyUid);

router.get('/:gatewayId/all', deviceController.getAllDevicesByGatewayId);

router.get('/:gatewayId/:deviceId', deviceController.getDeviceById);

router.post('/', deviceController.addDevice);

router.put('/', deviceController.updateDevice);

router.delete('/:gatewayId/:deviceId', deviceController.deleteDevice);

module.exports = router;
