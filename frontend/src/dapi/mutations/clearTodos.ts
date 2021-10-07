import { SymfoniTodoList } from '../../hardhat/SymfoniContext';

export const clearTodos = async (contract: SymfoniTodoList) => {
  if (contract.instance) {
    const tx = await contract.instance.clearTodos();
    await tx.wait();
  }
};
