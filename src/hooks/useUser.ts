import { useCallback } from "react";
import { Token, Userlogin } from "../types/interfaces";
import { useAppDispatch } from "../app/hooks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
        toast.success(`Welcome ${user.userName}`);
        navigate("/");
        return true;
      } catch (error: any) {
        toast.error(error.message);
        return false;
      }
    },
    [dispatch, navigate]
  );

  const logoutUser = useCallback(async () => {
    try {
      await localStorage.removeItem("token");
      dispatch(logoutUserActionCreator());
      toast.success("Logged out.");
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [dispatch]);

  return {
    loginUser,
    logoutUser,
  };
};
