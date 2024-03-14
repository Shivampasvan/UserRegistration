import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import AllTutors from "../Data/AllTutorsForm.png";
import { PhoneIcon } from "@chakra-ui/icons";
import "./BottomBar.css";

const BottomBar = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  let uri = "https://plum-gharial-yoke.cyclic.app/users/add";

  const handleClick = () => {
    if (fname !== "" && email !== "" && phone !== "") {
      const name = `${fname}`;
      const userData = {
        name,
        email,
        phone,
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
          setEmail("");
          setPhone("");
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
      <Box
        className="gradient_anim_btn"
        // bg={"#171945"}
        position="fixed"
        bottom={0}
        height={"150"}
        margin={"auto"}
      >
        <Box width={"80%"} margin={"auto"}>
          <Flex>
            <Box
              width={"25%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            >
              <Image width={"80%"} src={AllTutors} />
            </Box>
            <Box width={{ base: "100%" }}>
              <Flex gap={{ base: 4, sm: 8, md: 16, lg: 24 }}>
                <Stack justifyContent={"center"}>
                  <Text
                    color={"rgb(255,200,69)"}
                    fontSize={{ base: 12, sm: 16, md: 20, lg: 26 }}
                    fontWeight={640}
                  >
                    Don’t miss out !{" "}
                  </Text>
                  <Text
                    width={"70%"}
                    fontSize={{ base: 10, sm: 10, md: 14, lg: 20 }}
                    fontWeight={600}
                    color={"whitesmoke"}
                  >
                    You are one step away from achieving your financial freedom
                  </Text>
                </Stack>
                <Box alignItems={"center"}>
                  <Button
                    size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                    borderRadius={20}
                    bg={"rgb(255,200,69)"}
                    color={"black"}
                    fontSize={20}
                    fontWeight={640}
                    padding={7}
                    margin={10}
                    onClick={onOpen}
                  >
                    Request a call back
                  </Button>

                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalBody>
                        <Box className="modalformbox">
                        <Box>
                            <Image src={AllTutors}/>
                        </Box>
                          <Flex className="formbox-flex">
                            <FormControl id="fname" isRequired>
                              <FormLabel>Name</FormLabel>
                              <Input
                                placeholder="Full name"
                                value={fname}
                                type="text"
                                onChange={(e) => setFname(e.target.value)}
                              />
                            </FormControl>
                          </Flex>

                          <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                              placeholder="Email address"
                              value={email}
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </FormControl>

                          <FormControl id="phone" isRequired>
                            <FormLabel>Contact</FormLabel>
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

                          <Box width={"55%"} margin={"auto"} mt={4} mb={0}>
                            <Button
                              width={"100%"}
                              bgColor={'#EBB913'}
                              onClick={handleClick}
                              color={"rgb(5,8,69)"}
                              _hover={{
                                color: "#EBB913",
                                bgColor: "rgb(5,8,69)",
                                fontsize: 40,
                              }}
                            >
                              Request a callback
                            </Button>
                          </Box>
                        </Box>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default BottomBar;
