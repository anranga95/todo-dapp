import React, { useContext, useEffect, useState } from 'react';

import { Text, Input, Button, Box, Center, Stack, useColorModeValue } from '@chakra-ui/react';
import { ITodo } from '../../../dapi';
import { DataContext } from '../../../DataContext';

type TodoItemProps = { todo: ITodo };

export const TodoItem: React.FC<TodoItemProps> = (props) => {
    const { markAsComplete } = useContext(DataContext);

    const background = useColorModeValue("red.500", "blue.200")
    const textColor = useColorModeValue("white", "gray.800")

    const handleClick = async () => {
        await markAsComplete(props.todo.id);
    }

    return (
        <Box onClick={handleClick} bg={ props.todo.complete ? 'green' : background} color={textColor}p={2} m={2} >
           <Text fontSize="xl"> { props.todo.title } </Text>
        </Box>
    )
}