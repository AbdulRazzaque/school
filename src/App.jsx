import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Home from "./pages/Home";
import Academic from "./pages/Academic";
import Achievement from "./pages/Achievement";
import Infrastructure from "./pages/Infrastructure";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
<div>
<Navbar/>

    <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="AboutUs" element={<About />}/>
        <Route path="Admission" element={<Admission />}/>
        <Route path="Admission" element={<Admission />}/>
        <Route path="Academic" element={<Academic />}/>
        <Route path="Achievement" element={<Achievement />}/>
        <Route path="Infrastructure" element={<Infrastructure />}/>
        <Route path="Gallery" element={<Gallery />}/>
        <Route path="ContactUs" element={<Contact />}/>
    
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
