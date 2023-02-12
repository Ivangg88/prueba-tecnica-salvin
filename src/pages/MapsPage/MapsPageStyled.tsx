import styled from "styled-components";

const MapsPageStyled = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: #c6cbce;

  .leaflet-container {
    width: 200px;
    height: 200px;
    min-width: 100%;
    min-height: 100%;
  }
`;

export default MapsPageStyled;
