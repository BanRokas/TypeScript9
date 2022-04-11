// task 1 sudėtis
document
  .querySelector("#forma1 form")
  .addEventListener("submit", e => {
    e.preventDefault();
    console.dir(e);
    let pirmasSk = e.target.elements.sudNr1.valueAsNumber;
    let antrasSk = e.target.elements.sudNr2.valueAsNumber;
    console.log(pirmasSk, antrasSk);
    let ats = pirmasSk + antrasSk;
    document.querySelector("#output1").innerHTML = ats;
    //e.target.nextElementSibling.innerHTML = ats;
  });

// task 2
/*
  sk1, sk2
  option
  if/switch (sužinoti, kurį veiksmą atlikti)
  atitinkamu atveju ats = sk1 veiksmas sk2
  output = ats;
*/