import img1 from "../assets/treatment1.jpg";
import img2 from "../assets/treatment2.jpg";
import img3 from "../assets/treatment3.jpg";
import img4 from "../assets/treatment4.jpg";
import img5 from "../assets/treatment5.jpg";
import img6 from "../assets/treatment6.jpg";
import img7 from "../assets/treatment7.jpg";
import img8 from "../assets/treatment8.jpg";
import img9 from "../assets/treatment9.jpg";
import img10 from "../assets/treatment10.jpg";
import img11 from "../assets/treatment11.jpg";
import img12 from "../assets/treatment12.jpg";
import img13 from "../assets/treatment13.jpg";
import img14 from "../assets/treatment14.jpg";
import img15 from "../assets/treatment15.jpg";
import img16 from "../assets/treatment16.jpg";
import CallBtn from "../components/CallBtn";
import WhatsappBtn from "../components/WhatsappBtn";

function Treatment() {
  const images = [
    {
      img: img1,
      title: "Varicose Vein Ablation",
    },
    {
      img: img2,
      title: "Stroke and Mechanical Thrombectomy",
    },
    {
      img: img3,
      title: "Uterine Artery Embolisation (UAE)",
    },
    {
      img: img4,
      title: "Thyroid Nodule Ablation",
    },
    {
      img: img5,
      title: "Liver Cirrhosis and PHT",
    },
    {
      img: img6,
      title: "Prostatic Artery Embolization (PAE)",
    },
    {
      img: img7,
      title: "Musculoskeletal (MSK) and Sports Medicine",
    },
    {
      img: img8,
      title: "Lymphangiography and Lymphatic Interventions",
    },
    {
      img: img9,
      title: "Liver Tumor Treatment",
    },
    {
      img: img10,
      title: "Female Infertility Treatment",
    },
    {
      img: img11,
      title: "Pain Management",
    },
    {
      img: img12,
      title: "FNAC & Biopsy",
    },
    {
      img: img13,
      title: "Drainage Procedure",
    },
    {
      img: img14,
      title: "Percutaneous Transhepatic Biliary Drainage (PTBD)",
    },
    {
      img: img15,
      title: "Bronchial Artery Embolization",
    },
    {
      img: img16,
      title: "Varicocele Treatment",
    },
  ];

  return (
    <>
      <h1 className="text-black text-3xl font-bold text-center py-8">
        Treatment and Faciliteis We Offer
      </h1>
      <div className="flex justify-center items-center">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4 grid-rows-2 px-4 md:px-20 py-4">
          {images.map((img, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden flex flex-col rounded-md shadow-[0px_0px_20px_rgba(0,0,0,0.2)] bg-blue-700"
              >
                <img
                  src={img.img}
                  alt={img.title}
                  className="aspect-1/1 hover:scale-105 cursor-pointer transition active:scale-105"
                />
                <div className="w-full bg-blue-700 min-h-16 max-h-20 p-2 text-white text-center">
                  <p className="w-full h-full">{img.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-y-10 mx-auto items-center my-8 justify-center w-full md:px-20 px-8 py-10 bg-blue-950 text-white">
        <h2 className="font-bold text-xl text-center md:text-3xl">
          Book An Appointment Now!
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-center gap-5 md:gap-10">
          <CallBtn />
          <WhatsappBtn />
        </div>
      </div>
    </>
  );
}

export default Treatment;
