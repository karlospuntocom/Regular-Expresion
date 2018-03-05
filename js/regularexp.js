var exNombre = /[0-9]/i;
var exTel = /[A-z]/i;
var exCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var exPlaca = /^[A-Z]{3}\s\u002D\s[0-9]{3}$/i;

function evaluar(){
	evaluar_nombre(document.getElementById('name').value);
	evaluar_telefono(document.getElementById('phone').value);
	evaluar_mail(document.getElementById('email').value);
	evaluar_placa(document.getElementById('ref').value);
	return false;
}

function evaluar_nombre(name){
	if (exNombre.exec(name)) {
		document.getElementById('checkname').style.visibility = "hidden";
		alert("El nombre no puede contener números!");
	} else{
		document.getElementById('checkname').style.visibility = "visible";
	}
}

function evaluar_telefono(tel){
	if (exTel.exec(tel)) {
		document.getElementById('checkphone').style.visibility = "hidden";
		alert("El teléfono no puede contener letras!");
	} else{
		document.getElementById('checkphone').style.visibility = "visible";
	}
}

function evaluar_mail(mail){
	if (!exCorreo.exec(mail)) {
		document.getElementById('checkemail').style.visibility = "hidden";
		alert("El formato del correo es incorrecto!");
	} else{
		document.getElementById('checkemail').style.visibility = "visible";
	}
}

function evaluar_placa(ref){
	if (!exPlaca.exec(ref)) {
		document.getElementById('checkref').style.visibility = "hidden";
		alert("La placa tiene un formato incorrecto!");
	} else{
		document.getElementById('checkref').style.visibility = "visible";
	}
}
