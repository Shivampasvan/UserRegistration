import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import bgimg from "../Data/bgimg.jpg";
import basics from "../Data/Basics.png";
import fundamenta from "../Data/funda.png";
import technical from "../Data/technical.png";
import derivative from "../Data/derivative.png";


const OurCourses = () => {
  return (
    <>
      <Box bgImage={bgimg} fontFamily={"roboto"} color={'#0a2472'} py={16}>
        <Box width={"50%"} margin={"auto"} textAlign={'center'} pb={8}>
          <Heading fontFamily={'roboto'} fontWeight={500} fontSize={40}>Our Courses</Heading>
        </Box>

        <Stack width={"84%"} margin={"auto"} gap={8}>
          <SimpleGrid  gap={16} columns={{base:1, sm:1, md:1, lg:2}} justifyItems={"center"} alignItems={"center"}  padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box width={'64%'} >
              <Image src={basics} />
            </Box>

            <Stack gap={8} width={'80%'} margin={'auto'}>
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={28}>Basics Of Stock Market</Heading>
              <Text >
                Grasp the fundamentals, from understanding stocks and stock
                exchanges to decoding market terminology and setting clear
                investment goals
              </Text>
              <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} gap={3} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Portfolio Management</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Psychology </Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Investment Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={16} columns={{base:1, sm:1, md:1, lg:2}} justifyItems={"center"} alignItems={"center"}  padding={'2%'} justifyContent={'space-around'} margin={'auto'}>

            <Stack width={'80%'} gap={8} >
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={28}>Fundamental Analysis</Heading>
              <Text width={'80%'}>
              Discover the essentials of Fundamental Analysis in stock exchange training – demystifying stock market insights. Gain the skills to evaluate companies and make savvy investment choices with confidence.

              </Text>
              <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} gap={3}>
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Financial Statements</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Valuation Techniques</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Reports</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Research</Text>
                </Flex>
              </SimpleGrid>
            </Stack>

            <Box width={'80%'} >
              <Image width={'90%'} src={fundamenta} />
            </Box>
          </SimpleGrid>

          <SimpleGrid gap={16} columns={{base:1, sm:1, md:1, lg:2}} justifyItems={"center"} alignItems={"center"}  padding={'2%'} py={'5%'} justifyContent={'space-around'} margin={'auto'}>
            <Box width={'80%'} >
              <Image src={technical} />
            </Box>

            <Stack gap={8} width={'80%'} >
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={28}>Technical Analysis</Heading>
              <Text width={'80%'}>
              Explore the world of Technical Analysis through our courses regarding stock market, where we break down complex market trends and charts into simple, actionable insights. Acquire the skills to make informed trading decisions confidently.

              </Text>
              <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} gap={3}>
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Chart Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Trading Strategies</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Indicators and Oscillators</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Backtesting</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={16} columns={{base:1, sm:1, md:1, lg:2}} justifyItems={"center"} alignItems={"center"}  padding={'2%'} py={'5%'} justifyContent={'space-around'} margin={'auto'}>

            <Stack gap={8} width={'80%'} >
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={28}>Derivatives</Heading>
              <Text width={'80%'}>
              Begin your exploration of Derivatives with our online trading courses, where we simplify complex financial instruments. Develop expertise in risk management and trading strategies to gain a thorough grasp of the market.
              </Text>
              <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} gap={3}>
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Chart Patterns</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Options Strategies</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Live Trading</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Hedging Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>

            <Box width={'80%'} >
              <Image src={derivative} />
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </>
  );
};

export default OurCourses;
