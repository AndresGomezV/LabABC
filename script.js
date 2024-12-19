let titulos = document.querySelectorAll("h3");

for (let i = 0; i < 3; i++) {
    titulos[i].classList.add("azul");
}


document.querySelectorAll('h5').forEach(h5 => {
    h5.addEventListener('click', () => {
        h5.style.color = ['green', 'blue', 'red'][Math.floor(Math.random() * 3)];
    });
});
