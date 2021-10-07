import React, { useContext, useEffect, useState } from 'react';

import { Text, Input, Button, Box, Center, Stack, VStack } from '@chakra-ui/react';
import { DataContext } from '../../../DataContext';

export const AddTodo: React.FC<any> = (props) => {
    const { saveTodo, clearTodos } = useContext(DataContext)
    const [inputTodo, setInputTodo] = useState("");

    const handleAddTodo = async () => {
        await saveTodo(inputTodo);
        setInputTodo('');
    }

    const handleClearTodos = async () => {
        await clearTodos();
    }

    return (
        <Box p={2}>
            <Input
                my={1} placeholder="What to do...?" size="lg"
                value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}
            />

            <VStack>
                <Button
                    my={1} onClick={() => handleAddTodo()}
                    variant="outline" _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                >
                    Add Todo
                </Button>
                <Button
                    my={1} onClick={() => handleClearTodos()}
                    variant="outline" _hover={{ bg: "red.700", borderColor: "red.700" }}
                >
                    Clear
                </Button>
            </VStack>
        </Box>
    )
}