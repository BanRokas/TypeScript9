//        Cookies
// let data = new Date();
// let minutes = data.getMinutes();
// data.setMinutes(minutes+376);
// console.log(data.toUTCString());
// console.log(data);
// document.cookie = `paskaita=44; expires=${data.toUTCString()}`;

//        Session/Local Storage
sessionStorage.clear(); // ištrina visus įrašus
sessionStorage.setItem("Vardas", "Rokas"); // sukuria
sessionStorage.setItem("Pavardė", "Banaitis");
sessionStorage.setItem("Amžius", "25");
sessionStorage.setItem("Lytis", "Vyras");

console.log(sessionStorage);
for(let i = 0; i < sessionStorage.length; i++){
  console.log(
    sessionStorage.key(i), // raktinis žodis pagal indeksą
    sessionStorage.getItem(sessionStorage.key(i)) // reikšmė pagal raktinį žodį
  );
}
sessionStorage.removeItem(sessionStorage.key(0)); // trina duomenį pagal raktinį žodį

//            Užduotis kartu
// localStorage.setItem("Vardas", "Rokas"); // sukuria
// localStorage.setItem("Pavardė", "Banaitis");
// localStorage.setItem("Amžius", "25");
// localStorage.setItem("Lytis", "Vyras");
document
.querySelector("#formIrOutput > form")
.addEventListener("submit", e => {
  e.preventDefault();

  const key = e.target.elements.key.value;
  const value = e.target.elements.value.value;

  localStorage.setItem(key, value);

  document.querySelector("#output > ul").remove();
  uploadDataToScreen();

  e.target.reset();
});

// function uploadDataToScreen(){}
let uploadDataToScreen = () => {
  const ul = document.createElement("ul");
  for(let i = 0; i < localStorage.length; i++){
    const li = document.createElement("li");

    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const del = document.createElement('span');

    del.textContent = "X";
    // del.addEventListener('click', deleteLSE);
    // del.id = key;
    del.setAttribute("onclick", `deleteLSE('${key}')`);
    del.classList.add('item');

    li.textContent = `${key} - ${value}`;
    li.appendChild(del);

    ul.appendChild(li);
  }
  document.querySelector("#output").appendChild(ul);
}

// function deleteLSE(key){}
let deleteLSE = key => {
  localStorage.removeItem(key);
  document.querySelector("#output > ul").remove();
  uploadDataToScreen();
} 

uploadDataToScreen();