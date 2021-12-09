import { action, makeObservable, observable } from 'mobx';

export class Todo {
    id = Math.random();
    finished = false;

    constructor(public title: string = '') {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        });
    }

    toggle() {
        this.finished = !this.finished;
    }
}
