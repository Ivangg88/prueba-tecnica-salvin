import { Formik } from "formik";
import LoginFormikForm from "../LoginFormikForm/LoginFormikForm";
import { useUser } from "../../hooks/useUser";
import { Userlogin } from "../../types/interfaces";
import { validateLoginSchema } from "../../schemas/validateLoginSchema";

const initialValues: Userlogin = { userName: "", password: "" };

const Login = (): JSX.Element => {
  const { loginUser } = useUser();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateLoginSchema}
      onSubmit={(values, { resetForm }) => {
        (async () => {
          if (loginUser(values)) {
            resetForm();
          }
        })();
      }}
    >
      <LoginFormikForm />
    </Formik>
  );
};

export default Login;
