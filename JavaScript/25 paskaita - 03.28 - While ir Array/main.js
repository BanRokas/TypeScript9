//   String, Boolean, Number - 3 pagrindiniai kintamųjų tipai

/*                  Masyvas(lt) / Array(en)
  Masyvas - konteinerinis kintamasis (jo viduje galima talpinti neribotą kiekį kintamųjų), kuriame svarbus eiliškumas. 
  Į masyvo elementus kreipiamės nurodydami jų indikacinį numerį.

  let/const/var masyvoKintamojoVardas = [];
  const masyvas = ["Labas", "Ate", "Gerą vakarą"];
  masyvas[0]; // "Labas"
*/
/*                Objektas(lt) / Object(en)
  Objektas - konteinerinis kintamasis (jo viduje galima talpinti neribotą kiekį kintamųjų)
  Į objekto elementus kreipiamės nurodydami jų raktažodžius.

  let/const/var objektoKintamojoVardas = {};
  const objektas = {vardas : "Rokas", pavarde : "Banaitis"};
  objektas.vardas; // "Rokas"
*/
console.groupCollapsed("----Teorija----");
let asmensVardas = "Rokas";
let asmensPavarde = "Banaitis";
let asmensAmzius = 25;
console.log(asmensAmzius, asmensVardas, asmensPavarde);
console.log(asmensAmzius + asmensVardas + asmensPavarde);
console.log("-----------------------------");
let masyvasApieAsmeni = ["Rokas", "Banaitis", 25];
console.log(masyvasApieAsmeni);
console.log("-----------------------------");
console.log(asmensPavarde);
console.log(masyvasApieAsmeni[1]);
console.log("-----------------------------");
let objektasApieAsmeni = {
  pavarde : "Banaitis",
  vardas : "Rokas",
  amzius : 25
};
console.log(objektasApieAsmeni);
console.log("-----------------------------");
console.log(objektasApieAsmeni.pavarde);
console.log("-----------------------------");
let megstamaVeikla = ["Bėgioti", "Važinėti dviračiu", "Plaukioti", "Žaisti PC", "Žaisti stalo žaidimus", "Skaityti", "Miegoti", "Valgyti"];
console.log(megstamaVeikla);
let asmenys = {
  megstamosVeiklos : ["Bėgioti", "Važinėti dviračiu", "Plaukioti", "Žaisti PC", "Žaisti stalo žaidimus", "Skaityti", "Miegoti", "Valgyti"],
  pavarde : "Banaitis",
  vardas : "Rokas",
  amzius : 25,
  gyvenamojiVieta : {
    planeta : "Žemė",
    zemynas : "Europa",
    salis : "Lietuva",
    miestas : "Kaunas"
  }
}
console.groupEnd();
const laimingiSkaiciai = [54, 69, 77, 666, 0, 12, 25, 10, 7, 5555];
console.log(laimingiSkaiciai);
console.groupCollapsed("----For ciklas----")
console.log(laimingiSkaiciai[0]); // į pirmąjį masyvo elementą kreipiamės kaip į [0]'tąjį
console.log(laimingiSkaiciai[laimingiSkaiciai.length-1]); // į paskutinį masyvo elementą kreipiamės kaip į [masyvoVardas.length-1]'ąjį
console.log("-----------------------------");
for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log("-------Nuo pradžios iki galo:");
for(let i = 0; i < laimingiSkaiciai.length; i++){
  console.log(laimingiSkaiciai[i]);
}
console.log("-------Nuo galo iki pradžios:");
for(let i = laimingiSkaiciai.length-1; i >= 0; i--){
  console.log(laimingiSkaiciai[i]);
}
console.groupEnd();

//  Metodas - elemento viduje, programavimo kalboje iš anksto, integruota funkcija, kuri kažką atlieka su tuo elementu.
/*                      Masyvų metodai:
  pop() - Grąžina iš masyvo paskutinį elementą. Masyve panaikina paskutinį elementą.
  push(info) - Grąžina masyvo naują ilgį. Masyvo gale prideda naują info.
  shift() - Grąžina iš masyvo pirmąjį elementą. Masyve panaikina pirmąjį elementą. Visus masyvo elementus pastumia atgal per vieną poziciją.
  unshift(info) - Grąžina masyvo naują ilgį. Masyvo pradžioje prideda naują info. Visus masyvo elementus pastumia į priekį per vieną poziciją.
*/

console.log(laimingiSkaiciai.pop());  // išimam iš galo
console.log(laimingiSkaiciai.push(666)); // pridedam prie galo
console.log(laimingiSkaiciai.shift()); // išimam iš pradžios
console.log(laimingiSkaiciai.unshift(49)); // pridedam prie pradžios
console.log("-----------------------------");
/*while(laimingiSkaiciai.length > 0){
  console.log(laimingiSkaiciai.pop());
}*/
while(laimingiSkaiciai.pop() !== undefined){
  console.log("Išėmėm");
}

/*          While ciklai
  while - kol sąlyga tiesa kažką daro.
  do while - daro kažką, tol kol sąlyga yra tiesa. (daro kažką bent vieną sykį)
*/
let atsakymas = 9;
while(Number(atsakymas) !== 9){
  atsakymas = prompt("Kiek bus 3*3?");
}
// atsakymas = prompt("");
// console.log(typeof(atsakymas));
// console.log(atsakymas = Number(atsakymas));
// console.log(typeof(atsakymas));
while(Math.random()*10 > 2){
  console.log("Daug");
}

do{
  console.log("darome");
} while (Math.random()*10 > 2);

// siūlyčiau naudoti break;
function rastiPirminius(nuo, iki){
  if(nuo < 2){
    nuo = 2;
  }
  const pirminiuMasyvas = [];
  for(1;2;3){ // nuo nuo iki iki
    
    let arPirminis = true;
    for(1;2;3){ // nuo 2 iki i

    }
    if(1){

    }
  }
  return pirminiuMasyvas;
}

rastiPirminius(0, 100)