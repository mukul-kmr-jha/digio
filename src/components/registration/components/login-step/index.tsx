import {ChangeEventHandler, SetStateAction, useContext, useState} from "react";
import {AppContext} from "../../../../contexts/app.context";
import {IStore} from "../../../../interfaces/user-reducer.interface";
import './index.scss';
import {Header} from "../header";
import {AadhaarForm} from "../aadhaar-form";
import {regexEmail} from "../../../../constants/constant";
import {UserAction} from "../../../../store/actions/user.action";

export const LoginStepComponent = () => {
    const {state, dispatch} = useContext(AppContext) as IStore;

    const [email, setEmail] = useState(state.email);

    const handleGoogleOAuth = () => {
        console.log('Google OAuth');
    }

    const handleManualSignin = () => {
        // If the email entered is valid then only it can be continued
        if (regexEmail.test(email)) {
            dispatch({
                type: UserAction.ADD_USER_PROPERTY,
                payload: {
                    email,
                }
            })
        } else {
            alert('Please enter a valid email id');
        }
    }

    return (
        <div className='login-component'>
            <div className="container">
                <Header />
                <div className='content'>
                    <div className='oauth'>
                       <span className='oauth-info-cont'>
                            <p>Sanket@digio.in you use Gmail?</p>
                            <p>login using google</p>
                       </span>
                        <span className='oauth-btn'>
                            <button onClick={handleGoogleOAuth}>Google</button>
                        </span>
                    </div>
                    <div className='section-separator'>
                        <span>OR</span>
                    </div>
                    <div className='manual'>
                        <div className='input-box-cont'>
                            <span>Proceed with your email address</span>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="terms">
                            By Continuing, I confirm to the <b>Terms and Service</b> and <b>Privacy Policy</b> of
                            <a href="https://digio.in">Digio.in</a>
                        </div>
                        <div className="manual-btn">
                            <button onClick={handleManualSignin}>continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
