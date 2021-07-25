import { Flex, Image, Stack, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import bgImage from '../../asstes/images/girl.png';

export function Main(){
    return (
        <Flex width={1480} mx="auto" h="100vh" px={20} py={4} flexDir="column" justify="space-between">
            <Header />
            
            <Flex >
                <Stack spacing={20}>
                    <Text fontSize="5xl">
                        Cadastre os seus 
                        <Text fontWeight="semibold" color="pink.500" as="span" ml="2">
                        Clientes<br /></Text> e os seus 
                        <Text fontWeight="semibold" color="pink.500" as="span" ml="2">
                        Produtos
                        </Text>
                    </Text>

                    <Flex flexDirection="column">
                        <Text fontSize="2xl" >Para cadastrar os seus clientes 
                            <Button as={Link} to="/users" colorScheme="yellow" ml={2}>clique aqui!</Button>
                        </Text>
                        <Text fontSize="2xl" marginTop={6}>
                            Para cadastrar os seus Produtos 
                            <Button as={Link}  to="/products" colorScheme="pink" ml={2}>clique aqui!</Button> 
                        </Text>
                    </Flex>
                </Stack>
                <Image src={bgImage} boxSize="600px" pos="absolute" bottom="0" 
                right="100px"  />
            </Flex>
            <Footer />
        </Flex>
    );
}