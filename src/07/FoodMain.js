import fdata from './fooddata.json';
import FoodCard from './FoodCard';
import TailButton from '../UI/TailButton' ;
import { useState } from 'react';

export default function FoodMain() {
  const [cards, setCards] = useState([]) ;

  let c1 = fdata.map(item => item["운영주체 분류"]) ;
  c1 = new Set(c1) ;
  c1 = [...c1] ;
  console.log(c1)

  const handleList = (citem) => {
    console.log(citem)
    
    const tm = fdata.filter( item => item["운영주체 분류"] === citem)
                    .map(item =>
                        <FoodCard fobj={item} key={item["사업장명"]} />
                      );
    setCards(tm) ;
  }

  const c1Bts = c1.map(item => 
    <TailButton caption ={item}  
                color="blue"  
                key = {item}
                handleClick={() => handleList(item)} />
  );


  return (
    <div className='w-full h-full
                    flex flex-col justify-start items-center'>
      <div className='w-full bg-blue-50 p-5
                      mb-10
                      flex justify-center items-center'>
        {c1Bts}
      </div>
      <div className="w-full grid grid-cols-1 
                      md:grid-cols-2 
                      xl:grid-cols-3 
                      gap-2">
        {cards}
      </div>
    </div>
  )
}
