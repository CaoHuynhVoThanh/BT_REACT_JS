import { countState } from "../atoms/CountState";
import { useRecoilState } from "recoil";

function Decrease(){
    const [cnt, setCnt]= useRecoilState(countState);
    return(
        <div>
            <button onClick={()=>{setCnt(cnt-1)}}>Decrease</button>
        </div>
    );
}

export default Decrease;