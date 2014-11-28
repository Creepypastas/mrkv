i = 0;


function adem(){
	for(j=0;j<100;j++){
		i = markovMasMenosUno(i);
		console.log(i);

	}
}

/*function runForEver(func, delay) {
    func();
    setTimeout(function() { runForEver(func, delay); }, delay);
}


runForEver(adem, 1000);
*/
setInterval(function(){ 
adem();	
}, 500);


/*
var a = [];
	for(j = 0; j < 25600; j++){
		a[j] = Math.floor(Math.random()*256);
}
console.log(a);*/