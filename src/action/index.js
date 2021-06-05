//action a amra define korbo amra ki ki korbo r kivabe korbo ta 
//define korbo reducers a

export const increment=(num)=>{
    return{
        type:"INCREMENT",
        payload:num
    }
}

export const decrement=()=>{
    return{
        type:"DECREMENT"
    }
    
}

//now reducer a giye bolte hobe kivabe 2 ta action er jonno kaj korbe