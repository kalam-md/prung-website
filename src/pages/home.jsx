import HeaderImg from "../assets/img/home-header.png"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="h-screen xl:h-[800px] bg-cover bg-center flex justify-center items-center" style={{backgroundImage: `url(${HeaderImg})`}}>
        <p className="text-[32px] font-bold text-center text-white">A casual choice <br />that is just for you</p>
      </div>

      <div className="flex-col justify-center items-center py-10 bg-gray-200">
        <p className="text-[24px] md:text-[30px] font-bold text-center">PRUNG TERRACESWEAR</p>
        <p className="text-center mt-3">Prung Terraceswear adalah merek pakaian yang <br className="hidden md:block"/>mengambil inspirasi dari bahasa tradisional <br className="hidden md:block"/>warga Jawa Barat.</p>
        <p className="underline underline-offset-2 text-center mt-5">
          <Link to="/about">
            <span className="px-3 py-1 border border-gray-600 rounded-xl cursor-pointer">Selengkapnya</span>
          </Link>
        </p>
      </div>
    </>
  )
}