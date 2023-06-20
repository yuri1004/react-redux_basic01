import { useDispatch, useSelector } from "react-redux";
import { changeCouter } from "../store01";



function Cart02(){
    let state = useSelector((state)=> state)
    // console.log(state)
    let dispatch = useDispatch();



    return (
        <div>
            <div>
                {state.counter}
                <p>
                    <button onClick={()=>dispatch(changeCouter())}>click</button>
                </p>
            </div>
            <div>
              <ul>
                {state.cart.map((item)=><li key={item.id}>
                                          <dfn> {item.name} </dfn>
                                          <span> {item.id} </span>
                                        </li>)}
              </ul>
            </div>
        </div>
    )
}

export default Cart02;