import Events from './events';

export default class CanvasObject extends Events{

    constructor(ctx) {
        super();
        this._ctx = ctx;
        this._x = 0;
        this._y = 0;
        this._remove = false;
    }

    draw() {
        throw new Error("Please implement this method");
    }

    remove() {
        this._remove = true;
    }

    toRemove() {
        return this._remove;
    }
}
