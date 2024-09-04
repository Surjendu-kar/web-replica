interface Props {
  onScroll: (direction: "left" | "right") => void;
}

const GalleryHeader: React.FC<Props> = ({ onScroll }) => (
  <div className="flex justify-between items-center mb-4 p-1.5">
    <button className="bg-[#171717] text-white w-[150px] h-[62px] rounded-[20px] text-lg font-semibold">
      Gallery
    </button>
    <div className="flex items-center space-x-4">
      <AddImageButton />
      <ScrollButtons onScroll={onScroll} />
    </div>
  </div>
);

const AddImageButton: React.FC = () => (
  <button className="relative bg-[#4A4B53] text-white px-5 py-4 rounded-full text-sm font-semibold flex items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] transition-shadow duration-300 overflow-hidden">
    <span className="relative z-10 mr-1">+</span>
    <span className="relative z-10">ADD IMAGE</span>
    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
  </button>
);

const ScrollButtons: React.FC<Props> = ({ onScroll }) => (
  <div className="flex space-x-2">
    {(["left", "right"] as const).map((direction) => (
      <button
        key={direction}
        onClick={() => onScroll(direction)}
        className="relative bg-[#303439] w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-colors duration-300 overflow-hidden group"
      >
        <span className="relative z-10 text-[#6F787C] group-hover:text-white transition-colors duration-300">
          {direction === "left" ? "←" : "→"}
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    ))}
  </div>
);

export default GalleryHeader;
