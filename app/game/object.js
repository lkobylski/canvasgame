export default class CanvasObject {

    constructor(ctx) {
        this._ctx = ctx;
        this._x = 0;
        this._y = 0;
    }

    draw() {
        throw new Error("Please implement this method");
    }
}
