import styled from "styled-components";

export const VideoCamStyled = styled.div`
  .video-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    position: absolute;
    padding: 10px;
    box-shadow: 0px 0px 15px #444444;
  }

  .video {
    width: 640px;
    height: 480px;
    aspect-ratio: auto 640 / 480;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(http://camaras.salvi.es:88/cgi-bin/CGIStream.cgi?cmd=GetMJStream&usr=SmartecCam002&pwd=Smartec.2021);
  }

  [draggable="true"] {
    cursor: move;
  }

  .custom-button {
    border: none;
    display: flex;
    align-items: center;
    background-color: transparent;
  }

  .custom-button:hover {
    color: blue;
  }
`;
