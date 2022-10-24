const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);

class Point {
  constructor({ x, y, control = false }) {
    this.x = x;
    this.y = y;
    this.control = control;
  }

    draw(context) {
      context.save();
      context.translate(this.x, this.y);
      context.fillStyle = this.control ? 'red' : 'black';

      context.beginPath();
      context.arc(0, 0, 10, 0, Math.PI * 2);
      context.fill();

      context.restore();
    }
}