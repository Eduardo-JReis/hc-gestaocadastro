import { Flex, Avatar, Box, Text } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true} : ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Eduardo Reis</Text>
                <Text color="brand.200" fontSize="small">
                    edu.publicidade81@gmail.com
                </Text>
            </Box>
            )}
            <Avatar size="md" name="Eduardo Reis" src="https://avatars.githubusercontent.com/u/52106958?s=400&u=3ea42087763c9fca7220f5830d5bf24cd1f425b6&v=4" />
        </Flex>
    );
}