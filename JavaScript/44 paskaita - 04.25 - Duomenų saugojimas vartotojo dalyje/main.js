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
