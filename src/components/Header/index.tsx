import { Flex, HStack } from '@chakra-ui/react';
import {Logo} from './Logo';
import {Profile} from './Profile';
import { SearchBox } from './SearchBox';

export function Header(){
    return (
        <Flex
          w="100%"
          as="header"
          maxWidth={1480}
          h="20"
          mx="auto"
          mt="4"
          
          align="center"
          justify="space-between"
           
        >
          <Logo /> 
          <HStack spacing = "16" align="center">
            <SearchBox />
            <Profile />
            </HStack> 
            
        </Flex>

    );
}