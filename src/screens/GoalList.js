import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";

const Item = ({ title, onPress }) => (
  <View style={styles.item}>
    <Text style={styles.title} onPress={onPress}>
      {title}
    </Text>
  </View>
);
export default function GoalList({ goalList, goToFormAddGoal, removeGoal }) {
  const renderItem = ({ item }) => (
    <Item title={item.name} onPress={() => removeGoal(item.id)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => goToFormAddGoal()}
          title="add a new goal"
          color="#5dbea3"
          accessibilityLabel="add a new goal"
          style={styles.button}
        />
      </View>
      <FlatList
        data={goalList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
    padding: 10,
    backgroundColor: "#55c2da",
    margin: 15,
    borderRadius: 15,
  },
  buttonContainer: {
    margin: 15,
  },
});
