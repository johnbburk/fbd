import React, {useState} from "react"
import Arrow from "./Arrow"
import Grid from "./Grid"


 const App = () => {
     const [arrows, createArrow]=useState([<Arrow x="75" y="100"/>])
    return (
        <div>
            <button onClick={()=>createArrow([...arrows, <Arrow x="75" y="100"/>])}>Add Force</button> 
      <svg
        style={{
          border: '1px solid green',
          height: '200px',
          width: '100%',
        }}
      >
          <Grid/>
          {arrows.map((child) => child)}
      </svg>
      </div>
    )
  }

export default App


