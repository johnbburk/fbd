import React, { useRef } from "react";
import { useMousePosition } from "./useMousePosition";
import styled from 'styled-components'

const ArrowBox = styled.section`
  position: absolute;
  border: 1px solid red

`;


const Arrow = (props) => {
  const { x, y } = useMousePosition();
  const ref = useRef();

  return(
  <svg ref = {ref}>
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
      x1="50"
      y1="50"
      x2={x-150-50}
      y2= {y-75-50}
      stroke="#000"
      stroke-width="1"
      marker-end="url(#arrowhead)"
    />

  </svg>
  )
  };

export default Arrow;
