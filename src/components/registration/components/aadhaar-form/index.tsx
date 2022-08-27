import './index.scss';
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../../../contexts/app.context";
import {IStore} from "../../../../interfaces/user-reducer.interface";
import {regexAadhaar, regexOTP, validOtpValue} from "../../../../constants/constant";
import {UserAction} from "../../../../store/actions/user.action";

export const AadhaarForm = () => {
    const {state: {aadhaar: {card, isAgreed, status: {loading}}}, dispatch} = useContext(AppContext) as IStore;

    const [aadhaar, setAadhaar] = useState(card);
    const [otp, setOtp] = useState('');
    const [agreed, setAgreed] = useState(isAgreed);
    const [allowVerify, setAllowVerify] = useState(false);
    const [allowOtpSubmit, setAllowOtpSubmit] = useState(false);

    const handleVerify = () => {
        if (regexAadhaar.test(aadhaar)) {
            dispatch({
                type: UserAction.ADD_AADHAAR_PROPERTY,
                payload: {
                    card: aadhaar,
                }
            })
        } else {
            alert('Please enter a valid 12 digit aadhaar number');
        }
    }

    const handleSubmit = () => {
        if (regexOTP.test(otp) && agreed) {
            dispatch({
                type: UserAction.ADD_AADHAAR_PROPERTY,
                payload: {
                    isAgreed: agreed,
                    status: {
                        loading: true,
                        success: false,
                        failure: false,
                    }
                }
            });
            setTimeout(() => {
                const otpValid = otp === validOtpValue;
                dispatch({
                    type: UserAction.ADD_AADHAAR_PROPERTY,
                    payload: {
                        isAgreed: agreed,
                        status: {
                            loading: false,
                            success: otpValid,
                            failure: !otpValid,
                        }
                    }
                });
            }, 4000);
        } else {
            alert('Please enter a valid 12 digit aadhaar number');
        }
    }

    useEffect(() => {
        setAllowVerify(regexAadhaar.test(aadhaar));
    }, [aadhaar])

    useEffect(() => {
        setAllowOtpSubmit(regexOTP.test(otp) && agreed );
    }, [otp, agreed])

    return (
        <div className='aadhaar-form pos-abs'>
            <div className='aadhaar-form-overlay pos-abs w100 h100'></div>
            <div className='aadhaar-form-content pos-rel'>
                <div className='header-label'>
                    <h4>{loading ? 'Signing...' : 'Register Aadhaar'}</h4>
                    {loading && <p>Mutual Non-Disclosure Agreement</p>}
                </div>
                {
                    !loading && (
                        <div className='form d-flx'>
                            <span><img className='w100' src="./aadhaar.png" alt=""/></span>
                            <div>
                                <div className='aadhaar-form-input d-flx'>
                                    <input className='input flx-1' type="text" name="aadhaar" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)}/>
                                    <button className='btn' disabled={!allowVerify} onClick={handleVerify}>Verify</button>
                                </div>
                                <div className="aadhaar-form-agree d-flx">
                                    <input name='agreed' type="checkbox" checked={agreed} onChange={() => setAgreed(prev => !prev)}/>
                                    <label htmlFor='agreed'>I agree to eSign this <span>KYC Document</span> to get started</label>
                                </div>
                                <div className='aadhaar-otp-input d-flx j-cont-end'>
                                    <input className='input' type="text" name="aadhaar" value={otp} onChange={(e) => setOtp(e.target.value)}/>
                                    <button className='btn' disabled={!allowOtpSubmit} onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
