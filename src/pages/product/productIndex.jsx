import ProductBaju from "../../assets/img/product-baju.png"
import ProductJaket from "../../assets/img/product-jaket.png"
import ProductCelana from "../../assets/img/product-celana.png"
import { NavLink } from "react-router-dom";

export default function ProductIndex() {
  return (
    <>
      <div className="bg-[#D9D9D9] py-3 md:py-4">
        <NavLink to="/product/graphic-tees">
          <div className="md:h-[145px] h-[75px] bg-cover md:bg-center flex px-5 md:px-[5rem] items-center" style={{backgroundImage: `url(${ProductBaju})`}}>
            <p className="text-[24px] md:text-[32px] font-bold text-white shadow-md uppercase">Graphic Tees</p>
          </div>
        </NavLink>
        <NavLink to="/product/jackets">
          <div className="md:h-[145px] h-[75px] bg-cover flex justify-center px-5 md:px-[5rem] items-center my-3 md:my-4" style={{backgroundImage: `url(${ProductJaket})`}}>
            <p className="text-[24px] md:text-[32px] font-bold text-white shadow-md uppercase">Jackets</p>
          </div>
        </NavLink>
        <NavLink to="/product/pants">
          <div className="md:h-[145px] h-[75px] bg-cover flex justify-end px-5 md:px-[5rem] items-center" style={{backgroundImage: `url(${ProductCelana})`}}>
            <p className="text-[24px] md:text-[32px] font-bold text-white shadow-md uppercase">Pants</p>
          </div>
        </NavLink>
      </div>
    </>
  )
}