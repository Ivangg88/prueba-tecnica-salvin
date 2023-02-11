import styled from "styled-components";

const LoginFormikFormStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  .input-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .errors {
    text-align: center;
    color: #ff3131;
    font-weight: bold;
    font-size: 0.7rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    &__input {
      font-size: 0.875rem;
      width: 100%;
      border: none;
      border-bottom: 2px solid black;
    }

    &__login-text {
      font-weight: bolder;
      padding: 5px;
    }

    &__login-link {
      text-decoration: none;
      color: #3070ad;
      font-weight: bolder;
    }
  }
`;

export default LoginFormikFormStyled;
