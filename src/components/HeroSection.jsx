import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import SimpleImageSlider from "react-simple-image-slider";

function HeroSection() {
  const images = [{ url: slide1 }, { url: slide2 }, { url: slide3 }, { url: slide4 }];

  return (
    <>
      <div className="w-full hidden md:block sm:hidden relative">
        <SimpleImageSlider
          className=""
          width={"100%"}
          height={"80vh"}
          images={images}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
        />
      </div>

      <div className="w-full lg:hidden sm:block">
        <SimpleImageSlider
          className=""
          width={"100%"}
          height={"40vh"}
          images={images}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
        />
      </div>
    </>
  );
}

export default HeroSection;
