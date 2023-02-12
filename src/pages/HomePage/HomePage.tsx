import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <h1>HomePage</h1>
      <h3>The app has 3 diferents routes, one of wich is a private route.</h3>
      <ul>
        <li key="home">
          <span>
            {" "}
            <span>'home':</span> it is the home page, where you can find a
            description."
          </span>
        </li>
        <li key="maps">
          {" "}
          <span>
            <span>'maps':</span> it is a private page which shows a map with
            diferent marks, to navigate in the maps, you need to be logeed in
            within a maximum of 30 minutes.
          </span>
        </li>
        <li key="login">
          <span>
            <span>'login':</span> it is the route to login where you can find a
            login formular.
          </span>
        </li>
      </ul>
      <p>You can navigate with the navbar on the top of the page.</p>
    </HomePageStyled>
  );
};

export default HomePage;
