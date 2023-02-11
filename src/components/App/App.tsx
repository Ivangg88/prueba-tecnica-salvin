import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MapsPage from "../../pages/MapsPage/MapsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CredentialRoutes from "../CredentialRoute/CredentialRoute";
import { Header } from "../Header/Header";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/maps"
            element={
              <CredentialRoutes>
                <MapsPage />
              </CredentialRoutes>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
