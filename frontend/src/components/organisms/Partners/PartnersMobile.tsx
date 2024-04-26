import { Flex, Img } from "@chakra-ui/react";
import varaLogo from "../../../assets/images/Vara-Network-Logo.png";
import guardiansLogo from "../../../assets/images/Guardianlogo-blanco.png";

function PartnersMobile() {
  return (
    <Flex
      flexDirection="row"
      border="1px"
      borderColor="#00FFC4"
      p="1rem"
      justify="space-around"
      bgColor="rgba(18, 18, 18, 0.74)"
      style={{
        backdropFilter: "blur(5.4px)",
      }}
    >
      <Img opacity="50%" h="3.5rem" src={varaLogo}></Img>
      <Img opacity="50%" h="3.5rem" src={guardiansLogo}></Img>
    </Flex>
  );
}

export { PartnersMobile };
