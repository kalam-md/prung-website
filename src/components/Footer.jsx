import NavImg from "../assets/img/nav.png"

export default function Footer() {
  return (
    <>
      <div className="flex-col md:flex md:flex-row md:justify-between py-10 bg-[#B4B4B4] px-5 md:px-[10rem]">
        <div className="">
          <p className="text-[18px] font-bold">PRUNG TERRACESWEAR</p>
          <p className="text-[14px] mt-3">We&apos;ve got something good to make your <br />day even sweet.</p>
        </div>

        <div className="flex justify-between md:gap-[6rem] mt-5 md:mt-0">
          <div className="">
            <p className="text-[18px] font-bold">Address</p>
            <p className="text-[14px] mt-3">Jl. H. Wasid No.29, <br />Lebakgede, Kecamatan <br />Coblong, Kota Bandung, <br />Jawa Barat 40132</p>
          </div>
          <div className="">
            <p className="text-[18px] font-bold">Connection</p>
            <p className="text-[14px] mt-3">Whatshapp <br />Instagram <br />Facebook</p>
          </div>
        </div>
      </div>
      
      <footer className="flex justify-center md:justify-end items-center bg-cover bg-center h-[55px] md:px-[10rem]" style={{backgroundImage: `url(${NavImg})`}}>
        <span className="text-white font-light text-[14px]">2023 &copy; Prung Terraceswear</span>
      </footer>
    </>
  )
}