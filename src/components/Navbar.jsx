import { NavLink } from "react-router-dom";
import NavImg from "../assets/img/nav.png"
import Logo from "../assets/img/logo.png"
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const classNameFunc = ({ isActive }) => (isActive ? "underline underline-offset-2" : "hover:underline underline-offset-2");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-between items-center gap-[4.5rem] md:h-[85px] h-[65px] bg-cover bg-center mx-auto md:px-[10rem]" style={{backgroundImage: `url(${NavImg})`}}>
      <div className="hidden md:block">
        <img src={Logo} alt="Logo" className="w-[156px]"/>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center mx-auto w-full">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-[28px] focus:outline-none"
        >
          <AiOutlineMenu className="ml-3" size="2rem"/>
        </button>
        <img src={Logo} alt="Logo" className="w-[120px] mr-1"/>
      </div>

      <div className="hidden md:flex md:gap-[4.5rem] text-white font-light text-[14px]">
          <NavLink to="/" className={classNameFunc}>Home</NavLink>
          <NavLink to="/about" className={classNameFunc}>About</NavLink>
          <NavLink to="/product" className={classNameFunc}>Our Product</NavLink>
          <NavLink to="/museum" className={classNameFunc}>Museum</NavLink>
          <NavLink to="/contact" className={classNameFunc}>Contact</NavLink>
      </div>

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="absolute rounded-md md:hidden flex flex-col gap-[1.5rem] text-white font-light text-[14px] py-5 pl-5 pr-10 mt-[18rem] ml-4 bg-red-300 bg-cover bg-center shadow-lg" style={{backgroundImage: `url(${NavImg})`}}>
          <NavLink to="/" className={classNameFunc} onClick={toggleMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={classNameFunc} onClick={toggleMobileMenu}>
            About
          </NavLink>
          <NavLink to="/product" className={classNameFunc} onClick={toggleMobileMenu}>
            Our Product
          </NavLink>
          <NavLink to="/museum" className={classNameFunc} onClick={toggleMobileMenu}>
            Museum
          </NavLink>
          <NavLink to="/contact" className={classNameFunc} onClick={toggleMobileMenu}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  )
}