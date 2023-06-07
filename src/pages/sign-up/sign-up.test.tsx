import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../helpers/test.helpers";
import SignUpPage from "./sign-up.page";

describe("Sign Up", () => {
  it("should show error when trying to submit without filling all required fields", async () => {
    const { getByText, findByText } = renderWithRedux(<SignUpPage />, {});

    const submitButton = getByText("Create account", { selector: "button" });

    userEvent.click(submitButton);

    await findByText(/first name is required./i);
    getByText(/last name is required./i);
    getByText(/e-mail is required./i);
    getByText(/the password is required./i);
    getByText(/password confirmation is required/i);
  });

  it("should show error when filling an invalid email", async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    );

    const emailInput = getByPlaceholderText(/type your e-mail/i);

    userEvent.type(emailInput, "invalid_email");

    const submitButton = getByText("Create account", { selector: "button" });

    userEvent.click(submitButton);

    await findByText(/add a valid e-mail./i);
  });
});
