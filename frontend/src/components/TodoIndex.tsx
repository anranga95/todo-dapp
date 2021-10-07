import React, { useContext, useEffect, useState } from 'react';
import { TodoListContext } from "../hardhat/SymfoniContext";

import { Text, Input, Button, Box, Center, Stack, SimpleGrid } from '@chakra-ui/react';
import { getTodos, addTodo, ITodo } from '../dapi';
import { TodoItem } from './features/Todo/TodoItem';
import { TodoList } from './features/Todo/TodoList';
import { AddTodo } from './features/Todo/AddTodo';
import { DataContext } from '../DataContext';

export const TodoIndex: React.FC<any> = () => {
    const { todos, refreshTodos } = useContext(DataContext)

    return (
        <SimpleGrid columns={2} spacing={10}>
          <TodoList todos={todos}></TodoList>
          <AddTodo></AddTodo>
        </SimpleGrid>
    )
}