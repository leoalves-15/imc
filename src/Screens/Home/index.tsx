import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Routes/stacks/stacks.types";

const HomeScreen = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default HomeScreen;
