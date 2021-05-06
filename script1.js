document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', handleClick)
    })

})

function handleClick(evente) {


    let quadrado = evente.target;
    let position = quadrado.id;

    if (handleMove(position)) {
        setTimeout(() => {
            Swal.fire('O Jogo Acabou')

        },100);
    };
    updatequadrado();

}


function updatequadrado() {

    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((quadrado) => {
        let position = quadrado.id;
        let simbolos = tabuleiro[position];

        if (simbolos != '') {
            quadrado.innerHTML = `<div class='${simbolos}'></div>`
        }
    })
}

function reiniciarJogo() {
    location.reload();  // função serve para reiniciar página
    localStorage.clear(); // limpa o cache
}