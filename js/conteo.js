
const question = document.getElementById('Pregunta');

const votos = new Count();

function EventListener(){
    document.getElementById('btnFav').addEventListener('click',press1);
    document.getElementById('btnContr').addEventListener('click',press2);
    document.getElementById('btnAbt').addEventListener('click',press3);
    document.getElementById('btntoggle1').addEventListener('click',toggle1);
    document.getElementById('btntoggle2').addEventListener('click',toggle2);
    document.getElementById('GO').addEventListener('click',alerta);
}

EventListener();

function press1() {
	votos.Favor();
	votos.total();
}
function press2() {
	votos.Contra();
	votos.total();
}
function press3() {
	votos.Abt();
	votos.total();
}

function toggle1() {
	document.getElementById('question').innerHTML = document.getElementById('ask').value;
	document.getElementById('toggle2').classList = "d-flex";
	document.getElementById('toggle1').classList = "d-none";
}
function toggle2() {
	document.getElementById('toggle2').classList = "d-none";
	document.getElementById('toggle1').classList = "row";
}

function alerta() {
	var cad = "";
	if (votos.favor>votos.contra && votos.favor>votos.abtencion)
		cad = "A favor";
	else if (votos.contra>votos.favor && votos.contra>votos.abtencion)
		cad = "En contra";
	else if (votos.abtencion>votos.favor && votos.abtencion>votos.contra)
		cad = "Abtencion";
	else 
		cad = "Empate";
	document.getElementById('alert').innerHTML = "<div class='alert alert-primary mt-3' role='alert'>El resultado es: "+cad+ "</div>";
}