import { useSearchParams } from "react-router-dom" ;
export default function RoutePage2() {
  const [params] = useSearchParams() ;

  console.log(params.get('i1'))
  console.log(params.get('i2'))
  return (
    <div>
      RoutePage2 : {params.get('i1')} , {params.get('i2')}
    </div>
  )
}
