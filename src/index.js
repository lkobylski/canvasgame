/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

import Game from './game';

// ================================
// START YOUR APP HERE
// ================================
window.onload = () => {
    const game = new Game();
    game.init();
}
