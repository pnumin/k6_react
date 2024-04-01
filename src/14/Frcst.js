import TailInput from "../UI/TailInput" ;
import TailSelect from "../UI/TailSelect";
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Frcst() {
  const ops = ['부산','서울'] ;
  const dRef = useRef() ;
  const sRef = useRef() ;

  const handleDate = () => {
    console.log(dRef.current.value) ;
  }

  const handleArea = () => {
    console.log(sRef.current.value) ;
  }
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
