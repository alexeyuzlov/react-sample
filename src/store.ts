import { TodoList } from './TodoList';
import { Todo } from './Todo';

export const store = new TodoList([
    new Todo('Get Coffee'),
    new Todo('Write simpler code')
]);
