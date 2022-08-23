import React from 'react'
import { ANNOUNCEMENTDATA as data } from '../../utils/constants'
import { AiOutlineRight } from 'react-icons/ai'
const Slogans = () => {
    return (
        <>
            <div className="middle_area">
                <div className="header">
                    <p className='para_middle'>We have generated 1,023 slogans for “cozy”</p>
                    <button className='btn_middle'>Download all</button>
                </div>
                <div className="data">

                    {
                        data.map((item, id) => {

                            return (
                                <div key={id} className="data_inside col-lg-12 col-md-12">
                                    <p className='data_para' title='Click to copy' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                                        {item.title}
                                    </p>
                                </div>
                            )
                        })
                    }



                </div>
                <hr />
                <div className="paginate">
                    <div></div>
                    <div className="numbers">
                        <span className='first_number'>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>...</span>
                        <span>21</span>

                    </div>
                    {/* <div className="paginate_btn"> */}
                    <button className='next_btn'>Next <AiOutlineRight /></button>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Slogans