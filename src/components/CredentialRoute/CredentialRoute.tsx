import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../../app/hooks";
import auth from "../../middlewares/authentication";

interface ProtectorRoutesProps {
  children: JSX.Element;
}

const CredentialRoutes = ({ children }: ProtectorRoutesProps) => {
  const { token } = useAppSelector((state) => state.user);

  const isLogged = auth(token);

  if (!isLogged && token) {
    localStorage.removeItem("token");
    toast.info("The session has timed out.\n Please login again.");
  }

  return isLogged ? children : <Navigate to={"/login"} />;
};

export default CredentialRoutes;
