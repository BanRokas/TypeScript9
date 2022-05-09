// Duomenų gavimas ir išvedimas
const outputData = () => {
  fetch('http://localhost:3000/straipsniai')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const output = document.querySelector('#duomenuIsvestis');
    output.innerHTML = '';
    data.forEach(straipsnis => {
      output.innerHTML += `
        <div class="straipsnis">
          <h1>${straipsnis.pavadinimas}</h1>
          <h4>Autorius: ${straipsnis.vardas}</h4>
          <p>${straipsnis.straipsnis}</p>
          <button class="delete" id="${straipsnis.id}">X</button>
        </div>
      `;
    })// duomenų kūrimo metu ant DELETE button galima buvo dėti onclick funkciją
  })
  // delete
  .then(betkas => {
    document
    .querySelectorAll(".delete")
    .forEach(btn => {
      btn.addEventListener("click", e => {
        fetch(`http://localhost:3000/straipsniai/${e.target.id}`, {
          method: "DELETE"
        });
      })
    })
  });
}

// Naujų duomenų sukūrimas
const createData = data => {
  data.preventDefault();
  const straipsnis = {
    vardas : data.target.elements.vardas.value,
    pavadinimas : data.target.elements.pavadinimas.value,
    straipsnis : data.target.elements.straipsnis.value
  };
  fetch('http://localhost:3000/straipsniai', {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(straipsnis)
  })
}

document
.querySelector("#sukurti form")
.addEventListener("submit", e => createData(e));
//.addEventListener("submit", createData);

outputData();