import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { useUser } from "../../hooks/useUser";
import HeaderStyled from "./HeaderStyled";

export const Header = () => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

  return (
    <HeaderStyled>
      <div className="header__navbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/maps">Maps</NavLink>
        {isLogged ? (
          <NavLink onClick={logoutUser} to="/home">
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      <span>SalviMaps</span>
    </HeaderStyled>
  );
};
