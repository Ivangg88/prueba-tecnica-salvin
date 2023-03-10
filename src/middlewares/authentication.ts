import { toast } from "react-toastify";
import { Token } from "../types/interfaces";
import { calculateMinutes } from "../utils/operationUtils/operationutils";

const auth = (token: string | null) => {
  const sessionTimeOut = 30;
  try {
    if (!token) {
      throw new Error("Private page, please login to see the page");
    }

    const user: Token = JSON.parse(token);

    return calculateMinutes(new Date(user.timeStamp)) < sessionTimeOut;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export default auth;
