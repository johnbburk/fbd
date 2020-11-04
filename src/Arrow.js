import React from "react"
import {useState, useRef} from "react"
import {useSvgDnD} from "./useSVGDnD"

 const Arrow = (props) => {
    const [position, setPosition] = useState({x: props.x2, y: props.y2, coords: {}})
    const [handleMouseDown, handleMouseUp] = useSvgDnD(position, setPosition)

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
        x1={props.x}
        y1={props.y}
        x2={position.x}
        y2={position.y}
        stroke="#000"
        strokeWidth="1"
        markerEnd="url(#arrowhead)"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <circle
        cx={position.x}
        cy={position.y}
        r={25}
        fillOpacity="0"
        strokeOpacity="0"
        fill="black"
        stroke="black"
        strokeWidth="1"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      </svg>
    )
  }

  Arrow.defaultProps={
    x: 100,
    y: 100,
    x2: 200,
    y2: 150
  }

  export default Arrow