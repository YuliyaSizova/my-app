import React from 'react';


class Canvas extends React.Component {
  
    componentDidMount() {
     
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      ctx.strokeStyle = "darkgreen";
    ctx.fillStyle = "green";
    ctx.shadowBlur = 15;
ctx.shadowColor = "rgba(0,0,0,0.8)";

ctx.lineWidth = 10;
        draw(ctx, 350,600,120,0);
      
    }
    render() {
      return(
        <div>
          <canvas ref="canvas" width={640} height={425} />
         
        </div>
      )
    }
  }

 function draw (ctx, startX, startY, len, angle) {
   
  
    ctx.beginPath();
    ctx.save();
    
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();
    
    if(len < 10) {
      ctx.beginPath();
      ctx.arc(0, -len, 10, 0, Math.PI/2);
      ctx.fill();
      ctx.restore();
      return;
  }
    
  draw(ctx, 0, -len, len*0.8, angle+10, 10*0.8);
  draw(ctx, 0, -len, len*0.8, angle-10, 10*0.8);
    ctx.restore();
  }
  export default Canvas