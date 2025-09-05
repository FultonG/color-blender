import { useEffect, useState } from "react";
import { avg, white, toString } from "../../utils/rgb";
import "./canvas.css";

const Canvas = ({ color: { r, g, b } }) => {
  const [currentColor, setCurrentColor] = useState(white);

  useEffect(() => {
    setCurrentColor((prev) => ({
      r: avg(prev.r, r),
      g: avg(prev.g, g),
      b: avg(prev.b, b),
    }));
  }, [r, g, b]);
  return (
    <div className="canvas-area">
      <div
        className="canvas"
        style={{ "--bg-color": toString(currentColor) }}
      ></div>
      <div>{`RGB ${toString(currentColor)}`}</div>
    </div>
  );
};

export default Canvas;
