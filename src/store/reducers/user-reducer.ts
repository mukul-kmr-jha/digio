import {IUserState, IUserReducerAction} from "../../interfaces/user-reducer.interface";

export const userInitialState: IUserState = {
    email: 'mukul@digio.in',
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
        default:
            return state;
    }
}

