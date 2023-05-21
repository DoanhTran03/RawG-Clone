import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme={"green"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};
