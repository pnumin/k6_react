import TailInput from "../UI/TailInput" ;
import TailSelect from "../UI/TailSelect";
import TailButton from "../UI/TailButton";
import getxy from "./getxy.json" ;

import { useState, useEffect, useRef } from "react";

export default function Frcst() {
  const ops = getxy.map(item => item['1단계']) ;

  const [x, setX] = useState();
  const [y, setY] = useState();

  const dRef = useRef() ;
  const sRef = useRef() ;

  const handleDate = () => {
    console.log(dRef.current.value) ;
  }

  const handleArea = () => {
    let tm = getxy.filter(item => item['1단계'] === sRef.current.value) ;
    setX(tm[0]["격자 X"]) ;
    setY(tm[0]["격자 Y"]) ;
  }

  useEffect(() => {
    console.log(x, y)
  } , [x, y]) ;
  return (
    <div className="w-11/12 justify-start 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
      <div>
        <TailInput type = "date"
                   inputRef = {dRef}
                   ph ="날짜선택"
                   handleChange ={handleDate}/>
      </div>
      <div>
        <TailSelect ops = {ops}
                    opDefault = "---지역선택---"
                    selRef = {sRef}
                    handleSel = {handleArea} />
      </div>
      <div>
      <TailButton caption = "초단기예보"
                  color = "blue"/> 
      </div>
      <div>
      <TailButton caption = "단기예보"
                  color = "blue"/> 
      </div>
    </div>
  )
}
