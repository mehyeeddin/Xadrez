const canvas = document.getElementById("mainCanvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = '#db8354';

const PAWN = document.getElementById("peao.png")

let PIECES = [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

const IMAGES_PIECES = { 1:PAWN }

function atualizarTabuleiro() {
    const HEIGHT = canvas.clientHeight
    const WIDHT = canvas.clientWidth

    canvas.width = WIDHT
    canvas.height = HEIGHT

    const TILE = 8
    const TILE_SIZE = ( (HEIGHT+WIDHT) / TILE ) / 2

    for(let i = 0; i < TILE; i++) {
        for(let j = 0; j < TILE;j++){

            const VALUE = PIECES[i][j];
            const VERIFY_PARITY = (i + j)%2;

            const x = i*TILE_SIZE
            const y = j*TILE_SIZE

            if( VERIFY_PARITY == 1 ) {
                ctx.fillStyle = '#e4b69d';
            } else {
                ctx.fillStyle = '#aa653e';
            }
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

          //  if( VALUE > 0 ) {
          //      ctx.drawImage(IMAGES_PIECES[VALUE], x, y, TILE_SIZE, TILE_SIZE)
          //  }
        }
    }
}

window.addEventListener("load", atualizarTabuleiro);
window.addEventListener("resize", atualizarTabuleiro)




