import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, Image } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import imgICon from '../assets/home.jpg';
import { Link } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log({ username });

        if (username && password) {
            localStorage.setItem('isLogged', 'true');

            // try {
            //     const response = await axios.post('/api/login', { username, password });
            //     // Handle successful login
            //     console.log(response.data);
            // } catch (error) {
            //     // Handle login error
            //     console.error(error);
            // }
        } else {
            toast({
                title: "Enter Valid username / Password",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            bg="white"
            overflow="hidden"
            borderRadius="12px"
            boxShadow="md"
            fontWeight="bold"
            height="500px"
            width="900px"
            p={5}
        >
              <Image
                height={{ base: '400px', md: '400px' }}
                width={{ base: '400px', md: '400px' }}
                maxHeight={{ base: '500px', md: '467px' }}
                maxWidth={{ base: '550px', md: '500px' }}
                src={imgICon}
                alt="The house from the offer."
            />
            <Box
                display="flex"
                flexDirection="column"
                alignItems={{ base: 'center', md: 'flex-start' }}
                minWidth={{ md: '350px' }}
                mr={{ md: 5 }}
            >
                <Text fontSize="2rem" mb={2}>
                    Account Login
                </Text>
                <form>
                    <FormControl>
                        <FormLabel color="purple.500">Username</FormLabel>
                        <Input
                            variant="filled"
                            id="outlined-username-input"
                            type="text"
                            autoComplete="current-username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="purple.500">Password</FormLabel>
                        <Input
                            variant="filled"
                            id="outlined-password-input"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button onClick={handleLogin} variant="solid" colorScheme="purple" my={2} width="350px" color="white">
                        Login
                    </Button>
                </form>
                <Text fontSize="12px" mt={3}>
                    <span style={{ color: '#000' }}> Forgot </span> Username / Password
                </Text>
            </Box>
          
        </Box>
    );
}
