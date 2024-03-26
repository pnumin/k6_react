import TailButton from "../UI/TailButton" ;
import TailInput from "../UI/TailInput"; 
import { useRef } from "react";
export default function GalleryMain() {
  const keyword = useRef() ; 

  const handleKeyword = () => { 
  }

  const handleFetch = () => {
    let w = encodeURI(keyword.current.value) ;
    console.log(w) ;

    /*
    https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json
    */
  }

  const handleClear = () => {
    console.log(keyword.current.value) ;
  }

  return (
    <div className="w-11/12 flex flex-col 
                    mt-5
                    h-full justify-start items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 
                      bg-slate-200
                      p-2
                      gap-4">
        <div className="p-2">
            <TailInput type ="text"
                        inputRef  = {keyword}
                        ph ="키워드 입력"/>
        </div>
        <div className="px-3">
            <TailButton caption = "조회"
                        color = "blue"
                        handleClick = {handleFetch}/>
        </div>
        <div className="px-3">
            <TailButton caption = "취소"
                        color = "blue"
                        handleClick = {handleClear}/>
        </div>
      </div>
    </div>
  )
}
