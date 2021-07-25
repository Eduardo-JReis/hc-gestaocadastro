import { Flex, Heading, Box } from '@chakra-ui/react';
import {FormClient} from '../FormClient'

import {Header} from '../Header';
import {Footer} from '../Footer';

export function Users(){
    return(
        
        <Flex width={1480} mx="auto" h="100vh" px={20} py={4} flexDir="column" >
            <Header />
            <Flex flexDir="column" justify="center" align="center">
            
            <Heading mb={4} fontSize="3xl">Cadastre um novo cliente na sua loja</Heading>
            <Box mb={4} w="800px" align="center" bg="brand.500" p={4} borderRadius="2xl">
                <FormClient />
            </Box>
            <Footer />
            </Flex>
        </Flex>
        
    );
}