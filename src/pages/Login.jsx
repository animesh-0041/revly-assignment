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
const Login = () => {
    const data=JSON.parse(localStorage.getItem("revly"))||null
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handelSubmit=()=>{
        console.log("ddjmkd");
        axios.post(`http://localhost:8080/api/auth/login`,{email,password})
        .then((res)=>{
            console.log(res.data);
            localStorage.setItem("revly",JSON.stringify({token:res.data.token,userType:res.data.userType}))
            alert(res.data.msg)
            console.log(data);
            data.userType=="student"?navigate('/doubts'):navigate('/doubts/history')
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
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text color={'blue.400'} cursor={"pointer"} onClick={()=>navigate('/register')}>Create an account!</Text>
              </Stack>
              <Button
               colorScheme='orange'
                onClick={handelSubmit}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login










