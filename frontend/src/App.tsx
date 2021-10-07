import * as React from "react"
import {
  ChakraProvider,
  theme,
  SimpleGrid,
  Box
} from "@chakra-ui/react"
import { Symfoni } from "./hardhat/SymfoniContext";

import { Navbar } from './components/Navbar';
import { TodoIndex } from "./components/TodoIndex";
import { DataProvider } from "./DataContext";

function App() {

  return (

    <Symfoni autoInit={false} showLoading={false}>
        <DataProvider>
          <ChakraProvider theme={theme}>
              <Navbar></Navbar>
              <TodoIndex></TodoIndex>
          </ChakraProvider>
        </DataProvider>
    </Symfoni>
  );
}

export default App;
