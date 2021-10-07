import React from 'react';
import {
    Text,
    Stack,
    Heading,
    Flex,
    useColorModeValue
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./lib/ColorModeSwitcher"
import { ConnectWallet } from './lib/ConnectWallet';

export const Navbar: React.FC<any> = (props) => {
    const background = useColorModeValue("red.500", "blue.200")
    const textColor = useColorModeValue("white", "gray.800")

    return (
        <Flex
            as="nav" align="center" justify="space-between" wrap="wrap"
            padding={6} bg={background} color={textColor} {...props}>

            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    SHERT Stack
                </Heading>
            </Flex>

            <Stack
                direction={{ base: "column", md: "row" }} width={{ base: "full", md: "auto" }}
                alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}
            >
                <Text>Docs</Text>
                <Text>Examples</Text>
                <Text>Blog</Text>
            </Stack>

            <ConnectWallet />
            <ColorModeSwitcher />

        </Flex>
    )
}