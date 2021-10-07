import { BigNumber } from 'ethers/lib/ethers';
import { ITodo } from '..';
import { SymfoniTodoList } from '../../hardhat/SymfoniContext';

export const getTodos = async (contract: SymfoniTodoList): Promise<ITodo[]> => {
  if (contract.instance) {
    try {
      const todos = await contract.instance.getTodos();
      return todos.map(mapTodos);
    } catch(error) {
      console.log(error);
    }
  }

  return [];
};

const mapTodos = (obj: {
  id: BigNumber;
  title: string;
  complete: boolean;
  0: BigNumber;
  1: string;
  2: boolean;
}): ITodo => {
  return {
    id: obj.id.toNumber(),
    title: obj.title, 
    complete: obj.complete
  }
}
