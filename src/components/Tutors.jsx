import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import Sachin from '../Data/sachin.png'
import Ayushi from '../Data/ayushi.png'
import Udit from '../Data/udit.png'

export default function Tutors() {
  return (
    <Box fontFamily={"Roboto, sans-serif"} bgColor={"rgb(5,8,69)"}>
      <Box>
            <Center  fontSize={48} color={'whitesmoke'} paddingTop={'12'}>Our Tutors</Center>
      </Box>
      <Center py={20} gap={"80px"} >
      
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
                filter: "blur(20px)",
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
              <Heading color={"gray.700"} fontSize={"xl"} fontWeight={500}>Sachin Birla</Heading>
              <Text color={"gray.500"} fontSize={'12px'} fontWeight={400}>
                MBA Finance, NISM
              </Text>
            </Box>
            <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
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
                filter: "blur(20px)",
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
              <Heading color={"gray.700"} fontSize={"xl"} fontWeight={500}>Ayushi Verma</Heading>
              <Text color={"gray.500"} fontSize={'12px'} fontWeight={400}>
                MBA Finance, NISM
              </Text>
            </Box>
            <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
              Technical Analysis
            </Heading>
            <Text>
            17 years of experience and made thousands of students technically strong
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
                filter: "blur(20px)",
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
              <Heading color={"gray.700"} fontSize={"xl"} fontWeight={500}>Udit Dua</Heading>
              <Text color={"gray.500"} fontSize={'12px'} fontWeight={400}>
              CA, Corporate Law Advisor
              </Text>
            </Box>
            <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
              Fundamental Analysis
            </Heading>
            <Text>
            15 years of experience and explain P&L in a most simple way possible
            </Text>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
