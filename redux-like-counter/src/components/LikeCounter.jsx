import React, { useState } from 'react'
import { createStore } from 'redux'
import reducer from './Reducer';
import { decrementLike, incrementLike } from './Actions';
import { useDispatch, useSelector } from 'react-redux';

const Store = createStore(reducer);

const LikeCounter = () => {
   
    const dispatch = useDispatch();

    let countval = useSelector((Storedata)=>{  
        console.log(Storedata)
        return Storedata.count
        })

  return (
    <div>
        <h2> {countval} </h2>
        <button onClick={()=>{
            dispatch(
                incrementLike()
            )
        }}>Like</button>
        <button onClick={()=>{
            dispatch(
                decrementLike()
            )
        }}>Dislike</button>
    </div>
  )
}

export default LikeCounter
export { Store }