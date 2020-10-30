import React, {useState} from "react"
import Arrow from "./Arrow"
import Grid from "./Grid"

 const App = () => {
     const [circles, createCircle]=useState([<Arrow x="50" y="100"/>,
     <Arrow x="50" y="100"/>])
    return (
        <div>
            <button onClick={()=>createCircle([...circles, <Arrow x="50" y="100"/>])}>Add Force</button> 
      <svg
        style={{
          border: '1px solid green',
          height: '200px',
          width: '100%',
        }}
      >
          <Grid/>
          {circles.map((child) => child)}
      </svg>
      </div>
    )
  }

export default App


