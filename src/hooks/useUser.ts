import { useCallback } from "react";
import { Token, Userlogin } from "../types/interfaces";
import { useAppDispatch } from "../app/hooks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginUser = useCallback(
    (user: Userlogin) => {
      try {
        if (user.password !== "test" || user.userName !== "test") {
          throw new Error("Incorrect credentials");
        }

        const tokenPayload: Token = {
          userName: user.userName,
          isLogged: true,
          timeStamp: new Date().toISOString(),
        };

        const userToken = JSON.stringify(tokenPayload);

        localStorage.setItem("token", userToken);
        dispatch(loginUserActionCreator({ ...tokenPayload, token: userToken }));
        alert(`User ${user.userName} logged`);
        navigate("/");
        return true;
      } catch (error: any) {
        alert(error.message);
        return false;
      }
    },
    [dispatch, navigate]
  );

  const logoutUser = useCallback(async () => {
    await localStorage.removeItem("token");
    dispatch(logoutUserActionCreator());
  }, [dispatch]);

  return {
    loginUser,
    logoutUser,
  };
};
