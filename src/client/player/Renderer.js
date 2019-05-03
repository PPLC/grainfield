import * as soundworks from 'soundworks/client';

class Renderer extends soundworks.Canvas2dRenderer {
  constructor() {
    super();

    this._positionX = null;
  }

  setPosition(value) {
    // Was there a reason for this? value = 0.5 * (value + 1);
    this._positionX = value;
  }

  render(ctx) {
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    const x = this._positionX * this.canvasWidth;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,' + (0.3 + this._positionX / 10 * 7) + ')';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, this.canvasHeight);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
}

export default Renderer;
