import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  toast.info("Page not found, please use the links over");
  return (
    <NotFoundPageStyled>
      <h1>Page not found</h1>
      <NavLink to={"/"}>Go Home</NavLink>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
