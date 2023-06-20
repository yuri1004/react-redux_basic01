import { useDispatch, useSelector } from "react-redux";
import { changeNum } from "../store03";


function Cart04(){
    let state = useSelector((state)=>state)
    // console.log(state);
    let dispatch = useDispatch();

    return (
        <>
        <p>{state.num}</p>
        <p>
            <button onClick={()=>dispatch(changeNum(10))}> 10+ </button>
            <button onClick={()=>dispatch(changeNum(100))}> 100+ </button>
        </p>
        </>
    )
}

export default Cart04;