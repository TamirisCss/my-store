import { render } from "@testing-library/react";
import Loading from "./loading.component";

describe("Loading", () => {
  it("Should show a message if there is loading", () => {
    const { getByText } = render(<Loading message="loading..." />);

    getByText("loading...");
  });
});
