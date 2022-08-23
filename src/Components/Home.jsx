import React, { useRef } from 'react'
import TopSection from './elements/TopSection'
import Slogans from './elements/Slogans'
import Cta from './elements/Cta'
import Prod from './elements/Prod'
const Home = () => {


    const handleCopy = () => {
        const item = useRef(false);
        item.select();
        navigator.clipboard.writeText(copyText.value);



    }
    return (
        <>
            <section className="landing">
                <div className="row container">
                    <div className='landing_dukaan'>
                        <div className="container">
                            <TopSection />
                            <hr />
                            <Slogans />
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta">
                <div className="row container">
                    <Cta />
                </div>
            </section>
            <section className="prod">
                <div className="row container">
                    <h1 className='prod_header'>Try our other free products</h1>
                    <Prod />
                </div>
            </section>
        </>
    )
}

export default Home