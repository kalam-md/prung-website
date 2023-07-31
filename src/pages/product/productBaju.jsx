import Baju from "../../assets/img/product-baju.png"
import Baju1 from "../../assets/img/baju1.png"
import Baju2 from "../../assets/img/baju2.png"

export default function ProductBaju() {
  return (
    <>
      <div className="bg-[#B4B4B4]">
        <div className="md:h-[145px] h-[75px] bg-cover flex px-5 md:px-[5rem] items-center" style={{backgroundImage: `url(${Baju})`}}>
          <p className="md:text-[32px] text-[24px] font-bold text-white shadow-md uppercase">Graphic Tees</p>
        </div>
      </div>

      <div className="px-5 md:px-[5rem] py-6 bg-[#D9D9D9] grid grid-cols-4 place-items-center gap-4">
        <img src={Baju1} alt="museum" className="col-span-4"/>
        <img src={Baju2} alt="museum" className="col-span-4"/>
      </div>
    </>
  )
}