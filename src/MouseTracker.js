import React from "react";
import { useMousePosition } from "./useMousePosition";

const MouseTracker = () => {
    const { x, y } = useMousePosition();

    const hasMovedCursor = typeof x === "number" && typeof y === "number";
  
    return (
      <div className="App">
      </div>
    );
};

export default MouseTracker;