import React from 'react'
import LogoSVG from '../assets/svg/Logo'

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="row container">
                    <div className="inner_nav">
                        <a className="navbar-brand" href="https://mydukaan.io/">
                            <img src='./images/logo.png' alt="dukaan_logo" />
                        </a>

                        <form className="d-flex align-items-center" role="search">
                            <a href="#" className='sign_in'>Sign in</a>
                            <button className="dukaan_btn" type="submit">Dukaan for PC</button>
                        </form>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header