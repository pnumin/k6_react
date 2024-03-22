import { useState, useEffect } from "react" ;
import TrafficNav from "./TrafficNav";
export default function TrafficMain() {
  const [tdata, setTdata] = useState() ;  //전체 fetch 데이터(17개배열)
  const [c1, setC1] = useState() ;        //대분류(중복제거)
  const [selC1, setSelC1] = useState() ;  //선택된 대분류

  const getDataFetch = (url) =>{
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.data))
    .catch(err => console.log(err)) ;

  }

  useEffect(()=>{
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?` ;
    url = `${url}page=1&perPage=20&` ;
    url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;

    console.log(url)

    getDataFetch(url) ;
  }, []);

  useEffect(() => {
    if (!tdata) return ;

    let tm = tdata.map(item => item.사고유형_대분류);
    tm = new Set(tm) ;
    tm = [...tm] ;
    console.log("tdata tm => ", tm)  
    
    setC1(tm) ;
 
  }, [tdata]);


  return (
    <div>
     {c1 && <TrafficNav title = "대분류"
                  category = {c1}
                  sel = {selC1}
                  setSel = {setSelC1}  />
     }
    </div>
  )
}
