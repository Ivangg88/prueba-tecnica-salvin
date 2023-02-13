import auth from "../../middlewares/authentication";
import { Token, UserLoged } from "../../types/interfaces";

export const getInitialUser = (): UserLoged => {
  const token = localStorage.getItem("token");

  if (token) {
    const user: Token = JSON.parse(token!);

    const userLoged: UserLoged = {
      userName: user.userName,
      isLogged: auth(token)!,
      timeStamp: new Date().toISOString(),
      token: token,
    };

    return userLoged;
  }
  return {
    isLogged: false,
    timeStamp: "",
    userName: "",
    token: "",
  };
};

export const initialLoggedUser = getInitialUser();
