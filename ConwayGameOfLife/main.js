//Create the canvas and append to the body tag
const l = 0.01;
const lineWidth = 2;
//dimensions for cells initial grid
var MyCanvas = CreateCanvas();
var ctx = MyCanvas.getContext('2d');
// append the canvas to the body node
document.getElementsByTagName('body')[0].appendChild(MyCanvas);

var cellX=Math.floor(window.innerWidth);
var cellY=Math.floor(window.innerHeight);
var sideA=Math.floor(cellX*l);
var sideB=Math.floor(cellY*l);

function DrawGrid(ctx, X, Y,x,y) {
    ctx.lineWidth = lineWidth;
    for (i = 0; i < X; i += Math.floor(l * X)) {
        for (j = 0; j < Y; j += Math.floor(l * Y)) {
            ctx.strokeRect(i, j, x, y);
        }

    }
}

function CreateCanvas() {
    var MyCanvas = document.createElement('canvas');
    MyCanvas.style.display = 'block';
    MyCanvas.height = window.innerHeight;
    MyCanvas.width = window.innerWidth;
    return MyCanvas;

}
class Cell {
    constructor(x, y, sideA,sideB, ctx) {
        this.x = x;//x and y are positions
        this.y = y;
        //rectangle sides dimensions
        /*
                    sideA
         ________________________
        |                        |sideB
        |                        |
        |                        |
        |________________________|
        */
        this.sideA = sideA;
        this.sideB=sideB;
        this.ctx = ctx;
        this.DrawPixel();
    }
    DrawPixel() {
        this.ctx.strokeRect(this.x, this.y, this.sideA, this.sideB);
    }
    MoveHorizontal(x) {
        this.ctx.lineWidth=lineWidth;
        this.ctx.fillStyle='#ffffff';//cell turns white
        this.ctx.fillRect(this.x,this.y,this.sideA,this.sideB);
        this.DrawPixel();//draw a hollow rectangle
        this.x+=x;//move horizontal
        this.ctx.fillStyle='#000000';//next cell turns black
        this.ctx.fillRect(this.x,this.y,this.sideA,this.sideB);
        if(this.x>=MyCanvas.width)//check right bounds
        {
            this.x=0;
        }
        else if(this.x<=0)
        {//check left bounds
            this.x=this.ctx.width-1;
        }
    }
    MoveVertical(y) {
        this.ctx.lineWidth=lineWidth;
        this.ctx.fillStyle='#ffffff';//cell turns white
        this.ctx.fillRect(this.x,this.y,this.sideA,this.sideB);
        this.DrawPixel();
        this.y+=y;
        this.ctx.fillStyle='#000000';//next cell turns black
        this.ctx.fillRect(this.x,this.y,this.sideA,this.sideB);
        if(this.y<=0)
        {
            
        }
    }

}


DrawGrid(ctx, cellX, cellX,sideA,sideA);
var Cell0 = new Cell(0, 0, sideA,sideA, ctx);
var Cell1 = new Cell(0, (50 * sideA), sideA,sideA, ctx);

setInterval(function () {
    Cell0.MoveHorizontal(sideA);
    Cell1.MoveVertical(-sideA)
}, 100)
clearInterval();
