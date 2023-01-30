//1.액션타입, 2.액션생성함수, 3.리듀서 시작1번
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//2.액션생성함수 -----액션을 리턴 (객체)
export const increase = () => ({ type: INCREASE })  
//소괄호 쓰는 이유 객체인지 함수인지 헷갈리지 않게하기 위해서 사용 (return, 중괄호 생략하고 한줄로 표현)

export const decrease = () => ({ type: DECREASE })


//thunk함수 사용   //함수를 리턴해줌  thunk는 dispatch를 직접 받을수 있음
export const increaseAsync = () => dispatch => {
    setTimeout(()=>{          //thunk는 함수를 리턴해줌
        dispatch(increase())  //dispatch를 알아서 시킬수있음
    },1000)
}
export const decreaseAsync = () => dispatch => {
    setTimeout(()=>{
        dispatch(decrease())
    },1000)
}
//초기값(상태는 객체가 아니라 그냥 숫자나 문자여도 상관이 없음)
const initialState = 0;

//3. 리듀서
export default function counter(state=initialState, action){
    switch(action.type){
        case INCREASE:
            return state+1; //리턴해주는게 상태 업데이트 그리고 다시 상태로 돌아감
        case DECREASE:
            return state-1;
        default:
            return state;        
    }
}


//리덕스 모듈 끝!!!!!!!!! 외워