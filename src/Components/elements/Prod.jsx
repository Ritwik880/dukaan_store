import React from 'react'
import { PRODDATA as prodData } from '../../utils/constants'
const Prod = () => {
    return (
        <>
            {
                prodData.map((item, id) => {
                    return (
                        <div className="prod_item col-lg-4 col-md-12" key={id}>
                            <img src={item.image} className="card-img-top" alt="image" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">
                                    {
                                        item.content
                                    }
                                </p>

                            </div>
                        </div>
                    )
                })
            }</>
    )
}

export default Prod