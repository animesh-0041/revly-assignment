import { Box, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Flex,
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
const Doubts = () => {
    const [subject,setSubject]=useState("")
    const [details,setDetails]=useState("")
const handelSubmit=()=>{
        axios.post(`http://localhost:8080/api/doubts/history`,{subject,details})
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
        <Heading fontSize={'2xl'}>Post Your Doubts and Connect  Tutors</Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="text">
            <FormLabel>Subject</FormLabel>
            <Input type="text"  onChange={(e)=>setSubject(e.target.value)}/>
          </FormControl>
          <FormControl >
            <FormLabel>Details</FormLabel>
            <Textarea type="text" onChange={(e)=>setDetails(e.target.value)}/>
          </FormControl>
          <Stack spacing={10}>
            
            <Button
             colorScheme='orange'
              onClick={handelSubmit}
              >
              Add Doubts
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Doubts
