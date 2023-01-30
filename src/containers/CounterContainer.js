import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, decreaseAsync, increase, increaseAsync } from '../modules/counter';

const CounterContainer = () => {
    //상태값 받아오기
    const number = useSelector(state=>state.counter);
    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(increaseAsync()) 
        //디스패치안에 액션들어가야함// counter파일에 increase를 리턴해준다
    }
    const onDecrease = () => {
        dispatch(decreaseAsync())
    }
    return (
        <Counter number={number} onIncrease={onIncrease}
        onDecrease={onDecrease}/>
    );
};

export default CounterContainer;