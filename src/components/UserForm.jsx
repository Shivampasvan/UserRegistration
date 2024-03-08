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
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./UserForm.css";
import "./SocialMedia.css";
// import formvideo from "../Data/LiveMasterClass.mp4";
import formvideo1 from "../Data/LiveMasterClass11.mp4";
// import LeftAlign from "../Data/LeftAlign.mp4";
import { PhoneIcon } from "@chakra-ui/icons";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
      <Box>
        <Box className="icon-bar">
          <a
            href="https://www.facebook.com/people/Stock-Tutor/61552036775314/?mibextid=ZbWKwL"
            class="facebook"
          >
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="https://twitter.com/_Stocktutor" class="twitter">
            <XIcon></XIcon>
          </a>
          <a
            href="https://www.instagram.com/stocktutorofficial/"
            class="google"
          >
            <InstagramIcon></InstagramIcon>
          </a>
          <a
            href="https://www.linkedin.com/company/stock-tutor/"
            class="linkedin"
          >
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a
            href="https://www.youtube.com/@Stock_Tutor_Official"
            class="youtube"
          >
            <YouTubeIcon></YouTubeIcon>
          </a>
        </Box>

        <Box display={{ base: "none", sm: "block", md: "block", lg: "block" }}>
          <video
            autoPlay
            loop
            muted
            style={{
              position: "relative",
            }}
          >
            <source src={formvideo1} type="video/mp4" />
          </video>
        </Box>

        <Box display={{ base: "block", sm: "none", md: "none", lg: "none" }}>
          <video
            autoPlay
            loop
            muted
            style={{
              position: "relative",
            }}
          >
            <source src={formvideo1} type="video/mp4" />
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
          <Box width={'55%'} margin={'auto'}>
          <Button
          width={'100%'}
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
      </Box>

      {/* <SimpleGrid
        height={600}
        bgGradient="linear( #10002b, #6c757d, #10002b)"
        fontFamily={"roboto"}
        spacing={10}
      >
        <Box
          color={"white"}
          width={"50%"}
          textAlign={"center"}
          margin={"auto"}
          fontSize={36}
          fontWeight={400}
        >
          <Text>Learn and Earn with</Text>
          <Text>
            <span style={{ color: "rgb(246,194,20)", fontWeight: 600 }}>
              StockTutor
            </span>{" "}
            : Your One Solution
          </Text>
        </Box>

        <Box
          color={"white"}
          width={"30%"}
          textAlign={"center"}
          margin={"auto"}
          fontSize={20}
          fontWeight={400}
        >
          <Text>
            Bridging the Gap in Stock Market Education with a Vision for Career
            Support
          </Text>
        </Box>

        <Box margin={"auto"}>
          <Button>Click Here !</Button>
          
        </Box>
      </SimpleGrid> */}
    </>
  );
};

export default UserForm;
