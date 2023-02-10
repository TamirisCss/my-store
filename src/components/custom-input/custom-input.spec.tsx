import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Colors from "../../theme/theme.colors";
import CustomInput from "./custom-input.component";

describe("Custom Input", () => {
  it("Should render an error if hasError is true", () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={true} />
    );

    const input = getByPlaceholderText("Lorem Ipsum");

    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` });
  });

  it("Should not render an error if hasError is false", () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    );

    const input = getByPlaceholderText("Lorem Ipsum");
    expect(input).toHaveStyle({ border: "none" });
  });

  it("Should change input value when user is typing", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    );

    const input = getByPlaceholderText("Lorem Ipsum");

    userEvent.type(input, "Dolor Sit");
    getByDisplayValue("Dolor Sit");
  });
});
