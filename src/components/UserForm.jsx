import { 
  Box, 
  Flex, 
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button
} from '@chakra-ui/react'
import React from 'react'
import './UserForm.css'
import formvideo from '../Data/LiveMasterClass.mp4'
import { PhoneIcon } from '@chakra-ui/icons'


const UserForm = () => {
  return (
    <>
        <Box>

        <Box>
        <video autoPlay loop muted>
        <source src={formvideo} type="video/mp4" />
        </video>
        </Box>

        <Box className='formbox' >

          <Flex className='formbox-flex'>

            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder='First name' />
            </FormControl>

            <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input placeholder='Last name' />
            </FormControl>

          </Flex>

          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input placeholder='you@company.com' />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone number</FormLabel>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <PhoneIcon color='gray.400' />
            </InputLeftElement>
            <Input type='number' placeholder='Phone number' />
          </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea resize='none' placeholder='Type your message here.' />
          </FormControl>
          
          <Button bgColor={'rgb(5,8,69)'} color={'white'} _hover={{color:"rgb(5,8,69)", bgColor:'rgb(210,224,251)', fontsize:40 }}>
            Enquiry Now
          </Button>


        </Box>
        </Box>
    </>
  )
}

export default UserForm