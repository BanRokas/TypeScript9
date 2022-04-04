/*                DOM - Document Object Model
  Kreipimasis į elementus:
    old) getElement... 
      1) getElementById - gauna elementą su nurodytu ID
      2) getElementsByClassName - gauna elementus su nurodyta klase
      3) getElementsByTagName - gauna elementus su nurodytų tag'o vardu
    new) querySelector | querySelectorAll
      1) querySelector("#name") - gauti elementą su id "name"
      2) querySelectorAll("#name") - gauti visus elementus su id "name"
      3) querySelector(".name") - gauti elementą su klase "name"
      4) querySelectorAll(".name") - gauti visus elementus su klase "name"
      5) querySelector("name") - gauti elementą su tag'u "name"
      6) querySelectorAll("name") - gauti visus elementus su tag'u "name"

      teisingai1) querySelector("selektinimas(kaip CSS'e)") - gauna vieną elementą pagal nurodytą selektinimą
      teisingai2) querySelectorAll("selektinimas(kaip CSS'e)") - gauna visus elementus pagal nurodytą selektinimą
*/
let senasID = document.getElementById("unikalus");
let senasKlase = document.getElementsByClassName("neUnikali");
let senasTag = document.getElementsByTagName("li");

console.dir(senasID);
console.dir(senasKlase);
console.dir(senasTag);
console.log("----------------------------------------");
let naujasVienasID = document.querySelector("#unikalus");
let naujasDaugID = document.querySelectorAll("#unikalus");
let naujasVienasKlase = document.querySelector(".neUnikali");
let naujasDaugKlase = document.querySelectorAll(".neUnikali");
let naujasVienasTag = document.querySelector("li");
let naujasDaugTag = document.querySelectorAll("li");

console.dir(naujasVienasID);
console.dir(naujasDaugID);
console.dir(naujasVienasKlase);
console.dir(naujasDaugKlase);
console.dir(naujasVienasTag);
console.dir(naujasDaugTag);


console.dir(naujasDaugID[1].parentElement);
const navigation = document.querySelector(".navigation");
console.dir(navigation.querySelectorAll(".neUnikali"));


naujasDaugTag[0].style.color = "red"; // very good
naujasDaugTag[0].style.backgroundColor = "black";
naujasDaugTag[1].setAttribute("style","background-color:orange");
naujasDaugTag[1].setAttribute("style","color:white;background-color:orange"); // nepatogus dažniausiu atveju
naujasDaugTag[2].className += " colorBlue";
naujasDaugTag[2].classList.value += " border"; // niekas nedaro
naujasDaugTag[2].classList.add("fontBig"); // BEST
naujasDaugTag[3].id = "bgRed";

let textNode = document.createTextNode("tekstas");

const outputas = document.querySelector(".output");
outputas.prepend(textNode);

let tekstas = "sarasas";
let masyvas = [1,2,3,4,5,6];

outputas.innerHTML += `
  <div> Labas </div>
  <p> ${tekstas} </p>
  <ul>
    ${masyvas.map(element => `<li> ${element} </li>`)}
    <li> teip </li>
    <li> ir šiteip </li>
  </ul>
`;
// kad nebūtų kablelių reiktų naudoti forEach'ą. Kiekvienos iteracijos metu kurti naujus elementus ir juos append'inti į nurodytą vietą.