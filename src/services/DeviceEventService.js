const { devices, deviceEvents, deviceEventsAction } = require('../dummy')

class DeviceEventService {

    async getAllDeviceEvent(){
        const deviceEventArray = [
            {
                id: 1,
                timestamp: '1628676001',
                machine: 'CNC Machine',
                anomaly: 'Mild',
                sensor: '1234567890',
                soundClip: '1.wav',
                urlSoundClip: 'http://localhost:9000/storage/1.wav',
            },
            {
                id: 2,
                timestamp: '1628676001',
                machine: 'CNC Machine',
                anomaly: 'Mild',
                sensor: '1234567890',
                soundClip: '2.wav',
                urlSoundClip: 'http://localhost:9000/storage/2.wav',
            },
            {
                id: 3,
                timestamp: '1628676001',
                machine: 'CNC Machine',
                anomaly: 'Mild',
                sensor: '1234567890',
                soundClip: '3.wav',
                urlSoundClip: 'http://localhost:9000/storage/3.wav',
            }
        ];
        return deviceEvents;
    }

    async getSingleDeviceEventDetail(idDeviceEvent){
        // Find device event
        const deviceEvent = deviceEvents.find( de => de.id === idDeviceEvent );
        if(!deviceEvent) return null;

        // Find device
        const device = devices.find( d => d.idSensor === deviceEvent.idSensor );

        // Find action
        const action = deviceEventsAction.find( d => d.idDeviceEvent === idDeviceEvent);

        // return result
        const result = {
            ...deviceEvent,
            device,
            action,
        }
        return result;
    }

    async upsertDeviceEventAction(data){
        const index = deviceEventsAction.findIndex( d => d.idDeviceEvent === data.idDeviceEvent );
        if(index<0){
            deviceEventsAction.push(data);
        }else{
            deviceEventsAction[index] = data;
        }
    }
}

module.exports = new DeviceEventService();