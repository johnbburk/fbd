import React from "react"
import {useState, useRef} from "react"
import {useSvgDnD} from "./useSVGDnD"

 const Circle = () => {
    const [position, setPosition] = useState({x: 50, y: 50, coords: {}})
    const [handleMouseDown, handleMouseUp] = useSvgDnD(position, setPosition)

    //const [position, setPosition] = useState({x: 50, y: 50, coords: {}})
  
  
    return (
      <svg>
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <line
        x1="200"
        y1="100"
        x2={position.x}
        y2={position.y}
        stroke="#000"
        stroke-width="1"
        marker-end="url(#arrowhead)"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <circle
        cx={position.x}
        cy={position.y}
        r={25}
        fill-opacity="0"
        stroke-opacity="0"
        fill="black"
        stroke="black"
        strokeWidth="1"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      </svg>
    )
  }

  export default Circle