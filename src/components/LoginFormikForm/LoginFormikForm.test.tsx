import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Userlogin } from "../../types/interfaces";
import renderWithFormik from "../../utils/testUtils/renderWithFormik";
import LoginFormikForm from "./LoginFormikForm";

describe("Given a LoginFormikForm component", () => {
  const initialValues: Userlogin = {
    password: "",
    userName: "",
  };
  describe("When it's instantiated", () => {
    test("Then it should show 2 inputs and the login button", () => {
      const placeholderUser = "username";
      const placeHolderPassword = "********";
      const buttonText = "Login";

      renderWithFormik(<LoginFormikForm />, initialValues);

      const inputUser = screen.getByPlaceholderText(placeholderUser);
      const inputPassword = screen.getByPlaceholderText(placeHolderPassword);
      const button = screen.getByRole("button");

      expect(inputUser).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toHaveTextContent(buttonText);
    });

    test("Then it should update the input value with the typed data from user.", async () => {
      const userName = "test";
      const userPassword = "test";

      const placeholderUser = "username";
      const placeHolderPassword = "********";

      renderWithFormik(<LoginFormikForm />, initialValues);

      const inputUser: HTMLInputElement =
        screen.getByPlaceholderText(placeholderUser);
      const inputPassword: HTMLInputElement =
        screen.getByPlaceholderText(placeHolderPassword);

      await userEvent.type(inputUser, userName);
      await userEvent.type(inputPassword, userPassword);

      expect(inputUser.value).toBe(userName);
      expect(inputPassword.value).toBe(userPassword);
    });
  });
});
