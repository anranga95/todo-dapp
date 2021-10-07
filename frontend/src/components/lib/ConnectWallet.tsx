import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';

import { DataContext } from '../../DataContext';

export const ConnectWallet: React.FC<any> = () => {
    const { currentAddress, connectWallet } = useContext(DataContext)

    const abbreviateAddress = (address: string) => {
        return `${address.slice(0, 4)}...${address.slice(-4)}`
    }

    return (
        <Button
            onClick={connectWallet}
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
            {currentAddress ? abbreviateAddress(currentAddress) : 'Connect Wallet'}
        </Button>
    )
}