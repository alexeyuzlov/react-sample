import { action, computed, makeObservable, observable } from 'mobx';
import { Todo } from './Todo';

export class TodoList {
    todos: Todo[] = [];

    get unfinishedTodoCount() {
        return this.todos.filter((todo: Todo) => !todo.finished).length;
    }

    constructor(todos) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed,
            add: action,
            remove: action,
        });

        this.todos = todos;
    }

    public add(title: string) {
        this.todos.push(new Todo(title));
    }

    public remove(id: number) {
        this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
    }
}
