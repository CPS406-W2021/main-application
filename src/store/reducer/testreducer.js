import { INIT_STATE } from "./index.js";
const testReducer = (state = INIT_STATE, action) => {
    if (action.type === "DO_TEST") {
        console.log("got action", action.t);
    }
    return state;
};
export default testReducer;
