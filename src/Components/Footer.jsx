import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="row container">
                    <div className="footer_content">
                        <div className="left_footer">
                            <img src="./images/footerLogo.png" alt="footer_logo" />

                        </div>
                        <div className="midt_footer">

                            <ul className='ul'>
                                <li>Contact</li>
                                <li>Tutorial</li>
                                <li>Privacy</li>
                                <li>About</li>
                            </ul>

                            <ul className='ul'>
                                <li>FAQ's</li>
                                <li>Blog</li>
                                <li>Banned Items</li>
                                <li>Jobs
                                    <span className='jobs'>3</span>
                                </li>
                            </ul>


                        </div>
                        <div className="right_footer">
                            <ul className='social_ul'>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Linkedin</li>
                            </ul>

                        </div>
                    </div>
                    <hr style={{ color: '#FFFFFF' }} />

                    <div className="bottom_footer">
                        <span className='bottom_footer_para'>Dukaan 2020, All rights reserved.</span>
                        <div className="last">
                            <span className='made_in'>Made in</span>
                            <img src="./images/flag.png" alt="flag" className='last_img' />

                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer