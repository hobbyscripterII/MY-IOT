let client;
let currentTopic = null;

$(document).ready(() => {
	client = mqtt.connect('ws://ljy.myddns.me:8081');
	
	// 중복 방지
	client.on('message', (topic, message) => {
		console.log(`MQTT CONNECTION SUCCESS..`);
		console.log(`⇒ ${topic} ${message}`);
	});
});

function ledOn() {
	// sweetAlert('알림', 'LED를 켭니다.', 'info');
	ledControl('/mqtt/led/on');
}

function ledOff() {
	// sweetAlert('알림', 'LED를 끕니다.', 'info');
	ledControl('/mqtt/led/off');
}

function ledBlink() {
	// sweetAlert('알림', 'LED를 깜빡거립니다.', 'info');
	ledControl('/mqtt/led/blink');
}

function ledControl(topic) {
	// console.log(`topic = ${topic}`);
	
	if(client.connected) {
		if(currentTopic && currentTopic !== topic) {
			client.unsubscribe(currentTopic, () => {
				console.log('TOPIC UNSUBSCRIBE SUCCESS..');
				// console.log(`⇒ ${currentTopic}`);
			});
		}
		
		client.subscribe(topic, (e) => {
			if(e) {
				console.log(`TOPIC SUBSCRIPTION FAIL..`);
				// console.log(`⇒ ${e}`);
			} else {
				console.log(`TOPIC SUBSCRIPTION SUCCESS..`);
				// console.log(`⇒ ${topic}`);
			}
		});
		
		client.publish(topic, 'MESSAGE');
	}
}