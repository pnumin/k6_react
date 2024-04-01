import TailButton from "../UI/TailButton" ;
import { Link, useNavigate } from "react-router-dom";

export default function RouteNav() {
  const navigator = useNavigate() ;

  return (
    <div className="w-11/12 flex flex-col
                    justify-center items-center">
      <ul className="w-11/12 flex 
                      justify-between items-center">
        <li className="px-4 py-2 m-2 rounded-md w-1/3
                      text-center 
                      bg-slate-200">
          <Link to='/'>홈</Link>
        </li>
        <li className="px-4 py-2 m-2 rounded-md w-1/3
                      text-center 
                      bg-slate-200">
          <Link to='/p1/오렌지'>오렌지</Link>
        </li>
        <li className="px-4 py-2 m-2 rounded-md w-1/3
                      text-center 
                      bg-slate-200">
          <Link to='/p1/바나나'>바나나</Link>
        </li>
      </ul>

      <div className="w-11/12 flex 
                      justify-center items-center">
      <TailButton caption = "홈"
                  color = "blue"
                  handleClick = {()=>{navigator("/")}}/>
      <TailButton caption = "포도"
                  color = "blue"
                  handleClick = {()=>{navigator("/p2?i1=포도")}}/>  
      <TailButton caption = "사과와 바나나"
                  color = "blue"
                  handleClick = {()=>{navigator("/p2?i1=사과&i2=바나나")}}/>      
      </div>                  
    </div>
  )
}
