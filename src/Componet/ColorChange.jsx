import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("black");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        color: color === "black" ? "white" : "black",
      }}
    >
      <h1>🎨 My Color Changer</h1>

      <p>Choose your favorite background color:</p>

      <input
        type="color"
        value={color}
        onChange={handleColorChange}
      />

      <h3>Selected Color: {color}</h3>

      <p>Change the color using the color picker above.</p>
    </div>
  );
}

export default ColorChanger;