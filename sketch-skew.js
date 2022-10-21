const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  let x, y, w, h;

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const num = 20;

    for (let i = 0; i < num; i++) {
      x = width * 0.5 + (i * i);
      y = height * 0.5 + (i * i);
      w = width * 0.6;
      h = height * 0.1;
      //looks cool
      let degrees = i * 45;

      context.save();
      context.translate(x-150, y-150);
      context.strokeStyle = 'blue';
      
      drawSkewedRect({ context, w, h, degrees});
      context.restore();
    }
  };
};

const drawSkewedRect = ({ context, w = 600, h = 200, degrees = 15 }) => {
  const angle = math.degToRad(degrees);
  const rx = Math.cos(angle) * w;
  const ry = Math.sin(angle) * w;

  context.save();
  // context.translate(rx * -0.5, (ry + h) * -0.5);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(rx, ry);
  context.lineTo(rx, ry + h);
  context.lineTo(0, h);
  context.closePath();
  context.stroke();
  context.restore();
}

canvasSketch(sketch, settings);
