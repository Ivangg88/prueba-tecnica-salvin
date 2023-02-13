import { Token, UserLoged } from "../../types/interfaces";
import { getInitialUser } from "./initialStates";

afterEach(() => {
  localStorage.clear();
});

describe("Given a function getInitialUser", () => {
  describe("When is called and there is a stored token", () => {
    test("Then it should return the initial user with the data from localStorage with the property isLogged seted true and the property token with the token.", () => {
      const tokenPayload: Token = {
        isLogged: false,
        timeStamp: new Date().toISOString(),
        userName: "test user",
      };

      const token = JSON.stringify(tokenPayload);
      localStorage.setItem("token", token);

      const expectedUser = { ...tokenPayload, isLogged: true, token: token };

      const receivedUser = getInitialUser();

      expect(receivedUser).toEqual(expectedUser);
    });
  });

  describe("When is called and there are not a token", () => {
    test("Then it should return the initial user with the property isLogged setted false", () => {
      const expectedUser: UserLoged = {
        isLogged: false,
        timeStamp: "",
        token: "",
        userName: "",
      };

      const receivedUser = getInitialUser();

      expect(receivedUser).toEqual(expectedUser);
    });
  });
});
