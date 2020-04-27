//commit and ad

let IndexCan;
let IndexAda;


const kgCan = 60;
const  kgAda = 40;

const heigtCan = 1.70;
const heigtAda = 1.50;


IndexAda = (kgAda) / (heigtAda*heigtAda);
IndexCan = (kgCan) / (heigtCan*heigtCan);

console.log(IndexAda.toFixed(2),IndexCan.toFixed(3));

let adaHigherIndex = IndexAda>IndexCan;
let canHigherIndex = IndexCan>IndexAda;

console.log("Adanın kilo indeksi canın kilo indeksinden daha büyük : " +adaHigherIndex);

console.log("Canın kilo indeksi adanın kilo indeksinden daha büyük : " +canHigherIndex);



let AdaZayif = (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaKilolu = (IndexAda>=25) && (IndexAda<=29.9);
let AdaSisman = (IndexAda>=30) && (IndexAda<=34.9);

console.log("Ada Zayıf"+AdaZayif);
console.log("Ada Normal"+AdaNormal);
console.log("Ada Kilolu"+AdaKilolu);
console.log("Ada Şişman"+AdaSisman);

//app.js de variablelarla ilgili yeni denemeler yapıldı