import React from 'react'
import { CTADATA as items } from '../../utils/constants'
const Cta = () => {
    return (
        <>
            {
                items.map((item, id) => {
                    return (


                        <div className="card text-center col-lg-4 col-md-12" key={id}>
                            <img src={item.image} alt="image" className='cta_image' />
                            <h5>
                                {
                                    item.title
                                }
                            </h5>
                            <p className='card_para'>
                                {
                                    item.content
                                }
                            </p>
                        </div>


                    )
                })
            }
        </>
    )
}

export default Cta