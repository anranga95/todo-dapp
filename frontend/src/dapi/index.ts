export { getTodos } from './queries/getTodos';
export { addTodo } from './mutations/addTodo';
export { clearTodos } from './mutations/clearTodos';
export { markComplete } from './mutations/markComplete';

export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
}