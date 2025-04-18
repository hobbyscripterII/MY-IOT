$(document).ready(() => {
	const topic   = '/mqtt/mqtt_test';
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
		console.log(`topic = ${topic} message = ${message}`);
		
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