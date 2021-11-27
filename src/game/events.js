
export default class Events {

    constructor() {
        this._events = {};
    }

    on(event, listener) {
        if (typeof this._events[event] !== 'object') {
            this._events[event] = []
        }

        this._events[event].push(listener)
    }

    emit(event) {
        let i;
        let listeners;
        let length;
        const me = this;
        const args = [].slice.call(arguments, 1);

        if (typeof this._events[event] === 'object') {
            listeners = this._events[event].slice();
            length = listeners.length;

            for (i = 0; i < length; i++) {
                listeners[i].apply(me, args)
            }
        }
    }
}
