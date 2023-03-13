import { useState } from "react";
import { AiFillCloseCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { VideoCamStyled } from "./VideoCamStyled";

export const VideoCam = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <VideoCamStyled>
      {!showVideo && (
        <button
          className="custom-button"
          onClick={() => setShowVideo(!showVideo)}
        >
          <AiOutlineVideoCamera className="icon" />{" "}
        </button>
      )}
      {showVideo && (
        <div
          // onDragEnd={(event) => {
          //   console.log("Bottom", event.currentTarget.getBoundingClientRect());
          //   console.log("Native element", event.nativeEvent);

          //   event.currentTarget.style.setProperty(
          //     "left",
          //     (event.nativeEvent.x + event.currentTarget.x).toString() + "px"
          //   );
          //   event.currentTarget.style.setProperty(
          //     "left",
          //     (event.nativeEvent.y + 20).toString() + "px"
          //   );
          // }}
          //draggable={true}
          className="video-container"
        >
          <button
            className="custom-button"
            onClick={() => setShowVideo(!showVideo)}
          >
            <AiFillCloseCircle className="icon" />
          </button>
          <div className="video"></div>
        </div>
      )}
    </VideoCamStyled>
  );
};
