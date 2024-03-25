import TailInput from "../UI/TailInput";
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";
export default function RefInput() {
  const inputRef = useRef() ;
  const [bts, setBts] = useState([]) ;
  const [tags, setTags] = useState([]) ;

  const handleAdd = () => {
    if (inputRef.current.value === '') {
      alert('값을 입력하세요.') ;
      inputRef.current.focus() ;
    }
    setBts([inputRef.current.value , ...bts]) ;
  }

  useEffect(() => {
    inputRef.current.value = '' ;
    inputRef.current.focus() ;
    let tm = bts.map( (item, idx) => 
                        <TailButton caption={item}
                        key = {`bt${idx}`}
                        color="orange" />
    );
    
    setTags(tm) ;
  } , [bts]);

  const handleRemove = () => {

  }
  return (
    <div className="w-11/12 flex flex-col 
                    justify-center items-center">
      <div className="w-full flex
                      justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
        <input type="text" 
           ref={inputRef}
           className="bg-gray-50 border
                       border-gray-300
                       text-gray-900 
                       text-sm rounded-lg
                       focus:ring-blue-500
                       focus:border-blue-500 
                       block w-full p-2.5" 
                       placeholder="값입력"  />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <TailButton caption="등록"
            color="blue"
            handleClick={handleAdd} />
          <TailButton caption="취소"
            color="blue"
            handleClick={handleRemove} />
        </div>
      </div>
      <div className="w-full border p-5 bg-slate-100">
        {tags}
      </div>
    </div>
  )
}
