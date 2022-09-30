import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stacks";

function Route() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}

export default Route;
