import CanvasObject from '../object';
import { getDistance } from '../helpers';


export default class Bullet extends CanvasObject {
    constructor(ctx, x, y, eX, eY) {
        super(ctx);
        this._x = x;
        this._y = y;
        this._start = {
            x: x,
            y: y
        }
        this._eX = eX;
        this._eY = eY;
        this._speed = 5;
        this._distance = 200;
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.arc(this._x, this._y, 3, 0, 2 * Math.PI, false);
        this._ctx.fillStyle = 'black';
        this._ctx.fill();

        let dx = (this._eX - this._start.x);
        let dy = (this._eY - this._start.y);
        // let dx = (this._eX - this._x);
        // let dy = (this._eY - this._y);
        let mag = Math.sqrt(dx * dx + dy * dy);

        this._x += (dx / mag) * this._speed;
        this._y += (dy / mag) * this._speed;

        if(getDistance(this._x, this._y, this._start.x, this._start.y) > this._distance) {
            this.remove();
        }
    }
}
