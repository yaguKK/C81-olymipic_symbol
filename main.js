
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle="grey";
ctx.lineWidth=4;
ctx.rect(170,143,430,200);
ctx.stroke();


ctx.beginPath()
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(280,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(380,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(480,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.arc(330,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(430,250,40,0,2 * Math.PI);
ctx.stroke();