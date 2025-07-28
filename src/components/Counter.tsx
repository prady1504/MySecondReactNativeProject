import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import CustomButton from "./Button";


function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      Alert.alert("Count cannot be less than zero");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton name="+" onPress={increment} />
        <CustomButton name="-" onPress={decrement} />
      </View>
    </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 60,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});