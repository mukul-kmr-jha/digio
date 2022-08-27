import {ChangeEventHandler, SetStateAction, useContext, useState} from "react";
import {AppContext} from "../../../../contexts/app.context";
import {IStore} from "../../../../interfaces/user-reducer.interface";
import './index.scss';
import {Header} from "../header";
import {AadhaarForm} from "../aadhaar-form";

export const AadhaarOTPStepComponent = () => {
    const {state, dispatch} = useContext(AppContext) as IStore;

    const [email, setEmail] = useState(state.email);

    const handleGoogleOAuth = () => {
        console.log('Google OAuth');
    }

    const handleManualSignin = () => {
        console.log('Manual Sign in');
    }

    return (
        <div className='aadhaar-otp-component'>
            <div className="container">
                <Header />
                <div className='content'>
                    <div className='document'>
                        <img src="./document.png" alt="doc"/>
                        <div className="document-btn">
                            <button onClick={handleManualSignin}>Request OTP to Sign</button>
                        </div>
                    </div>
                </div>
            </div>
            <AadhaarForm/>
        </div>
    )
}
