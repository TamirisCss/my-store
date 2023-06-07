import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../helpers/test.helpers";
import LoginPage from "./login.page";

describe("Login", () => {
  it("should show erros when trying to submit without filling all required fields", async () => {
    const { getByText, findByText } = renderWithRedux(<LoginPage />, {});

    const submitButton = getByText("login");

    userEvent.click(submitButton);

    await findByText(/e-mail is required./i);
    getByText(/the password is required./i);
  });
});
