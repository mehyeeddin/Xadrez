const canvas = document.getElementById("mainCanvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = '#db8354';

const BKING = new Image()
BKING.src = 'black/Bking.png'

const BQUEEN = new Image()
BQUEEN.src = 'black/Bqueen.png'

const BBISHOP = new Image()
BBISHOP.src = 'black/Bbishop.png'

const BHORSE = new Image()
BHORSE.src = 'black/Bhorse.png'

const BROOK = new Image()
BROOK.src = 'black/Brook.png'

const BPAWN = new Image()
BPAWN.src = 'black/Bpawn.png'

const WKING = new Image()
WKING.src = 'white/Wking.png'

const WQUEEN = new Image()
WQUEEN.src = 'white/Wqueen.png'

const WBISHOP = new Image()
WBISHOP.src = 'white/Wbishop.png'

const WHORSE = new Image()
WHORSE.src = 'white/Whorse.png'

const WROOK = new Image()
WROOK.src = 'white/Wrook.png'

const WPAWN = new Image()
WPAWN.src = 'white/Wpawn.png'



let PIECES = [
    ['R', 'H', 'B', 'Q', 'K', 'B', 'H', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [ 0,   0,   0,   0,   0,   0,   0,   0 ],
    [ 0,   0,   0,   0,   0,   0,   0,   0 ],
    [ 0,   0,   0,   0,   0,   0,   0,   0 ],
    [ 0,   0,   0,   0,   0,   0,   0,   0 ],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'h', 'b', 'q', 'k', 'b', 'h', 'r']
]

const IMAGES_PIECES = { 

    K:BKING,
    k:WKING,
    Q:BQUEEN,
    q:WQUEEN,
    B:BBISHOP,
    b:WBISHOP,
    H:BHORSE,
    h:WHORSE,
    R:BROOK,
    r:WROOK,
    P:BPAWN,
    p:WPAWN

 }

 class Piece  {

    constructor(type, from) {
        this.type = type
        this.from = from
    }

    draw(TILE_SIZE) {
        ctx.drawImage(IMAGES_PIECES[this.type], this.from.x, this.from.y, TILE_SIZE, TILE_SIZE)
    }
 }

function atualizarTabuleiro() {
    const HEIGHT = canvas.clientHeight
    const WIDTH = canvas.clientWidth

    canvas.width = WIDTH
    canvas.height = HEIGHT

    const TILE = 8
    const TILE_SIZE = ( (HEIGHT+WIDTH) / TILE ) / 2

    for(let i = 0; i < TILE; i++) {
        for(let j = 0; j < TILE;j++){

            const VALUE = PIECES[i][j];
            const VERIFY_PARITY = (i + j)%2;

            const x = j*TILE_SIZE
            const y = i*TILE_SIZE

            if( VERIFY_PARITY == 0 ) {
                ctx.fillStyle = '#e4b69D';
            } else {
                ctx.fillStyle = '#aa653e';
            }
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

            if( VALUE != 0 ) {
                const piece = new Piece(VALUE, {x, y});

                piece.draw(TILE_SIZE)
            }
        }
    }
}

window.addEventListener("load", atualizarTabuleiro);
window.addEventListener("resize", atualizarTabuleiro)




