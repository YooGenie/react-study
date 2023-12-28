// store.js
import { createStore } from "redux"; //"redux" 라이브러리에서 제공하는 createStore 함수를 가져오는 부분
import rootReducer from "./reducer";

const store = createStore(rootReducer);
// 이 부분은 createStore 함수에 rootReducer를 전달하여 Redux 스토어를 생성하는 부분입니다. 이제 store 변수에는 애플리케이션의 상태가 저장되어 있습니다.

export { store };
