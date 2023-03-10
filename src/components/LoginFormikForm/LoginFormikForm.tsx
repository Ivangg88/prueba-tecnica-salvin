import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import LoginFormikFormStyled from "./LoginFormikFormStyled";

const LoginFormikForm = (): JSX.Element => {
  const { isValid } = useFormikContext();

  return (
    <LoginFormikFormStyled>
      <Form
        noValidate
        autoComplete="off"
        className="form-container"
        data-testid="loginForm"
      >
        <h1 className="form-container__login-text">Login</h1>

        <div className="form-container__input-field">
          <Field
            className="form-container__input"
            label="Username"
            name="userName"
            placeholder="username"
            type="text"
          />
          <ErrorMessage name="userName">
            {(msg) => (
              <span data-testid="errorMessage" className="errors">
                {msg}
              </span>
            )}
          </ErrorMessage>
        </div>

        <div className="form-container__input-field">
          <Field
            className="form-container__input"
            label="Password"
            name="password"
            placeholder="********"
            type="password"
          />
          <ErrorMessage name="password">
            {(msg) => (
              <span data-testid="errorMessage" className="errors">
                {msg}
              </span>
            )}
          </ErrorMessage>
        </div>
        <button
          className="form-container__button"
          type="submit"
          disabled={!isValid}
        >
          Login
        </button>
      </Form>
    </LoginFormikFormStyled>
  );
};
export default LoginFormikForm;
