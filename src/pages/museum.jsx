import Museum1 from "../assets/img/museum1.png"
import Museum2 from "../assets/img/museum2.png"
import Museum3 from "../assets/img/museum3.png"
import Museum4 from "../assets/img/museum4.png"
import Museum5 from "../assets/img/museum5.png"
import Museum6 from "../assets/img/museum6.png"
import Museum7 from "../assets/img/museum7.png"

export default function Museum() {
  return (
    <>
      <div className="bg-[#B4B4B4]">
        <div className="md:h-[145px] h-[75px] bg-cover flex md:px-[5rem] px-5 items-center">
          <p className="md:text-[32px] text-[24px] font-bold uppercase">Museum</p>
        </div>
      </div>

      <div className="md:px-[5rem] px-5 md:py-6 py-3 bg-[#D9D9D9] grid grid-cols-7 gap-4">
        <img src={Museum1} alt="museum" className="col-span-7"/>
        <img src={Museum2} alt="museum" className="col-span-4 h-full"/>
        <img src={Museum3} alt="museum" className="col-span-3"/>
        <img src={Museum4} alt="museum" className="col-span-7"/>
      </div>

      <div className="md:px-[5rem] px-5 md:pb-6 pb-3 bg-[#D9D9D9] grid grid-cols-6 gap-4">
        <img src={Museum5} alt="museum" className="col-span-6"/>
        <img src={Museum6} alt="museum" className="col-span-3"/>
        <img src={Museum7} alt="museum" className="col-span-3"/>
      </div>
    </>
  )
}