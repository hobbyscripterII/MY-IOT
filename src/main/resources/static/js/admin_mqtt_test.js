$(document).ready(() => {
	const brokerUrl = 'ws://192.168.0.48:8081';
	// const topic		= '/mqtt/mqtt_test';
	const topic		= '/mqtt/led/blink';
	const client    = mqtt.connect(brokerUrl);

	client.on('connect', () => {
		console.log(`TOPIC CONNECT SUCCESS..`);
		
		client.subscribe(topic, (e) => {
			if(e) {
				console.log(`TOPIC SUBSCRIPTION FAIL..`);
				console.log(`⇒ ${e}`);
			} else {
				console.log(`TOPIC SUBSCRIPTION SUCCESS..`);
				console.log(`⇒ ${topic}`);
			}
		});
	});

	client.on('message', (topic, message) => {
		console.log(`MQTT CONNECTION SUCCESS..`);
		console.log(`⇒ ${message}`);
		
		const json          = JSON.parse(message);
		const jsonMessage   = json.message;
		const jsonTimestamp = json.timestamp;
		const jsonEpoch     = json.epoch;
		
		const el = `<tr>
						<td>${jsonMessage}</td>
						<td>${jsonTimestamp}</td>
						<td class="mobile-hide">${jsonEpoch}</td>
					</tr>`;
					
		$('table tbody').append(el);	
	});
});