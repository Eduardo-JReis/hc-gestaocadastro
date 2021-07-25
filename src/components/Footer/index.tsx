import { FaGithub, FaLinkedin} from 'react-icons/fa'
import {Flex, HStack, Text} from '@chakra-ui/react';

export const Footer = () => {
    return (
        <Flex>
            <Text mr={16} fontSize="small">Desafio2 - Hiring Coders 2021</Text>
            <Flex align="center" id="contact">
                <Text fontSize="small">Desenvolvido por Eduardo Reis</Text>
                <HStack spacing={2} ml={2} className="icons">
                    <a href="https://github.com/Eduardo-JReis"><FaGithub color="#969cb3" /></a>
                    
                    <a href="https://www.linkedin.com/in/eduardo-reis-73a16512b/"><FaLinkedin color="#969cb3"/></a>
                </HStack>
            </Flex>
        </Flex>
    );
}

