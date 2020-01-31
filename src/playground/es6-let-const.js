var nameVar = 'Brandon';
var nameVar = 'Andrew';
console.log('nameVar', nameVar);

let nameLet = "Jett";
nameLet = "Brando";
console.log('nameLet', nameLet);

const NAMECONST = 'Frank';
console.log('NAMECONST', NAMECONST);

//Function scope
function getPetName(){
  const petName = 'Hal';
  return petName;
}

getPetName();
console.log(petName);

//Block scoping
var fullName = "Brandon Schaen";

if(fullName){
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);