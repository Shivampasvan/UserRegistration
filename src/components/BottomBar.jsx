import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import AllTutors from "../Data/AllTutorsForm.png";
import { PhoneIcon } from "@chakra-ui/icons";

const BottomBar = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  let uri = "https://plum-gharial-yoke.cyclic.app/users/add";

  const handleClick = () => {
    if (
      fname !== "" &&
      lname !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== ""
    ) {
      const name = `${fname} ${lname}`;
      const userData = {
        name,
        email,
        phone,
        message,
      };

      axios
        .post(uri, userData)
        .then((res) => {
          toast({
            title: "Data submitted successfully",
            status: "success",
            duration: 2500,
            isClosable: true,
          });
          setFname("");
          setLname("");
          setEmail("");
          setPhone("");
          setMessage("");
          console.log(userData);
        })
        .catch((err) => {
          toast({
            title: "Error in Registration.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          console.log(userData);
          console.log(err);
        });
    } else {
      toast({
        title: "All Fields Required",
        description: `Please Fill Required Details`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Box
        bg={"#0A2472"}
        // position={"sticky"}
        position='fixed'
        bottom={0}
        height={"150"}
        // border={"2px solid red"}
        margin={'auto'}

      >
        <Box width={'80%'} margin={'auto'}>
        <Flex>
          <Box 
        //   pt={4}
        //   border={"2px solid red"} 
          width={"25%"} 
          alignItems={"center"} 
          justifyContent={'center'}
          >
            <Image width={"80%"} src={AllTutors} />
          </Box>
          <Box>
            <Flex gap={24}>
              <Stack color={'white'} justifyContent={'center'}>
                <Text 
                color={'rgb(255,200,69)'} 
                fontSize={26}
                fontWeight={640}
                >Don’t miss out ! </Text>
                <Text 
                width={'70%'}
                fontSize={20}
                fontWeight={600}
                >You are step away to achieve your financial freedom</Text>
              </Stack>
              <Box alignItems={"center"}>
                <Button
                  borderRadius={20}
                  bg={"rgb(255,200,69)"}
                  color={"black"}
                  fontSize={20}
                  fontWeight={640}
                  padding={7}
                  margin={10}
                  onClick={onOpen}
                >
                  Request a call back
                </Button>

                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  className={"modalformbox"}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalBody>
                      <Box className="modalformbox">
                        <Flex className="formbox-flex">
                          <FormControl id="fname" isRequired>
                            <FormLabel>First name</FormLabel>
                            <Input
                              placeholder="First name"
                              value={fname}
                              type="text"
                              onChange={(e) => setFname(e.target.value)}
                            />
                          </FormControl>

                          <FormControl id="lname" isRequired>
                            <FormLabel>Last name</FormLabel>
                            <Input
                              placeholder="Last name"
                              value={lname}
                              type="text"
                              onChange={(e) => setLname(e.target.value)}
                            />
                          </FormControl>
                        </Flex>

                        <FormControl id="email" isRequired>
                          <FormLabel>Email address</FormLabel>
                          <Input
                            placeholder="you@company.com"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormControl>

                        <FormControl id="phone" isRequired>
                          <FormLabel>Phone number</FormLabel>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <PhoneIcon color="gray.400" />
                            </InputLeftElement>
                            <Input
                              type="number"
                              placeholder="Phone number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="message">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            resize="none"
                            placeholder="Type your message here."
                            value={message}
                            type="text"
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </FormControl>
                        <Box width={"55%"} margin={"auto"}>
                          <Button
                            width={"100%"}
                            boxShadow={"0px 0px 15px currentcolor"}
                            onClick={handleClick}
                            // bgColor={"rgb(5,8,69)"}
                            bgGradient="linear(to-r, #5689ea, white)"
                            color={"white"}
                            _hover={{
                              color: "rgb(5,8,69)",
                              bgColor: "rgb(210,224,251)",
                              fontsize: 40,
                              // boxShadow:('0px 0px 15px currentcolor')
                            }}
                          >
                            Enquiry Now
                          </Button>
                        </Box>
                      </Box>
                    </ModalBody>

                    <ModalFooter>
                      {/* <Button colorScheme='blue' mr={3}>
                            Save
                            </Button> */}
                      {/* <Button onClick={onClose}>Cancel</Button> */}
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>
            </Flex>
          </Box>
        </Flex>
        </Box>
      </Box>
    </>
  );
};

export default BottomBar;
