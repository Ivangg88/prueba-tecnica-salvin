import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../store/userSlice";
import { Token, Userlogin } from "../types/interfaces";
import Wrapper from "../utils/testUtils/Wrapper";
import { useUser } from "./useUser";

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

afterEach(() => {
  localStorage.clear();
});

describe("Given a function loginUser", () => {
  describe("When is called with an user with userName and password 'test'", () => {
    test("Then it should store a token with the user data, dispatch an action with userForm token, call the toast with 'Welcome 'userName'', navigate to '/' and return true.", () => {
      const userLogin: Userlogin = {
        userName: "test",
        password: "test",
      };
      const successMessage = `Welcome ${userLogin.userName}`;
      const nextRoute = "/";
      const expectedReturn = true;

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      const receivedReturn = loginUser(userLogin);

      const token = localStorage.getItem("token");

      const userToDispatch = {
        ...JSON.parse(token!),
        token: localStorage.getItem("token"),
      };

      const action = loginUserActionCreator(userToDispatch);

      expect(token).not.toBeNull();
      expect(toast.success).toHaveBeenCalledWith(successMessage);
      expect(mockDispatch).toHaveBeenCalledWith(action);
      expect(mockNavigate).toHaveBeenCalledWith(nextRoute);
      expect(receivedReturn).toBe(expectedReturn);
    });
  });

  describe("When is called with a bad user", () => {
    test("Then it should call the toast with the message 'Incorrect credentials' and return false.", () => {
      const userLogin: Userlogin = {
        userName: "Incorrect user name",
        password: "Incorrect password",
      };
      const errorMessage = "Incorrect credentials";
      const expectedReturn = false;

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      const receivedReturn = loginUser(userLogin);

      expect(toast.error).toHaveBeenCalledWith(errorMessage);
      expect(receivedReturn).toBe(expectedReturn);
    });
  });
});

describe("Given a function logoutUser", () => {
  describe("When is called", () => {
    test("Then it should remove the token from localStorage, call the dispatch with an logOut action and the toast.success with the message 'Logged out.'", async () => {
      const successmessage = "Logged out.";
      const action = logoutUserActionCreator();
      localStorage.setItem("token", "testToken");

      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      await logoutUser();

      const localStorageResponse = localStorage.getItem("token");

      expect(localStorageResponse).toBeNull();
      expect(mockDispatch).toHaveBeenCalledWith(action);
      expect(toast.success).toHaveBeenCalledWith(successmessage);
    });
  });
});
