$(document).ready(() => {
	// mqtt 통신 후 ON/OFF 확인
	
	const mqtt_test		   = $('#mqtt_test');
	const bluetoothSpeaker = $('#bluetooth-speaker');
	const lighting         = $('#lighting');
});

function mqttTestControl() {
	// sweetAlert('알림', 'MQTT 통신 테스트 이벤트입니다.', 'info');
	
	const brokerUrl = 'ws://ljy.myddns.me:8081';
	const topic		= '/mqtt/mqtt_test';
	
	const client = mqtt.connect(brokerUrl);
	
	client.on('connect', function() {
		console.log('MQTT 연결에 성공했습니다.');
		
		client.subscribe(topic, function(error) {
			if(error) {
				console.log('[MQTT ERROR MESSAGE] ', error);
			} else {
				sweetAlert('알림', topic, 'info');
			}
		});
	});
}

function bluetoothSpeakerControl() {
	sweetAlert('알림', '블루투스 스피커 컨트롤 이벤트입니다.', 'info');
}

function lightingControl() {
	sweetAlert('알림', '조명 컨트롤 이벤트입니다.', 'info');
}