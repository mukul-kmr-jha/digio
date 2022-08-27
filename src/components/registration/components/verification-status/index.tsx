import './index.scss';
import {useContext} from "react";
import {AppContext} from "../../../../contexts/app.context";
import {IStore} from "../../../../interfaces/user-reducer.interface";

export const VerificationStatus = () => {
    const {state: {aadhaar: {status: {success}}}} = useContext(AppContext) as IStore;
    return (
        <div className='verification-status pos-abs w100'>
            <div className={`verification-status-cont ${success ? 'success': 'failure'}`}>
                {
                    success ? 'Aadhaar Verified Successfully' : 'Aadhaar Could not be verified, please try again'
                }
            </div>
        </div>
    )
}
