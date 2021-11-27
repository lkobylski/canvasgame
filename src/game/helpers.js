export function getMousePosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}


export function getDistance(bX, bY, eX, eY) {
    let a = bX - eX;
    let b = bY - eY;

    return Math.sqrt( a*a + b*b );
}

