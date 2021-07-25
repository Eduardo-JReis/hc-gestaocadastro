import { Flex, Input, Icon} from '@chakra-ui/react';
import {RiSearchLine} from 'react-icons/ri';

export function SearchBox(){
    return (
        <Flex
              as="label"
              flex="1"
              py="4"
              px="8"
              ml="6"
              maxWidth={400}
              alignSelf="center"
              color="white"
              pos="relative"
              bg="brand.500"
              borderRadius="full"
              >
                  <Input
                    color="white"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder = {{color: 'brand.100'}} 
                     />

                   <Icon as={RiSearchLine} fontSize="20" />  
                   </Flex>
    );
}