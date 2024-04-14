import {
  Box,
  Container,
  Flex,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import teamBg from "../../../assets/images/backgrounds/5. Team.png";

import ivan from "../../../assets/images/team img/Ivan 1.png";
import luchex from "../../../assets/images/team img/Luchex 1.png";
import robin from "../../../assets/images/team img/Robin 1.png";
import x from "../../../assets/images/socials/Twitter-X-Line-Icon.png";
import linkedin from "../../../assets/images/socials/Linkedin-Line-Icon.png";
import github from "../../../assets/images/socials/Github-Line-Icon.png";

function Team() {
  return (
    <Container bgImage={teamBg} minW="100%" p={"2rem"}>
      <Flex justify="center" flexDir="column">
        <Heading
          color="#4FFF4B"
          fontSize="40px"
          fontStyle={"italic"}
          fontWeight={"bold"}
          fontFamily={"'Roboto Mono', monospace"}
          alignSelf="center"
        >
          Our Team
        </Heading>
        <Box
          alignSelf="center"
          h="3px"
          w="10rem"
          bgGradient="linear(to-br, #00FFC4, #4FFF4B)"
        ></Box>
      </Flex>
      <Flex
        justify="center"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        align={"center"}
      >
        <Flex
          flexDir="column"
          justify="center"
          m={{ base: "2rem", lg: "4rem" }}
        >
          <Flex
            mb="1rem"
            boxSize="10rem"
            bgImage={luchex}
            borderRadius={"100%"}
          ></Flex>
          <Heading color="white" textAlign="center">
            Luckex
          </Heading>
          <Text
            bgGradient="linear(to-b, #00FFC4, #4FFF4B)"
            bgClip="text"
            textAlign="center"
          >
            Tech Lead
          </Text>
          <Flex mt="1rem" justify="space-between">
            <Link href="https://x.com/_luchex" isExternal>
              <Img src={x} alt="link"></Img>
            </Link>
            <Link
              href="https://www.linkedin.com/in/luciano-garcia-btc"
              isExternal
            >
              <Img src={linkedin} alt="link"></Img>
            </Link>
            <Link href="https://github.com/lucianog2000" isExternal>
              <Img src={github} alt="link"></Img>
            </Link>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          justify="center"
          m={{ base: "2rem", lg: "4rem" }}
        >
          <Flex
            mb="1rem"
            boxSize="10rem"
            bgImage={robin}
            borderRadius={"100%"}
          ></Flex>
          <Heading color="white" textAlign="center">
            Luckex
          </Heading>
          <Text
            bgGradient="linear(to-b, #00FFC4, #4FFF4B)"
            bgClip="text"
            textAlign="center"
          >
            Product Owner
          </Text>
          <Flex mt="1rem" justify="space-between">
            <Link href="https://twitter.com/robinhodl69" isExternal>
              <Img src={x} alt="link"></Img>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jaramillojesuslini/"
              isExternal
            >
              <Img src={linkedin} alt="link"></Img>
            </Link>
            <Link href="https://github.com/robinhodl69" isExternal>
              <Img src={github} alt="link"></Img>
            </Link>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          justify="center"
          m={{ base: "2rem", lg: "4rem" }}
        >
          <Flex
            mb="1rem"
            boxSize="10rem"
            bgImage={ivan}
            borderRadius={"100%"}
          ></Flex>
          <Heading color="white" textAlign="center">
            Luckex
          </Heading>
          <Text
            bgGradient="linear(to-b, #00FFC4, #4FFF4B)"
            bgClip="text"
            textAlign="center"
          >
            Design Lead & Developer
          </Text>
          <Flex mt="1rem" justify="space-between">
            <Link href="https://twitter.com/IvanTerratek" isExternal>
              <Img src={x} alt="link"></Img>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ivan-avila-4b5689202/"
              isExternal
            >
              <Img src={linkedin} alt="link"></Img>
            </Link>
            <Link href="https://github.com/TerratekMusic" isExternal>
              <Img src={github} alt="link"></Img>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export { Team };
