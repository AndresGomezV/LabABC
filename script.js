const name1 = document.getElementById("name1")
const name2 = document.getElementById("name2")
const name3 = document.getElementById("name3")
const name4 = document.getElementById("name4")

name1.addEventListener("click", () => {
  const colores = ["green", "blue", "red", "#FFFF00", "#FF00FF"];
  const indice = Math.floor(Math.random() * colores.length);
  name1.style.color = colores[indice];
});
name2.addEventListener("click", () => {
  const colores = ["green", "blue", "red", "#FFFF00", "#FF00FF"];
  const indice = Math.floor(Math.random() * colores.length);
  name2.style.color = colores[indice];
});
name3.addEventListener("click", () => {
  const colores = ["green", "blue", "red", "#FFFF00", "#FF00FF"];
  const indice = Math.floor(Math.random() * colores.length);
  name3.style.color = colores[indice];
});
name4.addEventListener("click", () => {
  const colores = ["green", "blue", "red", "#FFFF00", "#FF00FF"];
  const indice = Math.floor(Math.random() * colores.length);
  name4.style.color = colores[indice];
});
