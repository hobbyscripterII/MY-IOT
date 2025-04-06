let client;
let currentTopic    = null;
const message       = 'MESSAGE';
const brokerUrl     = 'ws://ljy.myddns.me:8081';
const relayOnTopic  = '/relay/on';
const relayOffTopic = '/relay/off';

$(document).ready(() => {
	client = mqtt.connect(brokerUrl);
	
	client.on('connect', () => {
		console.log('mqtt 연결 성공');
	});
});

function relayModuleOn() {
	client.publish(relayOnTopic, 'ON');
	sweetAlert('알림', '릴레이 모듈 전원을 켭니다.', 'info');
}

function relayModuleOff() {
	client.publish(relayOffTopic, 'OFF');
	sweetAlert('알림', '릴레이 모듈 전원을 끕니다.', 'info');
}