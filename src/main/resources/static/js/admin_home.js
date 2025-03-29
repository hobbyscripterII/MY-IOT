$(document).ready(() => {
	// mqtt 통신 후 ON/OFF 확인
	
	// const mqtt_test		   = $('#mqtt_test');
	// const bluetoothSpeaker = $('#bluetooth-speaker');
	// const lighting         = $('#lighting');
});

function bluetoothSpeakerControl() {
	sweetAlert('알림', '블루투스 스피커 컨트롤 이벤트입니다.', 'info');
}

function lightingControl() {
	sweetAlert('알림', '조명 컨트롤 이벤트입니다.', 'info');
}