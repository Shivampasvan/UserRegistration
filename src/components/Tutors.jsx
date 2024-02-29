import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import Sachin from "../Data/sachin.png";
import Ayushi from "../Data/ayushi.png";
import Udit from "../Data/udit.png";
import Manmeet from "../Data/manmeet.png";

export default function Tutors() {
  return (
    <Box fontFamily={'roboto'} bgColor={"rgb(5,8,69)"}>
      <Box>
        <Center fontSize={48} color={"whitesmoke"} paddingTop={"12"}>
          Our Tutors
        </Center>
      </Box>

      <Stack
        //Stack
        alignSelf={"center"}
        // py={20}
        padding={20}
        gap={"48px"}
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        // spacing={{ base: 8, md: 12, lg: 16 }}
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
              <Heading color={"gray.700"} fontFamily={'roboto'} fontSize={"xl"} fontWeight={500}>
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
              <Heading color={"gray.700"} fontFamily={'roboto'} fontSize={"xl"} fontWeight={500}>
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
              17 years of experience and made thousands of students technically
              strong
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
              <Heading color={"gray.700"} fontFamily={'roboto'} fontSize={"xl"} fontWeight={500}>
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
              <Heading color={"gray.700"} fontFamily={'roboto'} fontSize={"xl"} fontWeight={500}>
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
      </Stack>
    </Box>
  );
}
