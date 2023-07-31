import Celana from "../../assets/img/product-celana.png"
import Celana1 from "../../assets/img/celana1.png"
import Celana2 from "../../assets/img/celana2.png"

export default function ProductCelana() {
  return (
    <>
      <div className="bg-[#B4B4B4]">
        <div className="md:h-[145px] h-[75px] bg-cover flex px-5 md:px-[5rem] items-center" style={{backgroundImage: `url(${Celana})`}}>
          <p className="md:text-[32px] text-[24px] font-bold text-white shadow-md uppercase">Pants</p>
        </div>
      </div>

      <div className="px-5 md:px-[5rem] py-6 bg-[#D9D9D9] grid grid-cols-4 gap-4 place-items-center">
        <img src={Celana1} alt="museum" className="col-span-4"/>
        <img src={Celana2} alt="museum" className="col-span-4"/>
      </div>
    </>
  )
}