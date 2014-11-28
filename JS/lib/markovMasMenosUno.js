function markovMasMenosUno(entero){
  i = getRandomInt(0,2);  
  entero+= Math.pow(-1,i);
  return entero;
}


// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
