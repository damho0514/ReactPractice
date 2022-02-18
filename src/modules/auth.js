import { createAction, handleActions } from "redux-actions";
import createPromiseThunk from "../lib/api/createPromiseThunk";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const REGISTER = "auth/REGISTER"; //외원가입
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS"; //로그인 실패
const LOGIN = "auth/LOGIN"; //로그인
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"; //로그인 실패

export const changeField = createAction(
    CHANGE_FIELD,
    ({ type, key, value }) => ({
        type,
        key,
        value,
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, (type) => type);
export const register = createPromiseThunk(REGISTER, authAPI.register);
export const login = createPromiseThunk(LOGIN, authAPI.login);

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
    authorizeation: null,
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
    // [REGISTER_SUCCESS]: (state, {payload: type} => ({
    //     ...state,
    //     authorizeation: payload.data
    // }))
    initialState
);

export default auth;
