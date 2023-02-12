import { render } from "@testing-library/react";
import { Formik } from "formik";
import { validateLoginSchema } from "../../schemas/validateLoginSchema";
import Wrapper from "./Wrapper";

const renderWithFormik = (
  children: React.ReactElement,
  initialState = {},
  onSubmit = () => {}
) => {
  return render(
    <Wrapper>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={validateLoginSchema}
      >
        {children}
      </Formik>
    </Wrapper>
  );
};

export default renderWithFormik;
