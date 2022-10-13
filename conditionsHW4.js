//zadatak 4.
//proba
var number = 5;
var noun = "cat";
var noun2 = "dog";
var noun3 = "bird";

function zadatak4(number){
if(number<5){
    return("I like " + noun2 + "s" + " and " + noun3 + "s" + "." );
}else if(number==5){
    return("I have" + " " + number + " "+ noun + "s" + ".")
}else{
    return("I like all animals.");
}
}
console.log(zadatak4(4));
console.log(zadatak4(5));
console.log(zadatak4(6));
