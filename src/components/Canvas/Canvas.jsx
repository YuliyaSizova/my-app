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
          <canvas ref="canvas" width={740} height={1025} />
         
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
    
    if(len < 10 ) {
   ///   ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(0, -len, 5, 0, Math.PI/2);
      ctx.fill();
      ctx.restore();
      return;
  } 
  if(angle > 0) {
    ctx.bezierCurveTo(5, -len/2, 5, -len/2, 0, -len);
} else {
    ctx.bezierCurveTo(-5, -len/2, -5, -len/2, 0, -len);
}
  ctx.lineWidth = ctx.lineWidth*0.8;
  len = len*0.8
  draw(ctx, 0, -len, len, angle+10, ctx.lineWidth);
  draw(ctx, 0, -len, len, angle-10, ctx.lineWidth);
    ctx.restore();
  }
  export default Canvas