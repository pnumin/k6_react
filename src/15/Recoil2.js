import Recoil3 from "./Recoil3"
import { useRecoilValue } from "recoil" ;
import { rcnt2 } from "./RecoilAtom";

export default function Recoil2( ) {
  const cnt2 = useRecoilValue(rcnt2) ;
  return (
    <div className="w-full flex flex-col
                          text-2xl font-bold
                          justify-center items-center">
      Recoil2 : {cnt2}
      <Recoil3 />
    </div>
  )
}
