import './index.scss';

export const Header = () => {
    return (
        <div className='header'>
            <span className='header-label'>
                <span>Sign document using</span>
                <p>Sanket@digio.in</p>
            </span>
            <span className='img-cont'>
                <img src="./company-logo.png" alt="logo"/>
            </span>
        </div>
    )
}
