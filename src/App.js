// import StatPreviewPage from "./StatPreviewPage/StatPreviewPage"
// import PriceCards from "./PriceCards/Cards"
// import GridSection from './TestomonialGridSection/GridSection'
// import { Route, Routes } from "react-router-dom"
import Event from "./EventSearch/Event"
const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<StatPreviewPage />} />
        <Route path="/pricecards" element={<PriceCards />} />
        <Route path="/gridsection" element={<GridSection />} />
        <Route path="/events" element={<Event />} />
      </Routes> */}
      <Event />

    </>
  )
}
export default App