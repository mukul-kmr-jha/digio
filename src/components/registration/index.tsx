import {useContext} from "react";
import {AppContext} from "../../contexts/app.context";
import {IStore} from "../../interfaces/user-reducer.interface";
import './index.scss';
import {LoginStepComponent} from "./components/login-step";
import {AadhaarOTPStepComponent} from "./components/aadhaar-otp-step";

export const RegistrationComponent = () => {
    const { state } = useContext(AppContext) as IStore;
    console.log({state});
    return (
        <div className='registration-component'>
           <div className="content">
               {
                   state.email ? (
                       <AadhaarOTPStepComponent />
                   ) : (
                       <LoginStepComponent />
                   )
               }
           </div>
        </div>
    )
}
