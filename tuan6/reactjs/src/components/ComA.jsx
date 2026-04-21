import { countState } from "../atoms/CountState";
import { useRecoilState } from "recoil";

function Increase(){
    const [cnt, setCnt]= useRecoilState(countState);
    return(
        <div>
            <button onClick={()=>{setCnt(cnt+1)}}>Increase</button>
        </div>
    );
}

export default Increase;