import { render, screen, fireEvent } from "@testing-library/react-native";
import GoalList from "../../src/screens/GoalList";

const sampleGoal = [
  {
    id: 1,
    name: "test my app",
  },
  {
    id: 2,
    name: "working out",
  },
];

test("Check that GoalList is rendered properly", () => {
  render(<GoalList />);
  expect(screen.getByText("add a new goal")).toBeTruthy();
});

test("Check that on press the add a new goal that the props goToFormAddGoal is called", () => {
  const mockGoToFormAddGoal = jest.fn();
  render(<GoalList goToFormAddGoal={mockGoToFormAddGoal} />);
  fireEvent.press(screen.getByText("add a new goal"));
  expect(mockGoToFormAddGoal).toHaveBeenCalled();
});

test("Check that GoalList is rendered properly with goalList props", () => {
  render(<GoalList goalList={sampleGoal} />);
  expect(screen.getByText(sampleGoal[0].name)).toBeTruthy();
  expect(screen.getByText(sampleGoal[1].name)).toBeTruthy();
});

test("Check that on press on a goal that the removeGoal props is called with the id of the goal", () => {
  const mockRemoveGoal = jest.fn();
  render(<GoalList goalList={sampleGoal} removeGoal={mockRemoveGoal} />);
  fireEvent.press(screen.getByText(sampleGoal[1].name));
  expect(mockRemoveGoal).toHaveBeenCalled();
  expect(mockRemoveGoal).toHaveBeenCalledWith(sampleGoal[1].id);
});
