import VectorIcon from "../assets/Vector.png";
import FrameIcon from "../assets/Frame.png";
import BlackImg from "../assets/DefaultImg.png";
import ColorfulImg from "../assets/Colourful-Img.jpeg";

const GalleryWidget = () => {
  const images = [
    { black: BlackImg, color: ColorfulImg },
    { black: BlackImg, color: ColorfulImg },
    { black: BlackImg, color: ColorfulImg },
  ];

  return (
    <div className="flex bg-box-bg rounded-[18.89px] w-[720px] h-[310px]">
      <div className="w-[50px] h-[170px] py-4 flex flex-col items-center justify-between">
        <img src={VectorIcon} alt="Grid" className="w-[24px] h-[24px]" />
        <img src={FrameIcon} alt="Scroll" className="w-[22px] h-[34px]" />
      </div>

      <div className="flex-1 py-4 pr-4">
        <div className="flex justify-between items-center mb-4 p-1.5">
          <button className="bg-[#171717] text-white w-[150px] h-[62px] rounded-[20px] text-xl font-semibold">
            Gallery
          </button>
          <div className="flex items-center space-x-4">
            <button className="bg-[#4A4B53] text-white px-5 py-4 rounded-full text-sm font-semibold flex items-center">
              <span className="mr-2">+</span> ADD IMAGE
            </button>
            <div className="flex space-x-2">
              <button className="bg-[#303439] text-[#6F787C] w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                &#8592;
              </button>
              <button className="bg-[#303439] text-[#6F787C] w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                &#8594;
              </button>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 overflow-x-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[180px] overflow-hidden rounded-lg group"
            >
              <img
                src={img.black}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:opacity-0"
              />
              <img
                src={img.color}
                alt={`Gallery image ${index + 1} color`}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:rotate-6 group-hover:scale-110 origin-center"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[50px] py-4 flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default GalleryWidget;
