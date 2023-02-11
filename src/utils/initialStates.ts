import { UserLoged } from "../types/interfaces";

export const initialLoggedUser: UserLoged = {
  isLogged: false,
  token: "",
  userName: "",
  timeStamp: new Date("1980-01-01"),
};
