import styled from "styled-components";

const LoginFormikFormStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #fddc54;
  border-radius: 10%;
  width: 100%;
  min-height: 100%;

  input {
    font-family: inherit;
    font-size: inherit;
  }

  .errors {
    text-align: center;
    color: #ff3131;
    font-weight: bold;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    &__input {
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

    &__button {
      background-color: #d9b65c;
      color: white;
      padding: 10px;
      font-size: 1.2rem;
      border: none;
    }

    &__button:hover {
      background-color: #fada8b;
      border: 1px solid #d9b65c;
    }
  }
`;

export default LoginFormikFormStyled;
