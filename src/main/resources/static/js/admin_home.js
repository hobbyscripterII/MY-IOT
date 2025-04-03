$(document).ready(() => {
	
});

function bluetoothSpeakerControl() {
	// mqtt 통신
	
	let btnEl  = $('#bluetooth-speaker');
	let flEl   = $('#bluetooth-speaker-fl');
	let BtnCol = '';
	let flText = flEl.text();
	
	if(flText == 'OFF') {
		flText = 'ON';
		flBcol = 'yellow';
	} else {
		flText = 'OFF';
		flBcol = '#dbdbdb';
	}
	
	flEl.text(flText);
	btnEl.css('background-color', BtnCol);
}

function lightingControl() {
	// mqtt 통신
	
	let btnEl  = $('#lighting');
	let flEl   = $('#lighting-fl');
	let BtnCol = '';
	let flText = flEl.text();
	
	if(flText == 'OFF') {
		flText = 'ON';
		flBcol = 'yellow';
	} else {
		flText = 'OFF';
		flBcol = '#dbdbdb';
	}

	flEl.text(flText);
	btnEl.css('background-color', BtnCol);
}