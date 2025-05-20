import img1 from "../assets/hero-img1.jpg";
import img2 from "../assets/hero-img2.jpg";
import SimpleImageSlider from "react-simple-image-slider";

function HeroSection() {
  const images = [{ url: img1 }, { url: img2 }];

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

      <div className="w-full md:hidden sm:block">
        <SimpleImageSlider
          className=""
          width={"100%"}
          height={"50vh"}
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
