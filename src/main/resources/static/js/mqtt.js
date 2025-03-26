$(document).ready(() => {
	// mqtt 통신 후 ON/OFF 확인
	
	// const mqtt_test		   = $('#mqtt_test');
	// const bluetoothSpeaker = $('#bluetooth-speaker');
	// const lighting         = $('#lighting');
});

function mqttTestControl() {
	const brokerUrl = 'ws://ljy.myddns.me:8081';
	const topic		= '/mqtt/mqtt_test';
	const client 	= mqtt.connect(brokerUrl);
	
	client.on('connect', function() {
		client.subscribe(topic, function(error) {
			if(error) {
				console.log('[MQTT ERROR MESSAGE] ', error);
			}
		});
	});
	
	client.on('message', function(topic, message) {
		sweetAlertHtml('성공', `토픽 : ${topic}<br>메세지 : ${message}`, 'success');
	});
	
	const message = '테스트 메세지';

	client.publish(topic, message, function(e) {
		if(e) {
			console.log('[MQTT ERROR MESSAGE] ', error);
		} else {
			sweetAlertHtml('성공', `토픽 : ${topic}<br>메세지 : ${message}`, 'success');
		}
	});
}

function bluetoothSpeakerControl() {
	sweetAlert('알림', '블루투스 스피커 컨트롤 이벤트입니다.', 'info');
}

function lightingControl() {
	sweetAlert('알림', '조명 컨트롤 이벤트입니다.', 'info');
}