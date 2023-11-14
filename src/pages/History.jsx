import { Box, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading, } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const History = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
axios.get(`http://localhost:8080/api/doubts/history`)
.then((res)=>{
    console.log(res.data);
    setData(res.data)
})
.catch((err)=>{
    console.log(err);
})
    },[])
  return (
    <Box w={'80%'} m={'auto'}>
        <Heading  textAlign={'center'} size={'lg'}>Doubt History</Heading>
<TableContainer>
  <Table variant={'striped'}>
    <TableCaption>All Doubts Ask By Students</TableCaption>
    <Thead>
      <Tr>
        <Th> Student Email</Th>
        <Th>Subject</Th>
        <Th textAlign={'center'}>Details</Th>
        <Th >Date & Time</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
            data&& data.map((el,i)=>{
                return <Tr key={i}>
                    <Td></Td>
                    <Td>{el.subject}</Td>
                    <Td>{el.details}</Td>
                    <Td>{el.time}</Td>
                </Tr>
            })
        }
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  )
}

export default History
