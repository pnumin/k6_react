import TailButton from '../UI/TailButton' ;
export default function TrafficNav({title, category, sel, setSel}) {
  const handleBtClick = (item) => {
    setSel(item) ;
  }
  
  const bts = category.map(item => 
      <TailButton caption = {item}
                  color = "blue"
                  handleClick ={() => handleBtClick(item)} />
  );  
  
  return (
    <div>
      <div>
        교통사고 {title}
      </div>
      <div>
        {bts}
      </div>
    </div>
  )
}
