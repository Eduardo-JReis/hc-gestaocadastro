import { Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {FaDatabase} from 'react-icons/fa';

export function Logo() {
    return (
        <Flex as={Link} to="/" align="center">
            <FaDatabase color="yellow" size={30}/>
            <Text
                fontSize={["1xl","2xl"]} // responsividade
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
                color="yellow"
                ml="2"
            >
                
                Gestão de Cadastro
            </Text>
        </Flex>
    );
}