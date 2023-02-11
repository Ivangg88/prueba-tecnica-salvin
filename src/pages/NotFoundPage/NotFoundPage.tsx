import { NavLink } from "react-router-dom";

const NotFoundPage = (): JSX.Element => {
  return (
    <div>
      <h1>Page not foun</h1>
      <NavLink to={"/"}>Go Home</NavLink>
    </div>
  );
};

export default NotFoundPage;
