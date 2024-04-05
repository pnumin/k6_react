import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import TailSelect from "../UI/TailSelect";
import getcode from "./getcode.json" ;

export default function VilageFcst() {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const gubun = '단기예보';

  //select 박스 옵션
  const ops = getcode.filter(item => item["예보구분"] === gubun ) 
                      .map(item => `${item["항목명"]} (${item["항목값"]})`)
  ;
  const itemRef = useRef()

  //fetch data state 변수로 저장
  const [tdata, setTdata] = useState([]);

  //화면에 표시되는 테이블 tr저장
  const [trtags, setTrtags] = useState([]);

  //select 박스 선택값
  const [selitemName, setSelItemName] = useState();
  const [selitem, setSelItem] = useState();


  //select 박스 항목 선택
  const handleItem = () =>{
    if (itemRef.current.value === '') {
      alert('항목을 선택하세요.');
      itemRef.current.focus();
      setTrtags([])
      return;
    }
    console.log(itemRef.current.value)
    setSelItemName(itemRef.current.value.split(' (')[0]);
    setSelItem(itemRef.current.value.split(' (')[1].replace(')',''));
  }

  //fetch 함수
  const getData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data.response.body.items.item);
  }

  //데이터가져오기
  useEffect(() => {
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;

    // console.log(url)
    //fetch 함수
    getData(url);
  }, []);

  //tdata가 저장되었을때 
  useEffect(() => {
    console.log(selitem)
    let tm = tdata.filter(item => item["category"] ===selitem )
            .map(item =>
            <tr key={item.fcstDate + item.fcstTime}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {selitemName}
              </td>
              <td className="px-6 py-2">
                {`${item.fcstDate.substr(0, 4)}-${item.fcstDate.substr(4, 2)}-${item.fcstDate.substr(6, 2)}`}
              </td>
              <td className="px-6 py-2">
                {`${item.fcstTime.substr(0, 2)}:${item.fcstTime.substr(2, 2)}`}
              </td>
              <td className="px-6 py-2">
                {item.fcstValue}
              </td>
            </tr>
    );
    setTrtags(tm);
  }, [selitem]);

  return (
    <div className='w-full h-full flex flex-col
                    justify-start items-center'>

      <div className="w-11/12 justify-start 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <div className="text-lg font-bold p-4">
          {`${area} ${gubun} (${dt.substring(0, 4)}-${dt.substring(4, 6)}-${dt.substring(6, 8)})일자`}
        </div>
        <div className="p-4">
        <TailSelect ops = {ops}
                    opDefault = "---항목선택---"
                    selRef = {itemRef}
                    handleSel = {handleItem} />
        </div>
      </div>
      <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-1">
              항목명
            </th>
            <th scope="col" className="px-6 py-1">
              예측일자
            </th>
            <th scope="col" className="px-6 py-3">
              예측시간
            </th>
            <th scope="col" className="px-6 py-3">
              예측값
            </th>
          </tr>
        </thead>
        <tbody>
        {trtags}
        </tbody>
      </table>
    </div>
  )
}
