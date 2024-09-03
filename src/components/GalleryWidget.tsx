import React from "react";

const GalleryWidget: React.FC = () => {
  const [images, setImages] = React.useState<string[]>([]);

  const handleAddImage = () => {
    // Function to handle adding new images
    setImages([...images, "New Image"]); // Placeholder action
  };

  return (
    <div className="bg-secondary p-4 rounded-lg mt-4">
      <div className="flex space-x-4 overflow-x-scroll">
        {images.map((img, index) => (
          <div key={index} className="bg-mainbgcolor p-2 rounded-md">
            {img}
          </div>
        ))}
      </div>
      <button className="mt-4 text-white" onClick={handleAddImage}>
        + Add Image
      </button>
    </div>
  );
};

export default GalleryWidget;
