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
		// sub
		client.subscribe(topic, function(e) {
			if(e) {
				console.log('mqtt connect fail..');
				console.log('detail ⇒ ', e);
			} else {
				console.log('mqtt connect success..');
				console.log('topic  ⇒ ', topic);
			}
		});
		
		client.publish(topic, 'test', function(e) {
			if(e) {
				console.log('mqtt publish fail..');
				console.log('detail ⇒ ', e);
			} else {
				console.log('mqtt publish success..');
			}
		});
	});
	
	client.on('message', function(topic, message) {
		const messageToString = message.toString();
		console.log(`topic = ${topic} message = ${messageToString}`);
		
		sweetAlertHtml('성공', `토픽 : ${topic}<br>메세지 : ${messageToString}`, 'success');
	});
	
	client.on('error', function(e) {
		sweetAlertHtml('실패', `에러 메세지 : ${e}`, 'error');
	});
}

function bluetoothSpeakerControl() {
	sweetAlert('알림', '블루투스 스피커 컨트롤 이벤트입니다.', 'info');
}

function lightingControl() {
	sweetAlert('알림', '조명 컨트롤 이벤트입니다.', 'info');
}