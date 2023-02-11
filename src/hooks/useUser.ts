import { useCallback } from "react";
import { Token, Userlogin } from "../types/interfaces";
import { useAppDispatch } from "../app/hooks";
import { loginUserActionCreator } from "../store/userSlice";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const loginUser = useCallback(
    (user: Userlogin) => {
      try {
        if (user.password !== "test" || user.userName !== "test") {
          throw new Error("Incorrect credentials");
        }

        const tokenPayload: Token = {
          userName: user.userName,
          isLogged: true,
          timeStamp: new Date(),
        };

        const userToken = JSON.stringify(tokenPayload);
        localStorage.setItem("token", userToken);
        dispatch(loginUserActionCreator({ ...tokenPayload, token: userToken }));
        alert(`User ${user.userName} logged`);
      } catch (error: any) {
        alert(error.message);
      }
    },
    [dispatch]
  );

  return {
    loginUser,
  };
};
