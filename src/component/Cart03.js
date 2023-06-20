import { useDispatch,useSelector } from "react-redux";
import { changeName,changeAge } from "../store02";


function Cart03(){
   let state = useSelector((state)=>state.user)
//    console.log(state)
   let dispatch = useDispatch();

   return (
    <>
    <div>  
    <p>
        {state.name}
        {/* <button onClick={()=>dispatch(changeName())}>이름바꾸기</button> */}
    </p>  
    <p>
        {state.age}
        <button onClick={()=>dispatch(changeAge())}>나이추가</button>
    </p>
    </div>
    </>
   )

}

export default Cart03;