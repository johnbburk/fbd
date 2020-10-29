import React, {useState} from "react"
import Circle from "./Circle"

 const App = () => {
     const [circles, createCircle]=useState([<Circle x="50" y="100"/>,
     <Circle x="50" y="100"/>])
    return (
        <div>
            <button onClick={()=>createCircle([...circles, <Circle x="70" y="100"/>])}>Add Force</button> 
      <svg
        style={{
          border: '1px solid green',
          height: '200px',
          width: '100%',
        }}
      >
          {circles.map((child) => child)}
      </svg>
      </div>
    )
  }

export default App


