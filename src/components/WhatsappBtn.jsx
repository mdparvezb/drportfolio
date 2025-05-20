import { MdOutlineWhatsapp } from "react-icons/md";

function WhatsappBtn({ text = "WhatsApp Us" }) {
  return (
    <a
      href="https://wa.me/919448525672"
      className="flex justify-center font-medium hover:opacity-80 cursor-pointer gap-2 bg-[#45B755] text-white py-2 px-10 rounded-full  items-center"
    >
      {text} <MdOutlineWhatsapp size={"22px"} />
    </a>
  );
}

export default WhatsappBtn;
