function dwarfRollCall(dwarves) {
  var names = [];
  for (let i = 0; i < dwarves.length; i++){
names.push(`${i+1}. ${dwarves[i]} `);
  } 
     return names.join("");
}

function summonCaptainPlanet(planeteerCalls){
var array = [];
for(let i = 0; i< planeteerCalls.length; i++){
planeteerCalls[i]= planeteerCalls[i].toUpperCase();
array.push(`${planeteerCalls[i]}!`) ;
}
return array;
}

function longPlaneteerCalls(words) {
if (words.length <= 4){
  return false;
}
else if (words.length>4){
  return true;
}
}

 function findTheCheese (foods) {

for(let i = 0; i < foods.length; i++){
  if (foods[i] === 'gouda'){
      return 'gouda';
    }
    else if (foods[i] === 'cheddar'){
    return 'cheddar';
    }
    else{
      return 'no cheese!';
    }
}

}





