import fdata from './fooddata.json' ;
import FoodCard from './FoodCard';
export default function FoodMain() {
  const cards = fdata.map(item =>
      <FoodCard fobj={item} key={item["사업장명"]}/>
    );

  return (
    <div  className="w-full grid grid-cols-1 
                      md:grid-cols-2 
                      xl:grid-cols-3 
                      gap-2">
      {cards}
    </div>
  )
}
