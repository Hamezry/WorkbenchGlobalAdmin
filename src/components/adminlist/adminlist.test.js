import { fireEvent, render, screen } from "@testing-library/react";
import Adminlist from "./Adminlist";

test("add location button should prompt popover", () => {
  render(<Adminlist />);
  const addLocationBtn = screen.getByRole("button", {
    name: /Add Location/i,
  });

  //   fireEvent.click(addLocationBtn);
  expect(screen.getByTestId("add-location-popover")).toBeVisible();
});
