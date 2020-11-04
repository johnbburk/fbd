import React, {useState} from "react"
import Arrow from "./Arrow"
import ArrowForm from "./ArrowForm"
import Grid from "./Grid"


 const App = () => {
     const [arrows, createArrow]=useState([<Arrow/>])
    return (
        <div>
            <button onClick={()=>createArrow(arrows => [...arrows, <Arrow/>])}>Add Force</button> 
            <ArrowForm arrows = {arrows} newArrow={createArrow} />
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


