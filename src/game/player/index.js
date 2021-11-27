import ObjectCanvas from '../object';
import Bullet from '../bullet';


const ARROW_MAP = {
    37: 'left',
    40: 'up',
    39: 'right',
    38: 'down',
    32: 'fire'
};

export default class Player extends ObjectCanvas {

    constructor(ctx, x, y) {
        super(ctx);
        this._x = x;
        this._y = y;
        this._radius = 20;
        this._color = '#003300';
        this._speed = 10;
        this.mouse = {
            x :x,
            y:y
        }

        this._bindEvents();
    }
    getX(){
        return this._x;
    }

    getY() {
        return this._y;
    }

    setMousePos(x,y) {
        this.mouse.x = x;
        this.mouse.y = y;
    }



    _drawCharacter() {
        this._ctx.beginPath();
        this._ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI, false);
        this._ctx.fillStyle = 'green';
        this._ctx.fill();
        this._ctx.lineWidth = 5;
        this._ctx.strokeStyle = this._color;
        this._ctx.stroke();
    }

    _bindEvents() {
        document.addEventListener('keydown', this._keydown.bind(this)) //
    }

    _keydown(e) {
        let btn = ARROW_MAP[e.keyCode];

        if (btn === 'left') {
            this._x -= this._speed;
        }
        if (btn === 'right') {
            this._x += this._speed;
        }
        if (btn === 'up') {
            this._y += this._speed;
        }
        if (btn === 'down') {
            this._y -= this._speed;
        }

        if(btn === 'fire') {
            const bullet = new Bullet(this._ctx, this._x, this._y, this.mouse.x, this.mouse.y);
            this.emit("fire", bullet);
        }
    }

    draw() {
        this._drawCharacter();
    }

}
