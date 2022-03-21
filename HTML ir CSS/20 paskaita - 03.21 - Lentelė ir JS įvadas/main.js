// Susipažinimas su JS
console.log("External 2"); // išvedimas į konsolę
console.log(document.querySelector("#lentele"));
/*console.log(document.querySelector("#lentele"));
console.log(document.querySelector("#lentele"));
console.log(document.querySelector("#lentele"));
console.log(document.querySelector("#lentele"));
console.log(document.querySelector("#lentele"));*/

/* ta pacia eilute
ir sekancia
ir toliau ir toliau
ir toliau
ko pasiekia 
*/
// CTRL /
// skirtas
// komentuoti
// arba
// atkomentuoti
// pažymėtas
// eilutes



//                Extra
/*
  , - skirtas atskirti informacijai vieną nuo kitos
    vienasInfoGabaliukas, kitasInfoGabaliukas, irTaipToliau
  . - skirtas informacijai tikslinti | kreiptis giliau
    5.4     objektas.info        objektas.metodas()
*/
//                Kintamieji
/*
  string - char - simbolių rinkinys / žodinė informacija
    "Labas rytas", 'Gerą dieną', `Vakaras`
  number - integer/int|float - skaičius
    54, 54.04, 5e6, 10+5, (5*6)/2, -54
  boolean - bool - tiesa arba melas
    true, false

  Kaip sukurti kintamąjį:
    1) var | let | const
      Kintamojo deklaracija.
    2) kintamojoVardas | kintamojo_vardas 
      Susigalvoji kokį tik nori vardą. Negali būti 2 žodžiai atskirti tarpu. Negali prasidėti skaičiumi. Siūlau naudoti tik lotynišką abėcėlę.
    3) =
      Priskyrimo ženklas
    4) 54 | true | "info" | [] | {} 
      Informacija, kurią priskiri kintamajam.
    5) ;
      Loginės eilutės pabaiga.
*/

var senas = "Sena sintaksė";
let vardas = "Rokas";
const PI = Math.PI;

let zodis1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate repellendus nostrum. Cupiditate aut veritatis, pariatur nemo porro quo facilis cumque id nam in ea quaerat reiciendis ut maxime accusamus!`;
let numberis1 = 10;
let tiesaMelas = false;

//              Aritmetika programavime
console.log(10+10);
console.log(0.6+0.3);
console.log(10-true);
console.log("labas"+" "+"rytas");
console.log("labas"+10);
console.log("10"-10);
console.log("string"+true);
console.log(true-"string");
console.log(true+true);

console.log(Math.round(5.4)); // 5
console.log(Math.round(5.6)); // 6
console.log(Math.round(5.5)); // 6

console.log(Math.floor(5.999999)); // 5
console.log(Math.ceil(5.0000001)); // 6

console.log(Math.floor(5.543*100)/100); // 5.54

console.log(Math.random()); // 0.000000001 -> 0.999999999999
console.log(Math.random()*5); // 0.000000005 -> 4.999999999995
console.log(Math.floor(Math.random()*5)); // 0->4
console.log(Math.ceil(Math.random()*5)); // 1->5
console.log(Math.floor(Math.random()*6)); // 0->5
console.log(Math.round(Math.random()*5)); // 0->5
/*
            0.000000005 -> 4.999999999995
      0 => 0.00000005 -> 0.49999999 // 0.5
      1 => 0.5        -> 1.49999999 // 1
      2 => 1.5        -> 2.49999999 // 1
      3 => 2.5        -> 3.49999999 // 1
      4 => 3.5        -> 4.49999999 // 1
      5 => 4.5        -> 4.99999999 // 0.5
*/

/*
  Operatoriai:
      + - sudėtis
      - - atimtis
      * - daugyba
      / - dalyba
      % - likutis
     ** - laipsnio kėlimas (dar galima Math.pow() )
     **(1/x) - x laipsnio šaknies traukimas (irgi galima su Math.pow())
*/