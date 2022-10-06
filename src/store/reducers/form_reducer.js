import * as ACTION_TYPES from "../actions/action_types"

export const initialState = {
    user_textchange : '',
    user_text_submit: ''
}

export const FormReducer = (state, action) => {
    switch(action.type) {
        case ACTION_TYPES.USER_INPUT_CHANGE:
            return {
                ...state,
                user_textchange: action.payload
            }

        case ACTION_TYPES.USER_INPUT_SUBMIT:
            return {
                ...state,
                user_textchange:action.payload
            }

        default:
            throw new Error();
    }
}