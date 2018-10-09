import WorldObject from './world';
import Player from './player';

import { getMousePosition } from './helpers';

export default class Game {
    constructor() {
        this.canvas = document.getElementById('game');
        this.debugBlock = document.getElementById('debug');
        this.debugeContent = '';
        this.canvas.width = 600;
        this.canvas.height = 500;
        this.ctx = this.canvas.getContext("2d");
        this.mouse = {
            x: 0,
            y: 0
        };
        this.world = new WorldObject(this.ctx, this.canvas.width, this.canvas.height);
        this.player = new Player(this.ctx, Math.round(this.canvas.width/2), Math.round(this.canvas.height/2));

        this.player.on('fire', this.onPlayerFire.bind(this));

        this.objects = [];

    }


	init() {
		console.log("init Game");
        window.addEventListener('mousemove', this._setMousePos.bind(this), false);
		this.gameLoop();
	}

	onPlayerFire(bullet) {
        this.objects.push(bullet);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

	gameLoop() {
        requestAnimationFrame(this.gameLoop.bind(this));
        this.render();
    }



    render() {
        this.clear();
        this.world.draw();
        this._renderPlayers();
        this._renderObjects();
        this._debug()
    }


    _debug() {
        this.debugBlock.innerHTML = this.debugeContent;
    }


    _setMousePos(evn) {
        const pos = getMousePosition(this.canvas, evn);
        this.mouse.x = pos.x;
        this.mouse.y = pos.y;
        this.player.setMousePos(this.mouse.x, this.mouse.y);
    }

    _renderPlayers() {
        this.player.draw();
    }

    _renderObjects() {
        this.objects.forEach(obj => {
            if(obj.toRemove()) {
                this.objects.splice( this.objects.indexOf(obj), 1 );
                return;
            }

            obj.draw();
        })
    }
}
