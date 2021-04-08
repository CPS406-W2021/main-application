const initState = {
    lang: "en",
};

const langReducer = (state = initState, action) => {
    switch (action.type) {
        case "LANG_EN":
            return {
                ...state,
                lang: "en",
            };
        case "LANG_FR":
            return {
                ...state,
                lang: "fr",
            };
        default:
            return state;
    }
};

export default langReducer;
