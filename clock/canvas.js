var body=$('body');
body.css({ margin:'0xp',padding:'0px'});
var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth-25;
canvas.height=window.innerHeight-25;
var ctx=canvas.getContext('2d');
var x=canvas.width/3.5;
var y=canvas.height/6;



var Clock = document.createElement('img');

Clock.src = 'clock.jpg';
Clock.onload = function() {

    

var angle1=0;
var angle2=0;
var angle3=0;

function animation(){
	ctx.clearRect(0,0,innerWidth,innerHeight);
	ctx.save();
	ctx.drawImage(Clock, x, y, 400,400);

	ctx.translate(x+200,y+200);
	ctx.rotate(angle1);
	ctx.fillStyle = 'red';
    ctx.fillRect(0,0,2,-100);
    ctx.translate(-400,-200);
    ctx.restore();
   

    ctx.save();
    ctx.translate(x+200,y+200);
	ctx.rotate(angle2);
	ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,2,-100)
    ctx.translate(-400,-200);
    ctx.restore();
    


    ctx.save();
    ctx.translate(x+200,y+200);
	ctx.rotate(angle3);
	ctx.fillStyle = 'orange';
    ctx.fillRect(0,0,2,-100);
    ctx.translate(-400,-200);
    ctx.restore();
    

    angle1+=0.25;
    if(angle1>6.3){
    	angle1=0;
    	angle2+=0.15;
    	if(angle2>6.3){
    		angle2=0;
    		angle3+=0.4
    		if(angle3>6.3){
    			angle3=0;
    		}
    	}

    }
		
	requestAnimationFrame(animation);
}

animation();	
   
};



