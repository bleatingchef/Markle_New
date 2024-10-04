
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop"
import Home_com from "./pages/Home_com"
import About_com from "./pages/About_com"
import Service_com from "./pages/Service_com"
import Industry_com from "./pages/Industry_com"
import Solution_com from "./pages/Solution_com"
import Pricing_com from "./pages/Pricing_com"
import ContactUs_com from "./pages/ContactUs_com"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
    <Router>
      <ScrollToTop>
        <Navbar/>
      <Routes>
      <Route path='/' element={<Home_com/>}/>
      <Route path='/about' element={<About_com/>}/>
      <Route path='/service' element={<Service_com/>}/>
      <Route path='/industry' element={<Industry_com/>}/>
      <Route path='/solution' element={<Solution_com/>}/>
      <Route path='/pricing' element={<Pricing_com/>}/>
      <Route path='/contactus' element={<ContactUs_com/>}/>
        
      </Routes>
      <Footer/>
      </ScrollToTop>
    </Router>

   

    </>
  )
}

export default App
