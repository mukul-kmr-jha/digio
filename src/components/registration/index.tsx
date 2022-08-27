import {useContext} from "react";
import {AppContext} from "../../contexts/app.context";
import {IStore} from "../../interfaces/user-reducer.interface";
import './index.scss';
import {LoginStepComponent} from "./components/login-step";

export const RegistrationComponent = () => {
    const { state, dispatch } = useContext(AppContext) as IStore;

    return (
        <div className='registration-component'>
           <div className="content">
               <LoginStepComponent />
           </div>
        </div>
    )
}