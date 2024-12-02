import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{ title: "WHOOPS!! Could Not find anything there" }}
      />
      <View style={styles.container}>
        <Link href="/">Go To Home Screen</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
