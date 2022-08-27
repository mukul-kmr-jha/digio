import './index.scss';
import {useContext, useState} from "react";
import {AppContext} from "../../../../contexts/app.context";
import {IStore} from "../../../../interfaces/user-reducer.interface";

export const AadhaarForm = () => {
    const [aadhaar, setAadhaar] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [verified, setVerified] = useState(false);
    const {state: {aadhaar: {status: loading}}} = useContext(AppContext) as IStore;

    return (
        <div className='aadhaar-form'>
            <div className='aadhaar-form-overlay'></div>
            <div className='aadhaar-form-content'>
                <div className='header-label'>
                    <h4>{loading ? 'Signing...' : 'Register Aadhaar'}</h4>
                    {loading && <p>Mutual Non-Disclosure Agreement</p>}
                </div>
                {
                    !loading && (
                        <div className='form'>
                            <span><img src="./aadhaar.png" alt=""/></span>
                            <div>
                                <div className='aadhaar-form-input'>
                                    <input className='input' type="aadhaar" name="aadhaar" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)}/>
                                    <button className='btn' disabled={!verified}>Verify</button>
                                </div>
                                <div className="aadhaar-form-agree">
                                    <input name='agreed' type="checkbox" checked={agreed} onChange={() => setAgreed(prev => !prev)}/>
                                    <label htmlFor='agreed'>I agree to eSign this <span>KYC Document</span> to get started</label>
                                </div>
                                <div className='aadhaar-otp-input'>
                                    <input className='input' type="aadhaar" name="aadhaar" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)}/>
                                    <button className='btn' disabled={!verified}>Verify</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
