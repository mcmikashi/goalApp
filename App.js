import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import AddGoal from "./src/screens/AddGoal";
import GoalList from "./src/screens/GoalList";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const isAddingToggle = () => {
    setIsAdding(!isAdding);
  };
  const addGoal = (newGoal) => {
    setGoalList([...goalList, { id: uuidv4(), name: newGoal }]);
    isAddingToggle();
  };
  const removeGoal = (goalId) => {
    let filteredGoalList = goalList.filter((goal) => goal.id !== goalId);
    setGoalList([...filteredGoalList]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isAdding ? (
        <AddGoal addANewGoal={addGoal} back={isAddingToggle} />
      ) : (
        <GoalList
          goalList={goalList}
          goToFormAddGoal={isAddingToggle}
          removeGoal={removeGoal}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
