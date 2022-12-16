import { render, screen, fireEvent } from "@testing-library/react-native";
import AddGoal from "../../src/screens/AddGoal";

test("Check that addGoal is rendered properly", () => {
  render(<AddGoal />);
  expect(screen.getByText("add a goal on the list")).toBeTruthy();
  expect(screen.getByPlaceholderText("add a goal")).toBeTruthy();
  expect(screen.getByText("add")).toBeTruthy();
  expect(screen.getByText("cancel")).toBeTruthy();
});

test("Check that cancel button on press use the back props function", () => {
  const mockBack = jest.fn();
  render(<AddGoal back={mockBack} />);
  fireEvent.press(screen.getByText("cancel"));
  expect(mockBack).toHaveBeenCalled();
});

test("Check that add button on press use the addANewGoal and send the current value of the text input", () => {
  const mockAddANewGoal = jest.fn();
  const textToSend = "texting my new app";
  render(<AddGoal addANewGoal={mockAddANewGoal} />);
  const inputText = screen.getByPlaceholderText("add a goal");
  fireEvent.changeText(inputText, textToSend);
  fireEvent.press(screen.getByText("add"));
  expect(mockAddANewGoal).toHaveBeenCalled();
  expect(mockAddANewGoal).toHaveBeenCalledWith(textToSend);
});
