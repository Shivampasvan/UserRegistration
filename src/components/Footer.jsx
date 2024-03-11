import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Link,
} from '@chakra-ui/react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import AppStoreBadge from '../Data/AppStoreBadge.png';
import PlayStoreBadge from '../Data/PlayStoreBadge.png';
import biglogo from '../Data/biglogo.png';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      // color={useColorModeValue('gray.700', 'gray.200')}
      color={'RGB(34 75 159)'}
      >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Contact Us
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Safety Center
            </Box>
            <Box as="a" href={'#'}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'#'}>
              Cookies Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Law Enforcement
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
            <Stack gap={0}>
            <Link isExternal><Image height={'70%'} src={AppStoreBadge}/></Link>
            <Link isExternal><Image height={'70%'} src={PlayStoreBadge}/></Link>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          // py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>

          <Box width={20}>
          <Image src={biglogo} width={'100%'} alt="Logo" />
          </Box>
          <Text>StockTutor 2023 : All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            
            <SocialButton label={'Twitter'} >
            <Link href={'https://twitter.com/_Stocktutor'} isExternal><FaXTwitter /></Link>
            </SocialButton>
            
            <SocialButton label={'YouTube'}>
              <Link href={'https://www.youtube.com/@Stock_Tutor_Official'} isExternal><FaYoutube /></Link>
            </SocialButton>

            <SocialButton label={'Instagram'} >
              <Link href={'https://www.instagram.com/stocktutorofficial/'} isExternal><FaInstagram /></Link>
            </SocialButton>
          </Stack>
        </Container>
      </Box>

      {/* <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.400", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            // py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Image src={biglogo} w="28" alt="Logo" />
            <Text>
              © StockTutor 2023 : All rights reserved
            </Text>

            <SocialButton label={'Twitter'} >
            <Link href={'https://twitter.com/_Stocktutor'} isExternal><FaXTwitter /></Link>
            </SocialButton>
            
            <SocialButton label={'YouTube'}>
              <Link href={'https://www.youtube.com/@Stock_Tutor_Official'} isExternal><FaYoutube /></Link>
            </SocialButton>

            <SocialButton label={'Instagram'} >
              <Link href={'https://www.instagram.com/stocktutorofficial/'} isExternal><FaInstagram /></Link>
            </SocialButton>
          </Container>
        </Box> */}
    </Box>
  )
}