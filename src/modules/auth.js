import { createAction, handleActions } from "redux-actions";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

export const changeField = createAction(
    CHANGE_FIELD,
    ({ type, key, value }) => ({
        type,
        key,
        value,
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, (type) => type);
const initialState = {
    register: {
        username: "",
        password: "",
        passwordConfirm: "",
    },
    login: {
        username: "",
        password: "",
    },
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { type, key, value } }) => ({
            ...state,
            [type]: {
                ...state[type],
                [key]: value,
            },
        }),
        [INITIALIZE_FORM]: (state, { payload: type }) => ({
            ...state,
            [type]: initialState[type],
        }),
    },
    initialState
);

export default auth;
