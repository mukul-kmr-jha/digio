import {useContext, useState} from "react";
import {AppContext} from "../../../../contexts/app.context";
import {IStore} from "../../../../interfaces/user-reducer.interface";
import './index.scss';

export const LoginStepComponent = () => {
    const { state, dispatch } = useContext(AppContext) as IStore;

    const [email, setEmail] = useState(state.email);

    return (
        <div className='login-component'>
            <div className="content">
                <div className='header'>
                    <span className='header-label'>
                        <span>Sign document using</span>
                        <p>{email}</p>
                    </span>
                    <span className='img-cont'>
                        <img src="./company-logo.png" alt="logo"/>
                    </span>
                </div>
            </div>
        </div>
    )
}
