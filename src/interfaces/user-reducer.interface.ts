import React from "react";

export interface IUserState {
    email: string;
    aadhaar: {
        card: string; // card might start with 0s
        isAgreed: boolean;
        status: {
            loading: boolean;
            success: boolean;
            failure: boolean;
        }
    }
}

export interface IUserReducerAction {
    type: string;
    payload: any;
}

export interface IStore {
    state: IUserState;
    dispatch: React.Dispatch<IUserReducerAction>;
}

export type IAppContextType  =  IStore | null;
