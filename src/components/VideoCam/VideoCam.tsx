import { useState } from "react";
import { AiFillCloseCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { VideoCamStyled } from "./VideoCamStyled";

export const VideoCam = () => {
  const [showVideo, setShowVideo] = useState(false);

  const [position, setPosition] = useState({ x: 50, y: 50 });

  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const startX = event.clientX - position.x;
    const startY = event.clientY - position.y;
    setOrigin({ x: startX, y: startY });
  };
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("display", "none");
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    const x = event.clientX - origin.x;
    const y = event.clientY - origin.y;
    event.currentTarget.style.setProperty("display", "flex");
    console.log(x, y);
    setPosition({ x, y });
  };

  return (
    <VideoCamStyled>
      {!showVideo && (
        <button
          className="custom-button"
          onClick={() => setShowVideo(!showVideo)}
        >
          <AiOutlineVideoCamera />{" "}
        </button>
      )}
      {showVideo && (
        <div
          className="video-container"
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          draggable={true}
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <button
            className="custom-button"
            onClick={() => setShowVideo(!showVideo)}
          >
            <AiFillCloseCircle />
          </button>
          <div className="video"></div>
        </div>
      )}
    </VideoCamStyled>
  );
};
