import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./UserForm.css";
import formvideo from "../Data/LiveMasterClass.mp4";
import { PhoneIcon } from "@chakra-ui/icons";
import axios from "axios";

const UserForm = () => {
  const toast = useToast();
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

      axios.post(uri, userData)
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
      <Box className="MainBox">
        <Box>
          <video autoPlay loop muted>
            <source src={formvideo} type="video/mp4" />
          </video>
        </Box>

        <Box className="formbox shrink">
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

          <Button
            onClick={handleClick}
            bgColor={"rgb(5,8,69)"}
            color={"white"}
            _hover={{
              color: "rgb(5,8,69)",
              bgColor: "rgb(210,224,251)",
              fontsize: 40,
            }}
          >
            Enquiry Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UserForm;
