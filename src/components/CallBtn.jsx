import { MdAddIcCall } from "react-icons/md";

function CallBtn({ text = "Call Now" }) {
  return (
    <div>
      <a
        href="tel:919448525672"
        className="flex justify-center shadow-md active:translate-y-0.5 hover:translate-y-0.5 hover:shadow-xl font-medium hover:opacity-95 cursor-pointer gap-2 bg-blue-700 text-white py-2 px-10 rounded-full  items-center"
      >
        {text} <MdAddIcCall size={"20px"} />
      </a>
    </div>
  );
}

export default CallBtn;
