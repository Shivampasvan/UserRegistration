import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Sachin from "../Data/sachin.png";
import Ayushi from "../Data/ayushi.png";
import Udit from "../Data/udit.png";
import Manmeet from "../Data/manmeet.png";
import AnimatedCursor from "react-animated-cursor";
import styled from "styled-components";
import { keyframes } from "styled-components";
import './SocialMedia.css';
// import "./Tutors.css";

export default function Tutors() {
  return (
    <>
      {/* <AnimatedCursor /> */}
      <Box
        padding={40}
        border={"2px solid red"}
        display={{ base: "block", sm: "none", md: "none", lg: "none" }}
      >
        <Center>
          <Text>Using this box for mobile screen.</Text>
        </Center>
      </Box>

      <Box
      className="gradient_anim_btn"
        fontFamily={"roboto"}
        // bgGradient={"linear-gradient(to right, white,#ABC7FC,white)"}
        py={10}
        display={{ base: "none", sm: "block", md: "block", lg: "block" }}
      >
        <Stack gap={"0px"}>
          <Center
            fontSize={40}
            fontWeight={500}
            color={"#080E83"}
            paddingTop={"12"}
            lineHeight={"60px"}
            transform={"scaleY(0.94)"}
          >
            <span style={{ fontFamily: "monospace" }}> “ </span>Explore Our Team
            of Expert Tutors<span style={{ fontFamily: "monospace" }}> ” </span>
          </Center>
          {/* <Center>
            <Text color={"#080E83"} fontFamily="roboto" fontSize={20}>
              Ready to Empower Your Learning Journey
            </Text>
          </Center> */}
          
          
          <Box 
          margin={'auto'} 
          width={'850px'} 
          // fontFamily="roboto" 
          // fontSize={'18px'} 
          textAlign={'center'}
          bgGradient='linear(to-r, #4361ee, #3a0ca3, #4361ee)'
          bgClip='text'
          >
            Our tutors epitomize excellence, blending expertise with
            personalized support. They ignite curiosity, nurture growth, and
            ensure success for every student. With genuine passion and
            dedication, they create engaging learning environments where
            students thrive and excel academically.
            </Box>
          
          
        </Stack>

        <SimpleGrid
          alignSelf={"center"}
          // py={20}
          padding={28}
          gap={"48px"}
          // direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
        >
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Sachin})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(30px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Sachin}
                alt="#"
              />
            </Box>
            <Stack pt={8} align={"start"}>
              <Box>
                <Heading
                  color={"gray.700"}
                  fontFamily={"roboto"}
                  fontSize={"xl"}
                  fontWeight={500}
                >
                  Sachin Birla
                </Heading>
                <Text color={"gray.500"} fontSize={"12.4px"} fontWeight={400}>
                  MBA Finance, NISM
                </Text>
              </Box>
              <Heading fontSize={"xl"} fontFamily={"roboto"} fontWeight={500}>
                Basics, Derivatives
              </Heading>
              <Text>
                20 years of experience and made thousands of people financially
                stable
              </Text>
            </Stack>
          </Box>

          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Ayushi})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(30px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Ayushi}
                alt="#"
              />
            </Box>
            <Stack pt={8} align={"start"}>
              <Box>
                <Heading
                  color={"gray.700"}
                  fontFamily={"roboto"}
                  fontSize={"xl"}
                  fontWeight={500}
                >
                  Ayushi Verma
                </Heading>
                <Text color={"gray.500"} fontSize={"12.4px"} fontWeight={400}>
                  MBA Finance, NISM
                </Text>
              </Box>
              <Heading fontSize={"xl"} fontFamily={"roboto"} fontWeight={500}>
                Technical Analysis
              </Heading>
              <Text>
                17 years of experience and made thousands of students
                technically strong
              </Text>
            </Stack>
          </Box>

          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Udit})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(30px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Udit}
                alt="#"
              />
            </Box>
            <Stack pt={8} align={"start"}>
              <Box>
                <Heading
                  color={"gray.700"}
                  fontFamily={"roboto"}
                  fontSize={"xl"}
                  fontWeight={500}
                >
                  Udit Dua
                </Heading>
                <Text color={"gray.500"} fontSize={"12.4px"} fontWeight={400}>
                  CA, Corporate Law Advisor
                </Text>
              </Box>
              <Heading fontSize={"xl"} fontFamily={"roboto"} fontWeight={500}>
                Fundamental Analysis
              </Heading>
              <Text>
                15 years of experience and explain P&L in a most simple way
                possible
              </Text>
            </Stack>
          </Box>
              
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Udit})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(30px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Manmeet}
                alt="#"
              />
            </Box>
            <Stack pt={8} align={"start"}>
              <Box>
                <Heading
                  color={"gray.700"}
                  fontFamily={"roboto"}
                  fontSize={"xl"}
                  fontWeight={500}
                >
                  Manmeet Kaur
                </Heading>
                <Text color={"gray.500"} fontSize={"12.4px"} fontWeight={400}>
                  PHD, Professor of Finance{" "}
                </Text>
              </Box>
              <Heading fontSize={"xl"} fontFamily={"roboto"} fontWeight={500}>
                Finance
              </Heading>
              <Text>
                15 years of experience and made thousand of people financially
                literate
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

// const hue = keyframes`
//  from {
//    -webkit-filter: hue-rotate(160deg);
//  }
//  to {
//    -webkit-filter: hue-rotate(300deg);
//  }
// `;
// const AnimatedGradientText = styled.h1`
//   color: #f35626;
//   background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -webkit-animation: ${hue} 10s infinite linear;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
//     sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//   font-feature-settings: "kern";
//   font-size: 40px;
//   font-weight: 700;
//   line-height: 48px;
//   overflow-wrap: break-word;
//   text-align: center;
//   text-rendering: optimizelegibility;
//   -moz-osx-font-smoothing: grayscale;
// `;
