import React from "react"
import Circle from "./Circle"

 const App = () => {
    return (
      <svg
        style={{
          border: '1px solid green',
          height: '200px',
          width: '100%',
        }}
      >
        <Circle />
        <Circle />
      </svg>
    )
  }

export default App


