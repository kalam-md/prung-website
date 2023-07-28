import HeaderImg from "../assets/img/contact-header.png"
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineFacebook, AiOutlineShopping, AiOutlineEnvironment } from "react-icons/ai";

export default function Contact() {
  const contact = [
    { id: 1, name: "Whatsapp", icon: <AiOutlineWhatsApp size="4.5rem" className="bg-white rounded-full p-3 shadow-md"/>},
    { id: 2, name: "Instagram", icon: <AiOutlineInstagram size="4.5rem" className="bg-white rounded-full p-3 shadow-md"/>},
    { id: 3, name: "Facebook", icon: <AiOutlineFacebook size="4.5rem" className="bg-white rounded-full p-3 shadow-md"/>},
    { id: 4, name: "Marketplace", icon: <AiOutlineShopping size="4.5rem" className="bg-white rounded-full p-3 shadow-md"/>},
    { id: 5, name: "Alamat", icon: <AiOutlineEnvironment size="4.5rem" className="bg-white rounded-full p-3 shadow-md"/>},
  ];

  return (
    <>
      <div className="h-[250px] md:h-screen bg-cover bg-center flex justify-center items-center" style={{backgroundImage: `url(${HeaderImg})`}}></div>

      <div className="flex-col justify-center items-center pt-5 md:pt-10 pb-8 md:pb-16 px-5 md:px-[14rem] bg-gray-200">
        <p className="text-[24px] md:text-[32px] font-bold text-center">Contact</p>
        <div className="md:flex md:justify-evenly mt-10 grid grid-cols-3 gap-5">
          {contact.map((data) => (
            <div key={data.id} className="grid justify-items-center">
              {data.icon}
              <p className="mt-2">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}