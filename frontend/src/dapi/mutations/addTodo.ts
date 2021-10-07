import { SymfoniTodoList } from '../../hardhat/SymfoniContext';

export const addTodo = async (contract: SymfoniTodoList, title: string) => {
  if (contract.instance) {
    const tx = await contract.instance.addTodo(title);
    await tx.wait();
  }
};
