$(document).ready(() => {
	// mqtt 통신 후 ON/OFF 확인
	
	// const mqtt_test		   = $('#mqtt_test');
	// const bluetoothSpeaker = $('#bluetooth-speaker');
	// const lighting         = $('#lighting');
});

function mqttTestControl() {
	const brokerUrl = 'ws://192.168.0.48:8081';
	const topic		= '/mqtt/mqtt_test';
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
	});
}

function bluetoothSpeakerControl() {
	sweetAlert('알림', '블루투스 스피커 컨트롤 이벤트입니다.', 'info');
}

function lightingControl() {
	sweetAlert('알림', '조명 컨트롤 이벤트입니다.', 'info');
}