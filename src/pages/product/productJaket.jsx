import Jaket from "../../assets/img/product-jaket.png"
import Jaket1 from "../../assets/img/jaket1.png"
import Jaket2 from "../../assets/img/jaket2.png"

export default function ProductJaket() {
  return (
    <>
      <div className="bg-[#B4B4B4]">
        <div className="md:h-[145px] h-[75px] bg-cover flex px-5 md:px-[5rem] items-center" style={{backgroundImage: `url(${Jaket})`}}>
          <p className="md:text-[32px] text-[24px] font-bold text-white shadow-md uppercase">Jackets</p>
        </div>
      </div>

      <div className="px-5 md:px-[5rem] py-6 bg-[#D9D9D9] grid grid-cols-4">
        <img src={Jaket1} alt="museum" className="col-span-4"/>
        <img src={Jaket2} alt="museum" className="col-span-4"/>
      </div>
    </>
  )
}