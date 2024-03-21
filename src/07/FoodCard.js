import bank from './img/bank.png' ;
import market from './img/market.png' ;
import busan from './img/busan.png' ;

export default function FoodCard({fobj}) {
  const fimg = fobj["구분"] === "기초푸드뱅크" ? bank :
                fobj["구분"] === "기초푸드마켓" ? market : busan  
  return (
    <div className='w-11/12 flex justify-center items-center
                    p-1 border'>
      <div className='w-1/6 max-w-xl flex justify-center items-center'>
        <img src={fimg} alt={bank} className='w-full inline-flex'/>
      </div>
      <div className='w-5/6 p-3 mx-3'>
        <h1 className='text-2xl font-bold text-slate-700'>
          {fobj["사업장명"]}
        </h1>
        <h2 className='text-xl font-bold text-slate-500'>
          {fobj["운영주체명"]}
        </h2>
        <h2 className='text-sm font-bold text-slate-400'>
          {fobj["사업장 소재지"]}
        </h2>
        <div className='w-full text-sm
                       bg-slate-600 text-white mt-5 p-2'>
                        {`Tel : ${fobj["연락처(대표번호)"]} , Fax : ${fobj["팩스번호"]}`}
        </div>
      </div>
    </div>
  )
}
