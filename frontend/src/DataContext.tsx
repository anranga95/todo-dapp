import { utils } from "ethers/lib/ethers";
import React, { createContext, useContext, useEffect, useState } from "react"
import * as dapi from "./dapi";
import { CurrentAddressContext, SymfoniContext, TodoListContext } from "./hardhat/SymfoniContext";

export const DataContext = React.createContext<DataContextInterface>(
    {
        todos: [], 
        currentAddress: '',
        connectWallet: () => {},
        refreshTodos: () => {},
        saveTodo: (title: string) => {},
        markAsComplete: (id: number) => {},
        clearTodos: () => {}
    }
);

export const DataProvider: React.FC<any> = (props: any) => {
    const contract = useContext(TodoListContext)
    const walletContext = useContext(SymfoniContext)
    const [currentAddress] = useContext(CurrentAddressContext)
    
    let userTodos: dapi.ITodo[] = []; 
    const [todos, setTodos] = useState(userTodos);


    useEffect(() => {
        if(currentAddress) {
            // once we have current address, do stuff:
            refreshTodos();
            setupSubscriptions();
        }
    });

    const connectWallet = async () => {
        walletContext.init();
    }

    const setupSubscriptions = async () => {
        contract.instance?.on({address: currentAddress}, (...args) => console.log(args))
        // contract.instance?.
    }

    const refreshTodos = async () => {
        const onChainTodos = await dapi.getTodos(contract);
        setTodos(onChainTodos)
    };


    const saveTodo = async (title: string) => {
        const success = await dapi.addTodo(contract, title);
        await refreshTodos();
    }

    const markAsComplete = async (id: number) => {
        await dapi.markComplete(contract, id);
        await refreshTodos();
    }

    const clearTodos = async () => {
        await dapi.clearTodos(contract);
        await refreshTodos();
    }

  return (
    <DataContext.Provider value={
        { 
            todos, currentAddress,
            connectWallet, refreshTodos, 
            saveTodo, markAsComplete, clearTodos
        }
    }>
      {props.children}
    </DataContext.Provider>
  )
}

interface DataContextInterface {
    todos: dapi.ITodo[],
    currentAddress: string,
    connectWallet: () => void,
    refreshTodos: () => void,
    saveTodo: (title: string) => void,
    markAsComplete: (id: number) => void,
    clearTodos: () => void
}