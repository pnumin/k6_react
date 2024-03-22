import { useState, useEffect } from "react";

function MyClockTime() {
  const [currentTime , setCurrentTime] = useState(new Date()) ; 

  //컴포넌트 생성시 최초 1번 실행
  useEffect(() =>{
    const t = setInterval(() => {
      setCurrentTime(new Date()) ;
    } ,  1000) ; 
    console.log("[] => ",  currentTime) 

    return () => { clearInterval(t) }
  }, []) ;

  //tm변수가 바뀔때 마다 실행
  useEffect(() =>{
    console.log("[currentTime] => ",  currentTime) 
  } , [currentTime]) ;

  
  return (
    <h1 className="font-bold text-2xl">
     {currentTime &&  `현재 시각 : ${currentTime.toLocaleTimeString()}` }
    </h1>
  )
}

export default MyClockTime ;
