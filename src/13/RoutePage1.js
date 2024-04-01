import { useParams } from "react-router-dom" ;

export default function RoutePage1() {
  const item = useParams().v  ;
  return (
    <div>
      RoutePage1 : {item}
    </div>
  )
}
