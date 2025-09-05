import { useMemo } from "react";
import { generatePalette, toString } from "../../utils/rgb";
import "./color-palette.css";

const ColorPalette = ({ colors = 9, select }) => {
  const palette = useMemo(() => generatePalette(colors), [colors]);
  return (
    <div className="palette-wrapper">
      {palette.map((color, index) => (
        <div
          className="palette-square"
          style={{ "--color": toString(color) }}
          key={index}
          onClick={() => select(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalette;
