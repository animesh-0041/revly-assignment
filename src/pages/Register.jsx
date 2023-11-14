import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
  } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [userType,setUserType]=useState("")
    const handelSubmit=()=>{
        console.log(userType,email,password);
        axios.post(`http://localhost:8080/api/auth/register`,{email,password,userType})
        .then((res)=>{
            alert(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"  onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Select Type</FormLabel>
              <Select onChange={(e)=>setUserType(e.target.value)}>
                <option value="">Selecet</option>
                <option value="Student">Student</option>
                <option value="Tutors">Tutors</option>
              </Select>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text color={'blue.400'} cursor={'pointer'} onClick={()=>navigate('/')}>Already have an account?</Text>
              </Stack>
              <Button
                colorScheme='orange'
                onClick={handelSubmit}
                >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Register










