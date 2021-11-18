import React from 'react'
import './cards.css'
import logo from './logo3.png'
const Cards = () => {
    return (
        <>
            <div className="container priceCard">
                <div className="row allCards">
                    <div className=" col-md-1 col-lg-3">
                        <div className="card my-2 ">
                            {/* First Card */}
                            <div className="card-body">
                                <img src={logo} alt="" className="logo" />
                                <h5 className="card-title">SEDANS</h5>
                                <p className="card-text" id="text">choose the Siddhant forest affordability and excellent fuel economy ideal for cruising in the city for and your next road trip</p>
                                <button className="buttons">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Second Card */}
                    <div className=" col-md-1 col-lg-3 ">
                        <div className="card">
                            <div className="card-body">
                                <img src={logo} alt="" className="logo" />
                                <h5 className="card-title" >SUVUS</h5>
                                <p className="card-text" id="text">Take off SUV for its spacious interior power and versatility perfect for your next family vacation and off-road adventures</p>
                                <button className="buttons">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className=" col-md-1 col-lg-3 ">
                        <div className="card">
                            <div className="card-body">
                                <img src={logo} alt="" className="logo" />
                                <h5 className="card-title">LUXURY</h5>
                                <p className="card-text" id="text">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of the luxury rental and arrive in style.</p>
                                <button className="buttons">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
