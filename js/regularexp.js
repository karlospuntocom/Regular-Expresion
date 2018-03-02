var exNombre = /[0-9]/g;
var exTel = /[A-z]/g;
var exCorreo = /[A-z]|[0-9]\u0040\u002E[0-9]{3}$/g
var exPlaca = /^[A-Z]{3}\s\u002D\s[0-9]{3}$/g;

function evaluar(){
	evaluar_nombre(document.getElementById('name').value);
	evaluar_telefono(document.getElementById('phone').value);
	evaluar_mail(document.getElementById('email').value);
	evaluar_placa(document.getElementById('ref').value);
}

function evaluar_nombre(name){
	if (exNombre.exec(name)) {
		alert("El nombre no puede contener números!")
	}
}

function evaluar_telefono(tel){
	if (exTel.exec(tel)) {
		alert("El teléfono no puede contener letras!")
	}
}

function evaluar_mail(mail){
	if (exNombre.exec(mail)) {
		alert("El formato del correo es incorrecto!")
	}
}

function evaluar_placa(ref){
	if (!exPlaca.exec(ref)) {
		alert("La placa tiene un formato incorrecto!")
	}
}