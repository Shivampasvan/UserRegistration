import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import certificate from "../Data/certificate.PNG";

const Certificate = () => {
  return (
    <>
      <SimpleGrid columns={2} width={"84%"} margin={"auto"} gap={24} my={20} fontFamily={"roboto"}>
        <Box>
          <Image src={certificate} />
        </Box>
        <Stack gap={8}>      
          <Box>
          <Heading fontSize={40} fontWeight={600} color={'rgb(17,57,200)'}>StockTutor</Heading>
          </Box>
          <Box width={"88%"}>
            <Text fontFamily={'montserrat'} color={'RGB(72 73 76)'} fontSize={18}>
              We're thrilled to extend our heartfelt congratulations on
              completing StockTutor's Financial Mastery Workshop. Your
              dedication and active participation have truly made this workshop
              a success! As a token of appreciation for your commitment to
              expanding your financial knowledge, we're pleased to present each
              of you with a Certificate of Participation. This certificate
              signifies your dedication to enhancing your financial literacy and
              marks the beginning of your journey towards financial empowerment.
              We hope that the insights and strategies shared during the
              workshop will continue to guide you in making informed financial
              decisions and achieving your goals. Once again, congratulations on
              this achievement, and we look forward to seeing your continued
              success in your financial endeavors!
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default Certificate;
