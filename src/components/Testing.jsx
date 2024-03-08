import React from 'react';
import './Testing.css';
import { Box, Button } from '@chakra-ui/react';

const handleClick=()=>{
    alert('You have subscribed successfully !!')
}

const Testing = () => {
  return (
    <>
        <Box width={'50%'} margin={'auto'} textAlign={'center'} mb={100}>
        <Button onClick={handleClick} class="button-92" role="button">Enquiry Now!</Button>
        </Box>  
    </>
  )
}

export default Testing