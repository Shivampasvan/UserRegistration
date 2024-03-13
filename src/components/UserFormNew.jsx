import { Box, Button, Input, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Label } from "@mui/icons-material";
import React from "react";

const UserFormNew = () => {
  return (
    <>
    <Box border={'2px solid red'}>
      <SimpleGrid columns={2} width={'90%'} margin={'auto'} border={'2px solid green'}>
        <Stack width={'68%'} border={'2px solid yellow'} margin={'auto'}>
          <Text fontSize={48} fontWeight={600} width={'100%'}>
            Master Stock Trading with <span style={{color:"#EBB913"}}>StockTutor</span>
          </Text>
          <Text fontSize={20}>
            Discover the ins and outs of stock trading in a simple,
            user-friendly way. Elevate your investment knowledge with
            StockTutor's easy-to-follow guidance.
          </Text>
        </Stack>

        <Stack width={'80%'} border={'2px solid yellow'} gap={10}>
        <Box width={'60%'}>
        <Text fontStyle={'italic'} fontFamily={'cursive'} fontSize={24}>
        Register now to secure your Financial future
        </Text>
        </Box>

        <Box>
        <Text>Name</Text>
        <Input placeholder="Full Name"/>
        </Box>
            
        <Box>
        <Text>Contact</Text>
        <Input placeholder="Mobile Number"/>
        </Box>

        <Box margin={'auto'}>
            <Button bgColor={'#EBB913'}>Request a call back</Button>
        </Box>
        </Stack>
      </SimpleGrid>
    </Box>
    </>
  );
};

export default UserFormNew;
