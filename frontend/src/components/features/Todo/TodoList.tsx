import { Box, Button } from '@chakra-ui/react';
import React from 'react';

import { ITodo } from '../../../dapi';
import { TodoItem } from './TodoItem';

type TodoListProps = { todos: ITodo[]};

export const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <Box>
            {props.todos.map((data) => (
                <TodoItem key={data.id} todo={data} />
            ))}
        </Box>
    )
}