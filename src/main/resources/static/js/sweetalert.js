function sweetAlert(title, text, icon) {
	Swal.fire({
	  title: title,
	  text : text,
	  icon : icon
	});
}

function sweetAlertHtml(title, text, icon) {
	Swal.fire({
	  title: title,
	  html : text,
	  icon : icon,
	});
}