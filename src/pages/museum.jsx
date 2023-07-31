import Museum1 from "../assets/img/m1.png"
import Museum2 from "../assets/img/m2.png"

export default function Museum() {
  return (
    <>
      <div className="bg-[#B4B4B4]">
        <div className="md:h-[145px] h-[75px] bg-cover flex md:px-[5rem] px-5 items-center">
          <p className="md:text-[32px] text-[24px] font-bold uppercase">Museum</p>
        </div>
      </div>

      <div className="px-5 md:px-[5rem] py-6 bg-[#D9D9D9] grid grid-cols-4 place-items-center gap-4">
        <img src={Museum1} alt="museum" className="col-span-4 2xl:w-[80vw]"/>
        <img src={Museum2} alt="museum" className="col-span-4 2xl:w-[80vw]"/>
      </div>
    </>
  )
}