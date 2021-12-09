import React from 'react';
import { observer } from 'mobx-react';
import { Todo } from './Todo';
import { TodoList } from './TodoList';
import { store } from './store';

const TodoListView = observer(({todoList}: { todoList: TodoList }) => (
    <div>
        <ul>
            {todoList.todos.map(todo => (
                <div key={todo.id}>
                    <TodoView todo={todo}/>
                    <button type="button" onClick={() => todoList.remove(todo.id)}>Remove</button>
                </div>
            ))}
        </ul>
        Tasks left: {todoList.unfinishedTodoCount}

        <button type="button" onClick={() => todoList.add('It works')}>New Todo</button>
    </div>
));

const TodoView = observer(({todo}: { todo: Todo }) => (
    <div>
        <label>
            <input type="checkbox" defaultChecked={todo.finished} onClick={() => todo.toggle()}/>
            {todo.title}
        </label>
    </div>
));

export default function App() {
    return (
        <div className="App">
            <TodoListView todoList={store}/>
        </div>
    );
}
