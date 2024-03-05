import React from "react";
import ImgSource from "../Data/WhatOffer.png";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import SchoolIcon from "@mui/icons-material/School";
import VideocamIcon from '@mui/icons-material/Videocam';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LiveTvIcon from '@mui/icons-material/LiveTv';
// import styled from "styled-components";
// import { keyframes } from "styled-components";


const WhatOffer = () => {
  return (
    <>
      <Box bgImage={ImgSource} maxH={"100%"} paddingY={20}>
        <Center>
          <Heading style={{ fontFamily: "roboto", color:'#0a2472' }}>What we offer</Heading>
        </Center>
        <Center>
          <Text fontSize={20} color={"gray.600"} paddingX={20} textAlign={'center'}>
            " One complete solution for all your financial problems "
          </Text>
        </Center>
        <SimpleGrid
          columns={{base:1, sm:1, md:2, lg:3}}
          spacing={2}
          padding={8}
          paddingTop={10}
          justifyItems={"center"}
        >
          
          <a href="https://stocktutor.com/Masterclass">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'rgb(5,8,69)'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              bgColor: "rgb(5,8,69)",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
              
            }}
          >

            <LiveTvIcon style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28}>
              Live Masterclass
            </Heading>
            <Text align={"center"}>
              {" "}
              Elevate your trading expertise with real-time insights and expert
              guidance
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/virtual-trading">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'rgb(5,8,69)'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "rgb(5,8,69)",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <SchoolIcon style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28}>
              Virtual Trading
            </Heading>
            <Text align={"center"}>
              {" "}
              Learn, practice, and refine your stock trading skills in a
              risk-free virtual environment
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/AllCourses">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'rgb(5,8,69)'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "rgb(5,8,69)",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <VideocamIcon style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28}>
              Recorded Course
            </Heading>
            <Text align={"center"}>
              {" "}
              Access expert trading knowledge anytime, anywhere with our
              convenient on-demand sessions
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/virtual-trading">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'rgb(5,8,69)'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "rgb(5,8,69)",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <PsychologyIcon style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28}>
              Practical Learning
            </Heading>
            <Text align={"center"}>
              {" "}
              Gain hands-on trading experience and real-world skills for success in the stock market
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/Blog">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'rgb(5,8,69)'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "rgb(5,8,69)",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <SchoolIcon style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28}>
            Trading Strategies
            </Heading>
            <Text align={"center"}>
              {" "}
              Master the art of trading with proven tactics and expert insights tailored for success in the stock market
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/Masterclass">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'rgb(5,8,69)'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "rgb(5,8,69)",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <SchoolIcon style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28}>
              Career Support
            </Heading>
            <Text align={"center"}>
              {" "}
              Unlock your potential in the financial world with tailored guidance and industry insights
            </Text>
          </Stack>
          </a>
        </SimpleGrid>
      </Box>
    </>
  );
};

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

export default WhatOffer;
