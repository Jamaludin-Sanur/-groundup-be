const DeviceEventService = require('../services/DeviceEventService');

exports.getAllDeviceEvent = async (req, res, next) => {
    const allDeviceEvent = await DeviceEventService.getAllDeviceEvent();
    res.locals.result = allDeviceEvent;
    next();
}

exports.getSingleDeviceEventDetail = async (req, res, next) => {
    const idDeviceEvent = req.query.idDeviceEvent;
    const deviceEvent = await DeviceEventService.getSingleDeviceEventDetail(idDeviceEvent);
    res.locals.result = deviceEvent;
    next();
}

exports.upsertDeviceEventAction = async (req, res, next) => {
    if(!req.body?.idDeviceEvent) throw new Error('idDeviceEvent is required');
    const result = await DeviceEventService.upsertDeviceEventAction(req.body);
    res.locals.result = result;
    next();
}