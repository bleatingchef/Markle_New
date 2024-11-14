// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home_com from "./pages/Home_com";
import About_com from "./pages/About_com";
import Service_com from "./pages/Service_com";
import Industry_com from "./pages/Industry_com";
import Solution_com from "./pages/Solution_com";
import Pricing_com from "./pages/Pricing_com";
import ContactUs_com from "./pages/ContactUs_com";
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
import FinanceAndFintech from "./pages/industry/FinanceAndFintech";
import TravelAndHospitality from "./pages/industry/TravelAndHospitality";
import RealEstate from "./pages/industry/RealEstate"
import HealthAndWellness from "./pages/industry/HealthAndWellness"
import Transportation from "./pages/industry/Transportation"
import ProfessionalServices from "./pages/industry/ProfessionalServices"
import MediaAndEntertainment from "./pages/industry/MediaAndEntertainment"
import RetailAndECommerce from "./pages/industry/RetailAndECommerce"
import Education from "./pages/industry/Education"
import Manufacturing from "./pages/industry/Manufacturing"
import Telecommunications from "./pages/industry/Telecommunications"
import ViewAllIndustries from "./pages/industry/ViewAllIndustries"
import Erp from "./pages/solution/Erp"
import ELearning from "./pages/solution/ELearning"
import Crm from "./pages/solution/Crm"
import OperationsManagementSystem from "./pages/solution/OperationsManagementSystem"
import Cms from "./pages/solution/Cms"
import ECommerce from "./pages/solution/ECommerce"
import SupplyChainManagement from "./pages/solution/SupplyChainManagement"
import WebPortals from "./pages/solution/WebPortals"
import OttPlatform from "./pages/solution/OttPlatform"
import FleetManagement from "./pages/solution/FleetManagement"
import FinancialManagement from "./pages/solution/FinancialManagement"
import ProjectManagementSystem from "./pages/solution/ProjectManagementSystem"
import HumanResourcesManagementSystem from "./pages/solution/HumanResourcesManagementSystem"
import HospitalManagementSystem from "./pages/solution/HospitalManagementSystem"
import ViewAllProducts from "./pages/solution/ViewAllProducts"

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            {/* Home Route */}
            <Route exact path="/" element={<Home_com />} />
            
            {/* About Routes - Flat structure */}
            <Route path="/about/company" element={<About_com />} />
            <Route path="/about/mission" element={<AboutMission_com />} />
            <Route path="/about/client-reviews" element={<AboutClientReview_com />} />
            <Route path="/about/faq" element={<AboutFaq_com />} />
            <Route path="/about/careers" element={<Career />} />
            <Route path="/about/become-our-agent" element={<BecomeOurAgent_com />} />
            
            {/* Service Routes - Flat structure */}
            <Route path="/service/software-development" element={<Service_com />} />
            <Route path="/service/mobile-app-development" element={<ServiceApp />} />
            <Route path="/service/testing-and-qa" element={<ServicesTestAndQa />} />
            <Route path="/service/ui-ux-design" element={<ServicesUI />} />
            <Route path="/service/digital-marketing" element={<ServicesDigitalMarketing />} />
            <Route path="/service/devops-consulting" element={<ServicesDevops />} />
            <Route path="/service/ecommerce" element={<ServicesEcommerce />} />
            <Route path="/service/mvp-development" element={<ServicesMvp />} />
            <Route path="/service/saas-products" element={<ServicesSaas />} />
            <Route path="/service/low-code-no-code" element={<ServicesLowCodeNoCode />} />
            <Route path="/service/web-development" element={<ServicesWebDev />} />
            <Route path="/service/all-services" element={<AllServices />} />
            <Route path="/industry/finance-fintech" element={<FinanceAndFintech/>}/>
            <Route path="/industry/travel-hospitality" element={<TravelAndHospitality/>}/>
            <Route path="/industry/real-estate-construction" element={<RealEstate/>}/>
            <Route path="/industry/health-wellness" element={<HealthAndWellness/>}/>
            <Route path="/industry/transportation-logistics" element={<Transportation/>}/>
            <Route path="/industry/professional-services" element={<ProfessionalServices/>}/>
            <Route path="/industry/media-entertainment" element={<MediaAndEntertainment/>}/>
            <Route path="/industry/retail-ecommerce" element={<RetailAndECommerce/>}/>
            <Route path="/industry/education" element={<Education/>}/>
            <Route path="/industry/manufacturing" element={<Manufacturing/>}/>
            <Route path="/industry/telecommunications" element={<Telecommunications/>}/>
            <Route path="/industry/all-industries" element={<ViewAllIndustries/>}/>
            <Route path="/solution/erp" element={<Erp/>}/>
            <Route path="/solution/elearning" element={<ELearning/>}/>
            <Route path="/solution/crm" element={<Crm/>}/>
            <Route path="/solution/operations-management" element={<OperationsManagementSystem/>}/>
            <Route path="/solution/cms" element={<Cms/>}/>
            <Route path="/solution/ecommerce" element={<ECommerce/>}/>
            <Route path="/solution/supply-chain-management" element={<SupplyChainManagement/>}/>
            <Route path="/solution/web-portals" element={<WebPortals/>}/>
            <Route path="/solution/ott-platform" element={<OttPlatform/>}/>
            <Route path="/solution/fleet-management" element={<FleetManagement/>}/>
            <Route path="/solution/financial-management" element={<FinancialManagement/>}/>
            <Route path="/solution/project-management" element={<ProjectManagementSystem/>}/>
            <Route path="/solution/human-resources" element={<HumanResourcesManagementSystem/>}/>
            <Route path="/solution/hospital-management" element={<HospitalManagementSystem/>}/>
            <Route path="/solution/all-products" element={<ViewAllProducts/>}/>
            {/* <Route path="/pricing/pricinghome" element={<Pricing_com/>}/> */}
            {/* <Route path="/solution/" element={<FinanceAndFintech/>}/> */}
            
            {/* Main Routes */}
            <Route path="/industry" element={<Industry_com />} />
            <Route path="/solution" element={<Solution_com />} />
            <Route path="/pricing" element={<Pricing_com />} />
            <Route path="/contactus" element={<ContactUs_com />} />
            
            {/* Catch all route for 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;