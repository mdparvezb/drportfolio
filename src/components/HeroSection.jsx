import slide1Main from "../assets/slide1-main.jpg";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import SimpleImageSlider from "react-simple-image-slider";

function HeroSection() {
  const images = [
    { url: slide1Main },
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
    { url: slide4 },
  ];

  const style = { objectFit: "contain" };

  return (
    <>
      <div className="w-full hidden md:inline-block relative">
        <SimpleImageSlider
          style={style}
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
      </div>
    </>
  );
}

export default HeroSection;
