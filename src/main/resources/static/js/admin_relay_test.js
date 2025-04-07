let client;
let currentTopic    = null;
const brokerUrl     = 'ws://ljy.myddns.me:8081';
const relayOnTopic  = '/relay/on';
const relayOffTopic = '/relay/off';

$(document).ready(() => {
	client = mqtt.connect(brokerUrl);
	
	client.on('connect', () => {
		console.log('mqtt 연결 성공');
	});

	$('#relay-module').change(function() {
		if($(this).is(':checked')) {
			client.publish(relayOnTopic, 'ON');
		} else {
			client.publish(relayOffTopic, 'OFF');
		}
	});
});