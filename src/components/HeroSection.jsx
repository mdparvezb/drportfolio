import { useEffect, useState } from "react";
import slide1Main from "../assets/slide1-main.jpg";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function HeroSection() {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [
    { url: slide1Main },
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
    { url: slide4 },
  ];

  useEffect(() => {
    const intervalId = setInterval(autoPlay, 2000);
    return () => clearInterval(intervalId);
  }, [imgIndex]);

  function autoPlay() {
    if (imgIndex == images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  }

  const rightArrowHandler = () => {
    if (imgIndex == images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  const leftArrowHandler = () => {
    if (imgIndex == 0) {
      setImgIndex(images.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <>
      <div className="w-full h-[40vh] md:h-[90vh] relative">
        <img
          src={images[imgIndex].url}
          alt=""
          className="w-full h-full  object-fill"
        />

        {/*Right Arrow  */}
        <div
          className="flex items-center justify-center absolute top-[50%] translate-y-[50%] right-6 w-10 h-10 bg-gray-900 rounded text-white opacity-80 cursor-pointer select-none"
          onClick={rightArrowHandler}
        >
          <FaArrowRight size={20} />
        </div>

        {/*Left Arrow  */}
        <div
          className="flex items-center justify-center absolute top-[50%] translate-y-[50%] left-6 w-10 h-10 bg-gray-900 rounded text-white opacity-80 cursor-pointer select-none"
          onClick={leftArrowHandler}
        >
          <FaArrowLeft size={20} />
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 right-[50%] translate-x-[50%] flex justify-center gap-4">
          {images.map((i, index) => (
            <div
              key={index}
              onClick={() => setImgIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === imgIndex ? "bg-gray-300" : "bg-gray-800"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* <div className="w-full hidden md:inline-block relative">
        <SimpleImageSlider
          width={"100%"}
          height={"100vh"}
          images={images}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
        />
      </div>

      <div className="w-full md:hidden inline-block">
        <SimpleImageSlider
          width={"100%"}
          height={"40vh"}
          images={images}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
        />
      </div> */}
    </>
  );
}

export default HeroSection;
