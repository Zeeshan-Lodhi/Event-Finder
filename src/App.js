// import StatPreviewPage from "./StatPreviewPage/StatPreviewPage"
// import PriceCards from "./PriceCards/Cards"
// import GridSection from './TestomonialGridSection/GridSection'
// import { Route, Routes } from "react-router-dom"
import ApiCall from "./EventSearch/ApiCall"
const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<StatPreviewPage />} />
        <Route path="/pricecards" element={<PriceCards />} />
        <Route path="/gridsection" element={<GridSection />} />
        <Route path="/events" element={<Event />} />
      </Routes> */}
      <ApiCall />

    </>
  )
}
export default App