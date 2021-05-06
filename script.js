// iniciar minhas variaveis 
let tabuleiro = ['', '', '', '', '', '', '', '', '',];
let vezdojogador = 0;
let simbolos = ['o', 'x'];
let gameOver = false;

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (tabuleiro[position] == '') {
        tabuleiro[position] = simbolos[vezdojogador];

        gameOver = vencedor();
        if(gameOver == false){
                vezdojogador = (vezdojogador == 0 )? 1:0;
//         if (vezdojogador == 0) {
//             vezdojogador = 1;
//         } else {
//             vezdojogador = 0;
//         }
     }
 }
    return gameOver;
}

function vencedor() {

    let estadoVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < estadoVitoria.length; i++) {
        let sequencia = estadoVitoria[i];
        let pos1 = sequencia[0]
        let pos2 = sequencia[1]
        let pos3 = sequencia[2]
        if (tabuleiro[pos1] == tabuleiro[pos2] &&
            tabuleiro[pos1] == tabuleiro[pos3] &&
            tabuleiro[pos1] != '') {
            return true;
        }
    }
    return false;
}