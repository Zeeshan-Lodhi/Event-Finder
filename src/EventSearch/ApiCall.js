import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Event from './Event'
const ApiCall = () => {

    const [eventsData, setEventsData] = useState([])
    const [page, setpage] = useState(1)
    const [countryCode, setCountryCode] = useState("")
    const [postalCode, setpostalCode] = useState("")
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [loader, setloader] = useState(true)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const fetchData = async () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?page=${page}&countryCode=${countryCode}&postalCode=${postalCode}&startDateTime=${startDate}&endDateTime=${endDate}&apikey=zlgpwfAgtQslAeB95WdA8453W9W4oqpp`
        // block // qFxgfAJRGuJBONzQAl9THbSKexBXtGvk`
        //block // qh0BJRqIBkAkRtu7HyrKGjmnJ41KvbNo";
        let { data } = await axios.get(url);
        setEventsData(data._embedded.events)
        console.log(eventsData);
        setloader(false)
    }

    const previousBtn = async () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?page=${page - 1}&countryCode=${countryCode}&postalCode=${postalCode}&startDateTime=${startDate}&endDateTime=${endDate}&apikey=zlgpwfAgtQslAeB95WdA8453W9W4oqpp`
        setloader(true)
        let { data } = await axios.get(url);
        setEventsData(data._embedded.events)
        setpage(page - 1)
        setloader(false)
    }

    const nextBtn = async () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?page=${page + 1}&countryCode=${countryCode}&postalCode=${postalCode}&startDateTime=${startDate}&endDateTime=${endDate}&apikey=zlgpwfAgtQslAeB95WdA8453W9W4oqpp`
        setloader(true)
        let { data } = await axios.get(url);
        setEventsData(data._embedded.events)
        setpage(page + 1)
        setloader(false)
    }

    return (
        <div>
            <Event
                loader={loader} setloader={setloader}
                eventsData={eventsData}
                setCountryCode={setCountryCode}
                setstartDate={setstartDate}
                setendDate={setendDate}
                setpage={setpage} page={page}
                postalCode={postalCode} setpostalCode={setpostalCode}
                previousBtn={previousBtn} nextBtn={nextBtn} fetchData={fetchData}
            />
        </div>
    )
}

export default ApiCall