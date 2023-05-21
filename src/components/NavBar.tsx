import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

let NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
export default NavBar;
