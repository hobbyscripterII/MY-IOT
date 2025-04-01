$(document).ready(() => {
	const topic   = '/mqtt/default_sensor_test';
	const client  = mqtt.connect('ws://ljy.myddns.me:8081');
	const message = 'MESSAGE';

	client.on('connect', () => {
		console.log('mqtt 연결 성공');
		
		client.subscribe(topic, (e) => {
			if(e) {
				console.log(`mqtt 토픽 발행 실패 = ${e}`);
			} else {
				console.log(`mqtt 토픽 발행 성공 = ${topic}`);
			}
		});
	});
	
	client.publish(topic, message);

	client.on('message', (topic, message) => {
		const json           = JSON.parse(message);
		const responseData   = message;
		const jsonTimestamp  = json.timestamp;
		const jsonVoltage    = json.voltage;
		const jsonBattery    = json.battery;
		const jsonRssi       = json.rssi;
		const responseTimeEl = $('#response-time');
		const responseDataEl = $('#response-data');
		const voltageEl      = $('#voltage');
		const batteryEl      = $('#battery');
		const rssiEl         = $('#rssi');
		
		responseTimeEl.text(jsonTimestamp);
		responseDataEl.text(responseData);
		voltageEl.text(jsonVoltage);
		batteryEl.text(jsonBattery);
		rssiEl.text(jsonRssi);
	});
});