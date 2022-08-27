import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../../../contexts/app.context";
import {IStore} from "../../../../interfaces/user-reducer.interface";
import './index.scss';
import {Header} from "../header";
import {AadhaarForm} from "../aadhaar-form";
import {VerificationStatus} from "../verification-status";
import {UserAction} from "../../../../store/actions/user.action";

export const AadhaarOTPStepComponent = () => {
    const {state, dispatch} = useContext(AppContext) as IStore;

    const [verificationDone, setVerificationDone] = useState(false);

    const handleManualSignin = () => {
        dispatch({
            type: UserAction.ADD_AADHAAR_PROPERTY,
            payload: {
                isAgreed: false,
                status: {
                    loading: false,
                    success: false,
                    failure: false,
                }
            }
        });
    }

    useEffect(() => {
        setVerificationDone(!state.aadhaar.status.loading && (state.aadhaar.status.success || state.aadhaar.status.failure));
    }, [state.aadhaar.status.success, state.aadhaar.status.failure])

    return (
        <div className='aadhaar-otp-component pos-rel'>
            <div className="container">
                <Header />
                <div className='content'>
                    <div className='document'>
                        <img className='w100' src="./document.png" alt="doc"/>
                        {
                            !state.aadhaar.status.success && (
                                <div className="document-btn">
                                    <button className='btn w100' onClick={handleManualSignin}>Request OTP to Sign</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {
                verificationDone ? <VerificationStatus/> : <AadhaarForm/>
            }
        </div>
    )
}
