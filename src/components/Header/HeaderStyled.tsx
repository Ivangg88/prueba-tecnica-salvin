import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  background-color: #58575b;
  color: #fddb3f;
  box-shadow: 5px 0px 10px #fddb3f;
  font-size: 1.5rem;

  .header {
    &__navbar {
      display: flex;
      gap: 15px;
    }
  }
  a {
    all: unset;
    cursor: pointer;
    color: #fddb3f;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default HeaderStyled;
