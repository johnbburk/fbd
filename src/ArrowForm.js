
import React, {useState} from 'react'
import Arrow from "./Arrow"
import {ORIGIN} from "./constants"

export default function ArrowForm({arrows, newArrow}) {
    const[position, setPosition] = useState({x:0, y:0})
    return(
        <form  onSubmit={ (e) => {
            e.preventDefault();
            newArrow(arrows => [...arrows, <Arrow x2={parseInt(position.x)+parseInt(ORIGIN.x)} 
            y2={-parseInt(position.y)+parseInt(ORIGIN.y)} />])}}>
        <label>x: 
        <input type="number" value = {position.x} onChange={e=>{setPosition({...position, x: e.target.value})}}/>
        </label>
        <label>y: 
        <input type="number" value = {position.y} onChange={e=>setPosition({...position, y: e.target.value})}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
    )
}