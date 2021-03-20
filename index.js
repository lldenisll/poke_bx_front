
function veredito(){
	document.getElementById("veredito").innerHTML = ""
	var result = fetch('https://calm-inlet-80092.herokuapp.com/core/pokemon-analise/')
    .then(response => response.json())
    .then(data => {
		var veredito = (data[data.length - 1])
        console.log(veredito.veredito)
		if (veredito.veredito){
			document.getElementById("veredito").innerHTML = "Essa troca é justa, vá em frente"
		}else{
			document.getElementById("veredito").innerHTML = "Essa troca não é justa"
			window.alert('atenção essa troca não é justa')
			document.getElementById("dozero").style.visibility = "visible"

		}
    })
    .catch(err => {
        console.error('An error ocurred', err);
    });
	document.getElementById("checa").style.visibility = "hidden"
	document.getElementById("troca").style.visibility = "visible"
}
function avaliaTroca(){
	var listauser=[];
	var listatroca=[];
	var formsuser = document.getElementById('formuser');
    var formstroca = document.getElementById('formtroca');
	for(var i=0 ; i < formsuser.length; i++) {
		formsuser.elements[i].setAttribute("readonly", true)
		var fieldValue = formsuser.elements[i].value;
		if (fieldValue){
			listauser.push(fieldValue)
		}
	};
	for(var i=0 ; i < formstroca.length; i++) {
		formstroca.elements[i].setAttribute("readonly", true)
		var fieldValue = formstroca.elements[i].value;
		if (fieldValue){
			listatroca.push(fieldValue)
		}
	};
$.ajax({
    type: "POST",
    url: "https://calm-inlet-80092.herokuapp.com/core/pokemon-analise/",
    contentType: 'application/json',
    data:JSON.stringify({ "pokemon_user" : listauser, "pokemon_troca": listatroca}),
}).done(function(){
	document.getElementById("salva").style.visibility = "hidden"
	document.getElementById("checa").style.visibility = "visible"
	document.getElementById("pokeloader").style.visibility = "visible"	
}).fail(function(){
	alert('ops, parece que algum pokemon não é válido, use o campo de busca, e tente de novo')
	location.reload();
})
}

function trocar(){
	document.getElementById("veredito").innerHTML = ""
	var listauser=[];
	var listatroca=[];
	var formsuser = document.getElementById('formuser');
    var formstroca = document.getElementById('formtroca');

	for(var i=0 ; i < formsuser.length; i++) {
		var fieldValue = formsuser.elements[i].value;
		if (fieldValue){
			listauser.push(fieldValue)
		}
	}
	for(var i=0 ; i < formstroca.length; i++) {
		var fieldValue = formstroca.elements[i].value;
		if(fieldValue){
			listatroca.push(fieldValue)
		}
	}
	$.ajax({
        type: "POST",
        url: "https://calm-inlet-80092.herokuapp.com/core/pokemon-troca/",
        contentType: 'application/json',
        data:JSON.stringify({ "pokemon_user" : listauser, "pokemon_troca": listatroca}),
    });
	location.reload();
}

function zerar(){
	location.reload();
}



// ESCOLHA DO POKEMON
function getNames(){
	let dropdown = $('#procurapokemon');
	dropdown.empty();
	dropdown.append('<option selected="true" disabled>Procure um pokemon</option>');
	dropdown.prop('selectedIndex', 0);

	$.ajax({
		type: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118",
		contentType: 'application/json',
		success: function (data) {
			for (var i=0; i<data.results.length;i++){
				 dropdown.append($('<option></option>').attr('value', data.results[i].name).text(data.results[i].name));
			}
		}
  })
}
getNames()


document.getElementById('procurapokemon').onchange = function () {
	var pokemon = document.getElementById('procurapokemon').value;
	var copiado = document.createElement("input");
	document.body.appendChild(copiado);
	copiado.setAttribute("id", "copiado_id");
	document.getElementById("copiado_id").value=pokemon;
	copiado.select();
	document.execCommand("copy");
	document.body.removeChild(copiado);
	console.log(pokemon)
}

