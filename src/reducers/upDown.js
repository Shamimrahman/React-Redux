//reducers define kore how to do

const initialState =0

//first reducer
const changeNum=(state=initialState,action)=>{
    switch(action.type)
    {
        case "INCREMENT":return state +1
        case "DECREMENT": return state -1
        default: return state
    }

}

export default changeNum

//amra onk reducers korte pari kintu jkhon store korbo state tokhon rootreducers 
//store korte hobe store.js a
//index.js hoilo rootreducer jeikhn a reducer combined kore rakhbo