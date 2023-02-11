import { Header } from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

interface LaypoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LaypoutProps) => {
  return (
    <LayoutStyled>
      <Header />
      {children}
    </LayoutStyled>
  );
};

export default Layout;
