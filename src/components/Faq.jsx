import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Heading,
  Center,
} from '@chakra-ui/react'


export default function Faq() {
  return (

    <>
        <Box marginY={20}>
        <Center paddingBottom={24}>
        <Heading fontFamily={'roboto'}>FAQs</Heading>
        </Center>
        <Accordion defaultIndex={[0]} allowMultiple paddingX={44}>
            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontFamily={'roboto'} fontSize={17} color={'gray.640'} fontWeight={500} flex='1'  textAlign='left'>
                    1. Can beginners take the course ?
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
                </Heading>
                <AccordionPanel pb={8}>
                Yes, our course is suitable for beginners. We provide comprehensive training from the basics, making it accessible for those with little to no prior knowledge of the stock market.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontFamily={'roboto'} fontSize={17} color={'gray.640'} fontWeight={500} flex='1' textAlign='left'>
                    2. What is the duration of the course ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel pb={8}>
                The course is designed to be completed in 3 months, ensuring that you gain a solid understanding of stock market fundamentals within a reasonable timeframe.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontFamily={'roboto'} fontSize={17} color={'gray.640'} fontWeight={500} flex='1' textAlign='left'>
                    3. Will you help with placement after the course ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel pb={8}>
                Yes, we offer placement assistance to guide you in finding job opportunities in the financial industry, leveraging our network and industry connections.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontFamily={'roboto'} fontSize={17} color={'gray.640'} fontWeight={500} flex='1' textAlign='left'>
                    4. Will we get a chance to do virtual trading during the course ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel pb={8}>
                Absolutely, virtual trading is an integral part of our curriculum. You will have the opportunity to practice trading in a simulated environment to apply what youve learned.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontFamily={'roboto'} fontSize={17} color={'gray.640'} fontWeight={500} flex='1' textAlign='left'>
                    5. Is there a support feature for students ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel pb={8}>
                Yes, we provide a dedicated support system to assist students with any queries or challenges they may encounter during the course, ensuring a smooth learning experience.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontFamily={'roboto'} fontSize={17} color={'gray.640'} fontWeight={500} flex='1' textAlign='left'>
                    6. Do I need prior financial knowledge to enroll ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel pb={8}>
                No, our course caters to all levels of learners, including those without prior financial knowledge. We start with the fundamentals and progressively build your expertise.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </Box>
    </>
  )
}