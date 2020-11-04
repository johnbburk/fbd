import React, {useState} from "react";
import Arrow from "./Arrow"

export default function ArrowForm({newArrow, arrows}) {
    const[position, setPosition] = useState({x:1, y:0})
    return(
        <div>
        <label>x: 
        <input type="number" value = {position.x} onChange={e=>setPosition(e.target.value)}/>
        </label>
        <label>y: 
        <input type="number" value = {position.y} onChange={e=>setPosition(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" onClick= {()=>newArrow([...arrows, <Arrow x={position.x} y={position.y}/>])} />
        </div>
    )
}