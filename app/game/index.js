import WorldObject from './world';

export default class Game {
    constructor() {
        this.canvas = document.getElementById('game');
        this.canvas.width = 600;
        this.canvas.height = 500;
        this.ctx = this.canvas.getContext("2d");
        this.world = new WorldObject(this.ctx, this.canvas.width, this.canvas.height);


    }
	init() {
		console.log("init Game");
		this.gameLoop();
	}

	gameLoop() {
        requestAnimationFrame(this.gameLoop.bind(this));
        this.render();
    }

    render() {
        this.world.draw();
    }
}
