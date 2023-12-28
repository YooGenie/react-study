// reducer.js
const initialState = { // 여기는 초기 상태값을 설정한다.
  startPageState: {
    page: 1,
    startPage: "main",
    registrationNo: "",
    donorName: "유지니",
  },
};

const reducer = (state = initialState, action) => { //현재의 상태, 액션을 받아온다.
  switch (action.type) {
    case "UPDATE_PAGE_STATE": // 이 타입일때 리턴이 실행된다.
      return { // 새로운 상태로 반환한다. // 현재상태를 복사하고 payload 값으로 업데이트한 새로운 상태를 반환한다.
        ...state,
        startPageState: action.payload,
      };
    default: // 현재 상태를 그대로 반환
      return state;
  }
};

export default reducer;
