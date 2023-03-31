import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MapsPage from "../../pages/MapsPage/MapsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CredentialRoutes from "../CredentialRoute/CredentialRoute";
import Layout from "../Layout/Layout";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <>
      <ToastContainer
        bodyClassName="toast-body"
        toastClassName="toast"
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {isLogged ? (
            <Route path="/login" element={<LoginPage />} />
          ) : (
            <Navigate to={"/login"} />
          )}

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
