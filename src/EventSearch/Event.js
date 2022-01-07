import React from 'react'
import Loader from './Loader/Loader'

const Event = ({ loader, setloader, eventsData, setCountryCode, setstartDate, setendDate,
    setpostalCode, postalCode, page, fetchData, previousBtn, nextBtn }) => {

    const onChangeEvent = (e) => {
        if (e.target.value === "Australia" || e.target.value === "australia" || e.target.value === "AU") {
            setCountryCode("AU")
        }
        else if (e.target.value === "Canada" || e.target.value === "canada" || e.target.value === "CA") {
            setCountryCode("CA")
        }
        else if (e.target.value === "Denmark" || e.target.value === "denmark" || e.target.value === "DK") {
            setCountryCode("DK")
        }
        else if (e.target.value === "Germany" || e.target.value === "germany" || e.target.value === "DE") {
            setCountryCode("DE")
        }
    }

    const filterCountryCode = () => {
        setloader(true)
        fetchData()
        setCountryCode("")
    }

    const filterPostalCode = () => {
        setloader(true)
        fetchData()
        setpostalCode("")
    }

    const filterStartEndDate = () => {
        setloader(true)
        fetchData()
        setstartDate("")
        setendDate("")
    }
    return (
        <>
            <div className="container">

                <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-success  " onClick={previousBtn} disabled={page <= 1}>&larr; Previous</button>
                    <button className="btn btn-success " onClick={nextBtn}>next &rarr;</button>
                </div>

                <label className='mt-4'>Enter CountryCode or CountryName :
                    <input type="text" onChange={onChangeEvent} />
                    <button className="btn btn-success ml-2" onClick={filterCountryCode}>Filter</button>
                </label>

                <label className='mt-4 d-block'>Enter Postal Code :
                    <input type="text" onChange={(e) => { setpostalCode(e.target.value) }} value={postalCode} />
                    <button className="btn btn-success ml-4" onClick={filterPostalCode}>Filter</button>
                </label>

                <hr />
                <label className='mt-4 d-block'>Enter StartDate and EndDate :
                    <input type="date" onChange={(e) => {
                        setstartDate(e.target.value + "T19:00:00Z")
                    }} className='mx-2' />
                    <input type="date" onChange={(e) => {
                        setendDate(e.target.value + "T19:00:00Z")
                    }} />
                    <button className="btn btn-success ml-4" onClick={filterStartEndDate}>Filter</button>
                </label>
                <hr />

                {
                    loader === true ? (
                        <div className="text-center">
                            <Loader />
                        </div>
                    ) : (
                        <div className="row">
                            {
                                eventsData.filter((item, ind) => ind < 10).map((elm, ind) => {
                                    return (
                                        <div className="col-md-4 col-sm-6 mt-3" key={ind}>
                                            <div className="card" >
                                                <img src={elm.images[0].url} alt="..." className=" card-img-top" style={{ height: "15rem" }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{elm.name}</h5>
                                                    <p className="card-text"></p>
                                                    <p> {elm.dates.timezone}</p>
                                                    <p >StartDate: {elm.sales.public.startDateTime}</p>
                                                    <p >EndDate: {elm.sales.public.endDateTime}</p>
                                                    <a href={elm.url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
                                                        Get More Info
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }

            </div>

        </>
    )
}
export default Event