const reducer = (state={ count : 0},action)=>{

    if(action.type==="INCREMENT"){
        return {
            ...state,
            count : state.count + action.payload
        };

    }else if (action.type==="DECREMENT"){
        return {
            ...state,
            count : state.count>0 ? state.count- action.payload : state.count
        };
        
    }
    else {
        return state;
    }
};

export default reducer;