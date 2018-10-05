import CanvasObject from '../object';

export default class WorldObject extends CanvasObject {

    constructor(ctx, width, height) {
        super(ctx);
        this._x = 3;
        this._y = 3;
        this._width = width - 6;
        this._height = height - 6;


    }

    draw() {
        this._ctx.beginPath();
        this._ctx.rect(this._x, this._y, this._width, this._height);
        this._ctx.fillStyle = 'yellow';
        this._ctx.fill();

    }

}
