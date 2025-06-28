import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function thirdScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>thirdScreen</Text>
      <Button
        title="Press to navigate"
        onPress={() => router.push("/secondScreen")}
      />
    </View>
  );
}
