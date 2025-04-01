$(document).ready(() => {
	const topic   = '/mqtt/default_sensor_test';
	const client  = mqtt.connect('ws://ljy.myddns.me:8081');
	const message = 'MESSAGE';
	
	/*
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
		const timestamp      = json.timestamp;
		const voltage        = json.voltage;
		const battery        = json.battery;
		const rssi           = json.rssi;
		const heapMemory	 = json.heapMemory;
		const responseTimeEl = $('#response-time');
		const responseDataEl = $('#response-data');
		const voltageEl      = $('#voltage');
		const batteryEl      = $('#battery');
		const rssiEl         = $('#rssi');
		const heapMemoryEl   = $('#heap-memory');
		
		responseTimeEl.text(timestamp);
		responseDataEl.text(responseData);
		voltageEl.text(voltage);
		batteryEl.text(battery);
		rssiEl.text(rssi);
		heapMemoryEl.text(heapMemory);
	});
	*/
});