import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../Loader/Loader'
const Event = () => {
    const [alldata, setAlldata] = useState([])
    const [page, setpage] = useState(1)
    const [loader, setloader] = useState(true)
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const fetchData = async () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?page=${page}&apikey=zlgpwfAgtQslAeB95WdA8453W9W4oqpp`
        // block // qFxgfAJRGuJBONzQAl9THbSKexBXtGvk`
        //block // qh0BJRqIBkAkRtu7HyrKGjmnJ41KvbNo";
        let { data } = await axios.get(url);
        setAlldata(data._embedded.events)
        setloader(false)
    }

    const previousBtn = async () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?page=${page - 1}&apikey=qFxgfAJRGuJBONzQAl9THbSKexBXtGvk`
        // qh0BJRqIBkAkRtu7HyrKGjmnJ41KvbNo";
        let { data } = await axios.get(url);
        setAlldata(data._embedded.events)
        setpage(page - 1)
        setloader(false)
    }

    const nextBtn = async () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?page=${page + 1}&apikey=qh0BJRqIBkAkRtu7HyrKGjmnJ41KvbNo`
        let { data } = await axios.get(url);
        setAlldata(data._embedded.events)
        setpage(page + 1)
        setloader(false)
    }
    return (
        <>
            <div className="container">

                <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-success  " onClick={previousBtn} disabled={page <= 1}>&larr; Previous</button>
                    <button className="btn btn-success " onClick={nextBtn}>next &rarr;</button>
                </div>

                {
                    loader === true ? (
                        <div className="text-center">
                            <Loader />
                        </div>
                    ) : (
                        <div className="row">
                            {
                                alldata.map((elm, ind) => {
                                    return (
                                        <div className="col-md-4 col-sm-6 mt-3" key={ind}>
                                            <div className="card" >
                                                <img src={elm.images[0].url} alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{elm.name}</h5>
                                                    <p className="card-text"></p>
                                                    <p> {elm.dates.timezone}</p>
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