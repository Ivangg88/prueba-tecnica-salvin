import { toast } from "react-toastify";
import { Token } from "../types/interfaces";
import auth from "./authentication";

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given a function auth", () => {
  const loginDate = new Date();
  describe("When is called with a valid token wich was created less than 30 minutes before", () => {
    test("Then it should return true", () => {
      const tokenPayload: Token = {
        isLogged: false,
        timeStamp: loginDate.toISOString(),
        userName: "test user",
      };
      const token = JSON.stringify(tokenPayload);

      expect(auth(token)).toBe(true);
    });
  });

  describe("When is called with a valid token wich was created more then 30 minutes before", () => {
    test("Then it should return false", () => {
      loginDate.setMinutes(loginDate.getMinutes() + 31);
      const tokenPayload: Token = {
        isLogged: false,
        timeStamp: loginDate.toISOString(),
        userName: "test user",
      };
      const token = JSON.stringify(tokenPayload);

      expect(auth(token)).toBe(false);
    });
  });

  describe("When is called with null", () => {
    test("Then it should throw an error and call the toast with the error message", () => {
      const errorMessage = "Private page, please login to see the page";

      const token = null;

      auth(token);

      expect(toast.error).toHaveBeenCalledWith(errorMessage);
    });
  });
});
