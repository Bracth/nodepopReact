import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import LoginPage from "../LoginPage";
import { authLogin } from "../../../../store/actions";

jest.mock("../../../../store/actions");

describe("Login page", () => {
  test("snapshot", () => {
    const state = {
      ui: {
        error: null,
        isLoading: false,
      },
    };
    const store = {
      getState: () => state,
      dispatch: jest.fn(),
      subscribe: () => {},
    };
    const { container } = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
  test("should authLogin action", () => {
    authLogin.mockReturnValue("action");
    const email = "bryan@gmail.com";
    const password = "string";
    const state = {
      ui: {
        error: null,
        isLoading: false,
      },
    };

    const store = {
      getState: () => state,
      dispatch: jest.fn(),
      subscribe: () => {},
    };
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const emailInput = screen.getByLabelText(/Email/);
    const passwordInput = screen.getByLabelText(/Password/);
    const submitButton = screen.getByRole("button");
    console.log(submitButton);

    expect(submitButton).toBeDisabled();
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);
    const credentials = authLogin.mock.calls[0][0];
    expect(credentials).toMatchObject({ email, password });
    expect(store.dispatch).toHaveBeenCalledWith("action");
  });

  test("should show an error with the message", () => {
    const error = { message: "Network error" };
    const state = {
      ui: {
        error,
        isLoading: false,
      },
    };
    const store = {
      getState: () => state,
      dispatch: jest.fn(),
      subscribe: () => {},
    };
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    expect(screen.getByText(error.message)).toBeInTheDocument();
  });
  test("should show a spinner component when isLoading is true", () => {
    const state = {
      ui: {
        error: null,
        isLoading: true,
      },
    };

    const store = {
      getState: () => state,
      dispatch: jest.fn(),
      subscribe: () => {},
    };
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
