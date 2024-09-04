import VectorIcon from "../../assets/Vector.png";
import FrameIcon from "../../assets/Frame.png";

const Sidebar = () => (
  <div className="w-[50px] h-[170px] py-4 flex flex-col items-center justify-between">
    <img src={VectorIcon} alt="Grid" className="w-[24px] h-[24px]" />
    <img src={FrameIcon} alt="Scroll" className="w-[22px] h-[34px]" />
  </div>
);

export default Sidebar;
