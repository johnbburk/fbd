import {useState, useEffect} from "react"


function useMousePosition(initialValue){
  const [value, setValue] = useState(initialValue);
  return [value, setValue];

}

export default useMousePosition