import { Redirect } from "react-router-dom";

const INIT_STATE = { entered: false };
const surveyReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SURVEY_REGISTRATION_SUCCESSFUL":
            return {
                ...state,
                entered: true,
            };
        default:
            return {
                ...state,
                entered: false,
            };
    }
};

export default surveyReducer;
