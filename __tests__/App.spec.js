import { render, screen, fireEvent } from "@testing-library/react-native";
import App from "../App";

test("Check that the app rendered properly and work properly", () => {
  const firstGoal = "testing my app";
  render(<App />);

  // addGoal screen
  expect(screen.getByText("add a new goal")).toBeTruthy();
  fireEvent.press(screen.getByText("add a new goal"));

  // GoalList screen
  // go back to the goal list
  expect(screen.getByText("add a goal on the list")).toBeTruthy();
  expect(screen.getByPlaceholderText("add a goal")).toBeTruthy();
  expect(screen.getByText("add")).toBeTruthy();
  expect(screen.getByText("cancel")).toBeTruthy();
  fireEvent.press(screen.getByText("cancel"));

  // addGoal screen
  // go back to add goal
  fireEvent.press(screen.getByText("add a new goal"));

  // GoalList screen
  // add a new goal
  fireEvent.changeText(screen.getByPlaceholderText("add a goal"), firstGoal);
  fireEvent.press(screen.getByText("add"));

  // addGoal screen
  // remove the goal from the list
  expect(screen.getByText(firstGoal)).toBeTruthy();
  fireEvent.press(screen.getByText(firstGoal));
  expect(screen.getByText(firstGoal)).falsy();
});
