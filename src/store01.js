import { configureStore,createSlice } from "@reduxjs/toolkit";


let counter = createSlice({
    name:'counter',
    initialState:1,
    reducers:{
        changeCouter(state){
            return state += 1;
        }
    }
})

export let {changeCouter} = counter.actions;

let cart = createSlice({
    name:'cart',
    initialState:[
        {id:0, name:'people01'},
        {id:1, name:'people02'},
        {id:2, name:'people03'}
    ]
})



export default configureStore({
    reducer:{
        counter:counter.reducer,
        cart:cart.reducer
    }
})