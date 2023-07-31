import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Museum from "./pages/museum"
import ProductIndex from "./pages/product/productIndex"
import ProductJaket from "./pages/product/productJaket"
import ProductBaju from "./pages/product/productBaju"
import ProductCelana from "./pages/product/productCelana"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="font-body">

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductIndex />} />
            <Route path="/product/graphic-tees" element={<ProductBaju />} />
            <Route path="/product/jackets" element={<ProductJaket />} />
            <Route path="/product/pants" element={<ProductCelana />} />
            <Route path="/museum" element={<Museum />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </>
  )
}
