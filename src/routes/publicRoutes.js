const express = require('express');
const { getAllDeviceEvent, getSingleDeviceEventDetail, upsertDeviceEventAction } = require('../middlewares/deviceEventMiddleware');
const { onRequest, errorMiddleware, successMiddleware } = require('../middlewares/httpMiddleware');

const router = express.Router();
router.get('/deviceEvent/all', onRequest, getAllDeviceEvent, successMiddleware, errorMiddleware);
router.get('/deviceEvent/single/detail', onRequest, getSingleDeviceEventDetail, successMiddleware, errorMiddleware);
router.post('/deviceEvent/upsert', onRequest, upsertDeviceEventAction, successMiddleware, errorMiddleware);
module.exports = router;
