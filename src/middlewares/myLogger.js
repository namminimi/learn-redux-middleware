const myLogger = store => next => action => {  //함수 => 리턴  => 리턴
    //액션 출력하기
    //console.log(action);
    //다음 미들웨어 (또는 리듀서) 에게 액션을 전달
    const result = next(action);  
    //next를 안해주면 리듀서호출 불가 
    // 리듀서로 전달하는 중간에 코드를 가로채는게 미들웨어 (src/index.js 스토어 확인 할 것.)
    //업데이트 이후의 상태를 출력
    //console.log(store.getState());
    //여기에서 반환하는 result값은 dispatch(action)의 결과물
    return result;
}
export default myLogger;