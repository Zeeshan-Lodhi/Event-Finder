import React from 'react'
import './StatPreviewPage.css'
import img from './image-header-desktop.jpg'
const HomePage = () => {
    return (
        <>
            <div className="parentContainer">
                <div className="card" id="card">
                    <div className="card-body" id="card-body">
                        <div className="container">
                            <div className="card-content">
                                <h1>Get <span className="title-color">insights</span> that help your grow.</h1>
                                <p className="card-description">
                                    Discover the benefits of data analytics and make better descisions regarding revenue, customer experience, and overall efficiency.</p>
                            </div>

                            {/* Ratting section */}
                            <div className="ratting container">
                                <div className="row num-ratting">

                                    <p className="ratting-text"> <h2 className="text-white text-center">10k+
                                    </h2>COMPANIES</p>

                                    <p className="ratting-text"><h2 className="text-white text-center">314
                                    </h2>TEMPLATES</p>

                                    <p className="ratting-text text-center"><h2 className="text-white">12M+
                                    </h2>QUERTS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="card-img-top bg-secondary" src={img} alt="homePage pic" />
                </div>
            </div>
        </>
    )
}
export default HomePage