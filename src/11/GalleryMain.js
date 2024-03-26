import TailButton from "../UI/TailButton" ;
import TailInput from "../UI/TailInput"; 
import GalleryCard from "./GalleryCard";
import { useRef, useState, useEffect } from "react";
export default function GalleryMain() {
  const keyword = useRef() ; 
  const [tdata , setTdata] = useState() ;
  const [tags , setTags] = useState() ;

  useEffect(() => {
    if (!tdata) return ;

    let tm = tdata.map((item) => 
      <GalleryCard key = {item.galContentId}
                   imgUrl = {item.galWebImageUrl.replace('http://', 'https://')} 
                   title = {item.galTitle}
                   ptitle = {item.galPhotographyLocation}
                   ktag = {item.galSearchKeyword} />
    ) ;

    setTags(tm) ;
  }, [tdata]);

  const getData = (w) => { 
    console.log(w) ;
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?` ;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}` ;
    url = url +  `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = url + `&keyword=${w}&_type=json` ;
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.response.body.items.item))
    .catch(err => console.log(err)) ;
  }

  const handleFetch = () => {
    if (keyword.current.value === '') {
      alert('키워드를 입력하세요.');
      keyword.current.focus() ;
      return;
    }

    handleClear();
    let w = encodeURI(keyword.current.value) ;
    getData(w) ;

  }

  const handleClear = () => {
    setTdata('') ;
    setTags('') ; 
    keyword.current.focus() ;
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                      p-2
                      gap-2">
        {tags}
      </div>
    </div>
  )
}
