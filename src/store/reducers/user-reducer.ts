import {IUserState, IUserReducerAction} from "../../interfaces/user-reducer.interface";
import {UserAction} from "../actions/user.action";

export const userInitialState: IUserState = {
    email: '',
    aadhaar: {
        card: '',
        isAgreed: false,
        status: {
            loading: false,
            success: false,
            failure: false,
        }
    }
}

export const userReducer = (state: IUserState, {type, payload}: IUserReducerAction) => {
    switch (type) {
        case UserAction.ADD_USER_PROPERTY: {
            return {
                ...state,
                ...payload,
            }
        }
        case UserAction.ADD_AADHAAR_PROPERTY: {
            return {
                ...state,
                aadhaar: {
                    ...state.aadhaar,
                    ...payload,
                }
            }
        }

        default:
            return state;
    }
}

