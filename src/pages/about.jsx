import HeaderImg from "../assets/img/about-header.png"
import BahanImg from "../assets/img/about-bahan.png"
import DesainImg from "../assets/img/about-desain.png"
import JahitanImg from "../assets/img/about-jahitan.png"
import SablonImg from "../assets/img/about-sablon.png"

export default function About() {
  const keunggulan = [
    { id: 1, images: BahanImg, judul: "Bahan", deskripsi: "Bahan berkualitas yang membuat anda nyaman" },
    { id: 2, images: JahitanImg, judul: "Jahitan", deskripsi: "Jahitan rapih dengan mesin berteknologi tinggi" },
    { id: 3, images: SablonImg, judul: "Sablon", deskripsi: "Menggunakan materi sablon berkualitas tinggi" },
    { id: 4, images: DesainImg, judul: "Desain", deskripsi: "Desain yang konseptual dan berkarakter" },
  ];

  return (
    <>
      <div className="h-[110vh] bg-cover bg-center flex justify-start items-center" style={{backgroundImage: `url(${HeaderImg})`}}>
        <div className="px-5 md:px-[5rem] text-white w-[600px]">
          <p className="text-[32px] font-bold">About</p>
          <p className="text-[16px] font-light my-5 md:my-10">Prung Terraceswear adalah merek pakaian yang mengambil inspirasi dari bahasa tradisional warga Jawa Barat. Kata &ldquo;PRUNG&ldquo; sendiri dalam bahasa Jawa Barat memiliki arti &ldquo;kecap panganteur&ldquo; atau kata pengantar yang digunakan untuk ajakan atau memulai suatu kegiatan. Kata tersebut digunakan untuk memberi semangat dan mempengaruhi orang lain untuk segera melakukannya.</p>
          <p className="text-[16px] font-light">Meskipun kata &ldquo;PRUNG&ldquo; jarang digunakan secara umum, namun memiliki penekanan yang lebih bersemangat dibandingkan dengan kata pengantar atau ajakan lainnya. Prung Terraceswear menggunakan logo berbentuk oktagon yang memiliki delapan arah mata angin yang melambangkan unsur-unsur kehidupan dalam kehidupan manusia.</p>
        </div>
      </div>

      <div className="flex-col justify-center items-center py-10 bg-gray-200">
        <p className="text-[24px] md:text-[30px] font-bold text-center">Keunggulan</p>
        <p className="text-center mt-3 mx-5 md:mx-0">Prung Terraceswaear memiliki keunggulan dari perjalanan yang panjang <br className="hidden md:block"/>selama 12 tahun dengan mempertahankan gaya casual yang kuat dari <br className="hidden md:block"/>disetiap produknya dan menciptakan keunikannya sendiri. bahkan produk <br className="hidden md:block"/>Prung juga sudah dijual dan diakui kulitas diluar negeri.</p>
      </div>

      <div className="flex-col justify-center items-center pb-10 px-5 md:px-[5rem] bg-gray-200">
        <div className="grid md:grid-cols-2 gap-4 place-items-center">
          {keunggulan.map((data) => (
            <div key={data.id} className="bg-cover w-full h-[180px] md:h-[330px] md:aspect-video rounded-sm" style={{backgroundImage: `url(${data.images})`}}>
              <div className="text-white text-[14px] md:text-[16px] px-8 pt-[5.5rem] md:px-14 md:pt-[13rem] w-[280px] md:w-[400px]">
                <p className="font-bold">{data.judul}</p>
                <p className="font-light">{data.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}