//------FUNKCJE----
// function nazwaFunkcji(dana){
//     const wynik = dana*dana;
//     return wynik;
// }
// console.log(nazwaFunkcji(2));

// alert("ala");

// console.log(Math.max(1,2,3));

// console.log([1,2,3].push(4));

// function multifunkcja(name, pet, petAge) {
//     console.log(name + "ma "+ pet + " który ma " + petAge + " lat.")
// }
// multifunkcja("Ewa","kota",5);

// function writeText(name, age) {
//     console.log('${name} ma kota, który ma ${age} lat');
// }
// writeText("Ola",4);
// writeText("Ola",);

// function show(name = "Pass.", score = "0") {
//     console.log('${name} zdobył w tej turze, ${score} punktów')
// }
// show("Marek",5);
// show();

// function oldOne() {
//     console.log(arguments);
// }
// oldOne();
// oldOne(1,2,3);

// function newOne(...x){
//     console.log(x);
//     console.log(x[2]);
// }
// newOne();
// newOne(1,2,3,"Ala","kot");

// function rndRange(min = 0, max = 20){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }
// document.body.innerText = rndRandom(1,50);
// document.body.innerHTML += " ZSŁ ".repeat(rndRandom(1,5));

// const tab = [];
// for(let i=0;i<rndRange(1,5);i++){
//     tab.push(rndRange(1,50));
// }

// console.log(tab);

//----ZADANIE-----
// function fixName(name){
//     name1 =(name.toLowerCase());
//     return name2 = (name1[0].toUpperCase() + name1.substring(1));
// }
// console.log(fixName("maks"));
//-------------------

// showText();
// function showText() {
//     console.log("...");
// }

// // -------wyraenie funkcyjne
// const showNewText = function() {
//     console.log("...");
// }
// showNewText();

// console.log(window);

//----anonimowa
// document.addEventListener("click",function(){
//     console.log("Klik");
// })

// tab = [2,1,4,3,8,7];
// tab.forEach(function(element){
//     console.log(element);
// }
//)

// tab.sort(function(a,b){
//     return a-b;
// })
// console.log(tab);


//-----deklaracja
// function myFn() {
// };

//-----wyraenie funkcyjne
// const yourFn = function(){
// };

//-----wyraenie funkcyjne za pomocą funkcji strzałkowej
// const theyFn = () => {
// };

// const myF0 = function(x){
//     console.log(x^x);
// }
// myF0(2);

// const myF1 = (a) => {
//     console.log(a*a);
// }
// const myF2 = b => {
//     console.log(b*b);
// }
// const myF3 = (c,d) => {
//     console.log(c*d);
// }
// const myF4 = () => {
//     console.log("TEST");
// }
// const myF5 = __ => {
//     console.log("TEST");
// }
// const myF6 = (z) => {
//     console.log(z*z);
// }
// const myF7 = zz => console.log(zz*zz);

// const myF8 = (x,y) => 2 * x + x * y;
// console.log(myF8(2,3));


//----zadanie------
// const userList = ["ala","marta","paweł","marek"];
// userList.forEach(function(person){
//     console.log(person.toUpperCase());
// });

// userList.forEach(person => console.log(person.toUpperCase()));
//----------------------


// const tabIn = [1,2,3,4,5,6];

//const tabOut   tabout(fn)=tabIn.map(fn); -------WAŻNE-----

// const tabOut = tabIn.map(function(data){
//     return data * 2;
// })
// console.log(tabOut);

// const tabOut2 = tabIn.map(x => x*2);

// const membersList = [
//     {name :"Janek", age: 16},
//     {name :"Marek", age: 18},
//     {name :"Seba", age: 19},
//     {name :"Magda", age: 17},
// ];

// console.log(memberlist.every(x => x >18))
// console.log(memberlist.some(x => x >18))

// function myNumber(a){
//     return a;
// }

// const button = document.querySelector("button");
// button.addEventListener("click",e =>{
//     console.log(myNumber(Math.random()));
// }
// );