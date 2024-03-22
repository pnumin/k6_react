import bank from './img/bank.png';
import market from './img/market.png';
import busan from './img/busan.png';
import { useState } from 'react';

export default function FoodCard({ fobj }) {
  const [isClick, setIsClick] = useState(false);

  const fimg = fobj["구분"] === "기초푸드뱅크" ? bank :
    fobj["구분"] === "기초푸드마켓" ? market : busan;


  const handleIsClick = () => {
    setIsClick(!isClick);
  }
  return (
    <div className='w-11/12 flex justify-center items-center
                    p-1 border'
      onClick={handleIsClick}>
      <div className='w-1/6 flex justify-center items-center'>
        <img src={fimg} alt={bank} className='w-full' />
      </div>
      <div className='w-5/6 h-40 p-3 mx-3
                      flex flex-col justify-between items-start'>
        <div className='w-full'>
          <h1 className='text-2xl font-bold text-slate-700'>
            {fobj["사업장명"]}
          </h1>
          <h2 className='text-xl font-bold text-slate-500'>
            {fobj["운영주체명"]}
          </h2>
          <h2 className='w-full text-sm 
                       font-bold text-slate-400 truncate'>
            {fobj["사업장 소재지"]}
          </h2>
        </div>
        <div className='w-full h-8 text-sm truncate
                       bg-slate-600 text-white p-1'>
          {isClick && `Tel : ${fobj["연락처(대표번호)"]} , Fax : ${fobj["팩스번호"]}`}
        </div>
      </div>
    </div>
  )
}
