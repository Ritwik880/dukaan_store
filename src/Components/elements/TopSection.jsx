import React, { useState } from 'react'
const TopSection = () => {
    const [value, setValue] = useState('cozy')
    return (
        <>
            <div className="left_align">
                <h1 className='left_header'>Free slogan maker</h1>
                <p className='left_para'>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
                <div className="form">
                    <p className='form_para'>Word for your slogan</p>
                    <input value={value} onChange={(e) => setValue(e.target.value)} type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <button className='generate_slogan'>
                        Generate slogans
                    </button>
                </div>
            </div>
        </>
    )
}

export default TopSection