//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "hardhat/console.sol";

contract TodoList {

  mapping(address => Todo[]) userTodos;
  mapping(address => Todo[]) userArchiveTodos;
  mapping(address => uint) userCurrentId;

  event NewTodo(address createdBy, uint id);

  struct Todo {
    uint id;
    string title;
    bool complete;
  }
  
  Todo[] blankList;

  constructor() { }

  function getTodos() public view returns (Todo[] memory) {
    return userTodos[msg.sender];
  }

  function getTodoCount() public view returns (uint) {
    return userTodos[msg.sender].length;
  }

  function addTodo(string memory title) public {
    userCurrentId[msg.sender] += 1;
    uint id = userCurrentId[msg.sender];
    userTodos[msg.sender].push(Todo(id, title, false));
    emit NewTodo(msg.sender, id);
  }

  function markAsComplete(uint id) public {
    for(uint i = 0; i<userTodos[msg.sender].length; i++) {
      if(userTodos[msg.sender][i].id == id) {
        userTodos[msg.sender][i].complete = true;
        userArchiveTodos[msg.sender].push(userTodos[msg.sender][i]);
        delete userTodos[msg.sender][i];
      }
    }
  }

  function getArchiveTodos() public view returns (Todo[] memory) {
    return userArchiveTodos[msg.sender];
  }

  function clearTodos() public {
    userTodos[msg.sender] = blankList;
  }

}
