let client;
let currentTopic    = null;
const message       = 'MESSAGE';
const brokerUrl     = 'ws://ljy.myddns.me:8081';
const ledOnTopic    = '/mqtt/led/on';
const ledOffTopic   = '/mqtt/led/off';
const ledBlinkTopic = '/mqtt/led/blink';

$(document).ready(() => {
	client = mqtt.connect(brokerUrl);
	
	client.on('connect', () => {
		console.log('mqtt 연결 성공');
	});
	
	client.on('message', (topic, message) => {
		const payload = message.toString();
		
		console.log(`topic = ${topic} payload = ${payload}`);
	});
});

function ledOn() {
	client.publish(ledOnTopic, 'ON');
	// unSubscribe(ledOnTopic);
}

function ledOff() {
	client.publish(ledOffTopic, 'OFF');
	// unSubscribe(ledOffTopic);
}

function ledBlink() {
	client.publish(ledBlinkTopic, 'BLINK');
	// unSubscribe(ledBlinkTopic);
}

/*
function unSubscribe(topic) {
	client.subscribe(topic, () => {
		console.log(`새로운 토픽 구독 성공 = ${topic}`);
		
		currentTopic = topic;
	});
}
*/