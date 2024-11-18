"use client";


import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { decrement, increment } from '@/store/slices/counterSlices';
import { RootState } from '@/store/store';
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

export default function Counter() {

     // const [counter, setCounter] = useState(0); this previous example use state
  const count = useAppSelector((state : RootState) => state.counter.value);  //useAppSelector will pass state will be from hooks

  // state.counter.value = state is local state above // counter is from store // value is initial state from in counterSlice

   const dispatch = useAppDispatch();   //useAppDispatch() is from hooks /// dispatch to call a functions 


  function handleIncrement() {
     dispatch(increment());  // will import increment from slice
   // setCounter((prev) => prev +1);
  }


  function handleDecrement() {
    dispatch(decrement());
   //setCounter((prev) => prev -1);
  }
  // console.log(counter);

  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center ">
    <h2 className="scroll-m-20 pb-6 text-4xl font-semibold tracking-tight first:mt-0">
      Redux Counter
    </h2>
    <div className="py-4 ">
      <div className="flex items-center space-x-6 ">
        <button onClick={handleDecrement}>
          <Minus className="w-8 h-8" />
        </button>
        <p className="scroll-m-20 text-6xl font-semibold tracking-tight first:mt-0">
          {count}
        </p>
        <button onClick={handleIncrement}>
          <Plus className="w-8 h-8" />
        </button>
      </div>
    </div>
  </div>
  )
}


