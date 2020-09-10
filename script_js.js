var checkImc;
var checkRet;
var checkCir;

window.onload = function () {
	checkImc = document.getElementById("checkImc");
	checkRet = document.getElementById("checkRet");
	checkCir = document.getElementById("checkCir");
	
	var bimc = document.getElementById("bimc");
	bimc.onclick = mostrarcheckImc;
	var bret = document.getElementById("bret");
	bret.onclick = mostrarcheckRet;
	var bcir = document.getElementById("bcir");
	bcir.onclick = mostrarcheckCir;
	
	checkRet.classList.add("escondido");
	checkCir.classList.add("escondido");
}

function mostrarcheckImc(){
	checkImc.classList.remove("escondido");
	checkRet.classList.add("escondido");
	checkCir.classList.add("escondido");
}

function mostrarcheckRet() {
	checkImc.classList.add("escondido");
	checkRet.classList.remove("escondido");
	checkCir.classList.add("escondido");
}

function mostrarcheckCir() {
	checkImc.classList.add("escondido");
	checkRet.classList.add("escondido");
	checkCir.classList.remove("escondido");
}

function calcularIMC() {
	var alt = document.getElementById("alt").value;
	var peso = document.getElementById("peso").value;
	if (alt == "" || peso == ""){
		alert("O valor do peso e a altura sao obrigatorios!");
	} else {
		var res = parseFloat(peso) / Math.pow(alt, 2);
		alert("O resultado do IMC e: " + res);
	}
}

function calcularRet() {
	var base = document.getElementById("base").value;
	var altr = document.getElementById("altr").value;
	if (base == "" || altr == ""){
		alert("O valor da base e a altura sao obrigatorios!");
	} else {
		var res = parseFloat(base) * parseFloat(altr);
		alert("O resultado da area do retangulo e: " + res);
	}
}

function calcularCir() {
	var raio = document.getElementById("raio").value;
	if (raio == ""){
		alert("O valor do raio e obrigatorio!");
	} else {
		var res = parseFloat(3.14) * Math.pow(raio, 2);
		alert("O resultado da area do retangulo e: " + res);
	}
}