import { SymfoniTodoList } from '../../hardhat/SymfoniContext';

export const markComplete = async (contract: SymfoniTodoList, id: number) => {
  if (contract.instance) {
    const tx = await contract.instance.markAsComplete(id);
    await tx.wait();
  }
};
