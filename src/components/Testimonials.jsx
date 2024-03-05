import {
  Box,
  Flex,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import GradeIcon from "@mui/icons-material/Grade";
import User4 from "../Data/user4.png";
import User5 from "../Data/user5.png";
import User2 from "../Data/user2.png";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import styled from "styled-components";
import { keyframes } from "styled-components";

// import './Testimonials.css'

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};


const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"} >
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600} fontSize={"17px"} color={"rgb(13,44,66)"} transform={'scale(1.025, 1)'}>
          {name}
        </Text>
        <Text
          transform={'scale(1.05, 1)'}
          fontFamily={"roboto"}
          fontWeight={400}
          fontSize={"13px"}
          color={useColorModeValue("gray.800", "gray.800")}
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bgGradient='linear(to-l, white, #5689ea)'>
      <Container maxW={'6xl'} py={28} as={Stack} spacing={20}>
        <Stack spacing={0} align={"center"} padding={'12px 0px 50px 0px'}>
          <Text 
          // color={"RGB(225,232,239)"} 
          color={"#2563EB"} 
          fontWeight={600} 
          bgGradient='linear(to-l, #0a2472, #0a2472, )'
          bgClip='text'
          >
        
            2000+ Happy Traders
          </Text>
          <Text color={'#0a2472'} fontSize={36} fontWeight={600} paddingX={{base:12}} textAlign={'center'} >
            Don’t just take our words
          </Text>
        </Stack>

        <Stack
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          spacing={{ base: 8, md: 12, lg: 16 }}
        >
          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text>
                An excellent choice for informed investment decisions.
                Exceptional technical analysis training, practical approach, and
                valuable career support
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              
              src={User5}
              name={"Shreya Arora"}
              title={"1st Batch"}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <StarHalfIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text>
                Comprehensive learning, practical approach, and outstanding
                career support. Boosted my confidence for a rewarding financial
                career.
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              
              src={User2}
              name={"Rahul Malik"}
              title={"2nd Batch"}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text>
                Life-changing stock market course with practical learning and
                excellent career support. Highly recommended for aspiring
                traders. Super happy.
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              src={User4}
              name={"Drishti Sahni"}
              title={"3rd Batch"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}

/*



export default function TextGradientComponent() {
  return (
    <>
      <AnimatedGradientText>Hi, I'm Alexander</AnimatedGradientText>
    </>
  );
}

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;
const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

*/