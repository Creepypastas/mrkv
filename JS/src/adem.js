i = 0;
var a = [];
var imagen = document.createElement("image");
var span = document.createElement("span");


function limpiar(){
	var miNode = document.getElementById('markov');
	while (miNode.firstChild) {
    miNode.removeChild(miNode.firstChild);
	}
	
	var myNode = document.getElementById("imagen");
	while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
	}
	
	
}


function adem(){
	limpiar();
	i = markovMasMenosUno(i);
	console.log(i);
	span = document.createElement("span");
	span.textContent = i;
	document.getElementById('markov').appendChild(span);
				
	for(j = 0; j < 8192; j++){
		a[j] = Math.floor(Math.random()*256);
	}
	//	console.log(a);	
	imagen = drawArray(a, 32);
	document.getElementById('imagen').appendChild(imagen);
	
}

setInterval(function(){
	adem();
}, 500);