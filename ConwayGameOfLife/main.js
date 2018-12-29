//Create the canvas and append to the body tag
const l=0.01;
const lineWidth=2;
const cell_l=window.innerWidth*l;
var MyCanvas=CreateCanvas();
var ctx=MyCanvas.getContext('2d');
document.getElementsByTagName('body')[0].appendChild(MyCanvas);
function DrawGrid(MyCanvas,height,width)
{   
    var ctx=MyCanvas.getContext('2d');
    ctx.strokeStyle='Black';
    ctx.lineWidth=lineWidth;
    //draw horiontal lines
    for(i=0;i<=height;i+=((l)*height))
    {
        ctx.moveTo(i,0);
        ctx.lineTo(i,height);
        ctx.stroke();
    }
    //draw vertical lines
    for(j=0;j<=width;j+=((l)*width))
    {
        ctx.moveTo(0,j);
        ctx.lineTo(width,j);
        ctx.stroke();
    }
}
function CreateCanvas(){
    var MyCanvas=document.createElement('canvas');
    MyCanvas.style.display='block';
    MyCanvas.height=window.innerHeight;
    MyCanvas.width=window.innerWidth;
    return MyCanvas;
    
}
class Cell
{
    constructor(x,y,side,ctx)
    {
        this.x=x;
        this.y=y;
        this.side=side;
        this.ctx=ctx;
    }
    DrawPixel()
    {
        this.ctx.fillRect(this.x,this.y,this.side,this.side);
    }
    MoveHorizontal(x)
    {
        this.ctx.fillStyle='#FEFCFC';
        this.ctx.fillRect(this.x+lineWidth,this.y+lineWidth,this.side-2*lineWidth,this.side-2*lineWidth)
        this.ctx.fillStyle='#000000';
        this.x+=x;
        this.DrawPixel();
        console.log(this.x);
    }
    MoveVertical(y)
    {
        this.ctx.fillStyle='#FEFCFC';
        this.ctx.fillRect(this.x+lineWidth,this.y+lineWidth,this.side-2*lineWidth,this.side-2*lineWidth)
        this.ctx.fillStyle='#000000';
        this.y+=y;
        this.DrawPixel();
    }
  
}
console.log(window.innerWidth);

DrawGrid(MyCanvas,window.innerWidth,window.innerWidth);
var aCell=new Cell(0,0,cell_l,ctx);
var aCell1=new Cell(0,48*cell_l,cell_l,ctx);
aCell1.DrawPixel();
aCell.DrawPixel();
setInterval(function(){aCell.MoveHorizontal(cell_l);

aCell1.MoveVertical(-cell_l)},1000)
clearInterval();