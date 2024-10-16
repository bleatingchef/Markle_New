
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
import AboutMission_com from "./pages/AboutMission_com";
import AboutClientReview_com from "./pages/AboutClientReview_com";
import AboutFaq_com from "./pages/AboutFaq_com";
import BecomeOurAgent_com from "./pages/BecomeOurAgent_com";
import Career from "./Components/Career";
import ServiceApp from "./pages/ServiceApp";
import ServicesTestAndQa from "./pages/ServicesTestAndQa";
import ServicesUI from "./pages/ServicesUI";
import AllServices from "./pages/AllServices";
import ServicesDigitalMarketing from "./pages/ServicesDigitalMarketing";
import ServicesDevops from "./pages/ServicesDevops";
import ServicesEcommerce from "./pages/ServicesEcommerce";
import ServicesMvp from "./pages/ServicesMvp";
import ServicesSaas from "./pages/ServicesSaas";
import ServicesLowCodeNoCode from "./pages/ServicesLowCodeNoCode";
import ServicesWebDev from "./pages/ServicesWebDev";

function App() {

  return (
    <>
    <Router>
      <ScrollToTop>
        <Navbar/>
      <Routes>
      <Route path='/' element={<Home_com/>}/>
      <Route path='/about/company' element={<About_com/>}/>
      <Route path='/about/mission' element={<AboutMission_com/>}/>
      <Route path='/about/client-reviews' element={<AboutClientReview_com/>}/>
      <Route path='/about/faq' element={<AboutFaq_com/>}/>
      <Route path='/about/become-our-agent' element={<BecomeOurAgent_com/>}/>
      <Route path='/about/careers' element={<Career/>}/>
      <Route path='/service/software-development' element={<Service_com/>}/>
      <Route path='/service/mobile-app-development' element={<ServiceApp/>}/>
      <Route path="/service/testing-and-qa" element={<ServicesTestAndQa/>}/>
      <Route path='/service/ui-ux-design' element={<ServicesUI/>}/>
      <Route path='/service/digital-marketing' element={<ServicesDigitalMarketing/>}/>
      <Route path='/service/devops-consulting' element={<ServicesDevops/>}/>
      <Route path='/service/all-services' element={<AllServices/>}/>
      <Route path="/service/ecommerce" element={<ServicesEcommerce/>}/>
      <Route path="/service/mvp-development" element={<ServicesMvp/>}/>
      <Route path="/service/saas-products" element={<ServicesSaas/>}/>
      <Route path="/service/low-code-no-code" element={<ServicesLowCodeNoCode/>}/>
      <Route path="/service/web-development" element={<ServicesWebDev/>}/>
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
