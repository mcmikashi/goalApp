import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const AddGoal = ({ addANewGoal, back }) => {
  const [goal, setGoal] = useState("");
  return (
    <View>
      <Text style={styles.title}>add a goal on the list</Text>
      <TextInput
        value={goal}
        onChangeText={setGoal}
        placeholder="add a goal"
        style={styles.textInput}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={back}
          title="cancel"
          color="#dd7973"
          accessibilityLabel="go back the list goal"
        />
        <Button
          onPress={() => addANewGoal(goal)}
          title="add"
          color="#4681f4"
          accessibilityLabel="add the new goal"
        />
      </View>
    </View>
  );
};

export default AddGoal;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "800",
  },
  textInput: {
    height: 35,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.75,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },
});
