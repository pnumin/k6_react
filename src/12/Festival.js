import { useState, useEffect, useRef } from "react";
export default function Festival() {
  //부산축제 전체 데이터
  const [tdata, setTdata] = useState();
  const [guname, setGuname] = useState();
  const [opTags, setOpTags] = useState();

  //select 값
  const selRef = useRef();

  //select 선택
  const handleSelGu = () => {
    console.log(selRef.current.value)
  }

  //실제 fetch
  const getData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.getFestivalKr.item))
      .catch(err => console.log(err))
  }

  //부산축제 데이터 fetch
  useEffect(() => {
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&pageNo=1&numOfRows=40&resultType=json`;

    getData(url);
  }, []);

  // 구정보 만들기
  useEffect(() => {
    if (!tdata) return;

    let tm = tdata.map(item => item.GUGUN_NM)
    tm = new Set(tm);
    tm = [...tm].sort();
    setGuname(tm);

  }, [tdata]);

  //구 데이터
  useEffect(() => {
    if (!guname) return;
    console.log(guname)
    let tm = guname.map(item => 
      <option value={item} key={item}>
        {item}
      </option>
    );
    setOpTags(tm) ;
  }, [guname]);


  return (
    <div className="w-full h-full flex flex-col
                    justify-start items-center">
      <form className="w-3/5 mx-auto flex
                      mt-10
                      justify-center items-center">
        <label htmlFor="gu" 
                className="w-1/3 block mb-2 text-lg 
                          font-bold text-gray-900">부산축제 정보 선택</label>
        <select id="gu" 
                onChange={handleSelGu}
                ref = {selRef}
                className="w-2/3 bg-gray-50 border
                           border-gray-300 text-gray-900 text-sm 
                           rounded-lg
                            focus:ring-blue-500 focus:border-blue-500 
                            block p-2.5">
          <option defaultValue>---구선택---</option>
          {opTags}
        </select>
      </form>
    </div>
  )
}
