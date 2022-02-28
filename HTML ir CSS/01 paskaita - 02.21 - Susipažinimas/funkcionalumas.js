document.querySelector(".rytas").addEventListener("click", e => {
  e.target.style.backgroundColor = "yellow";
  e.target.style.color = "green";
  e.target.style.fontSize = "3rem";
  let pradinisTekstas = e.target.innerText;
  console.dir(e.target);
  e.target.innerHTML = 
  pradinisTekstas.slice(0, pradinisTekstas.length-2) + " LIETUVA!";
});