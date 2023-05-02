import React, { useState } from "react";

interface ImageFile {
  url: string;
  file: File;
}
//画像処理
const ImageCombiner: React.FC = () => {
  const [imageFiles, setImageFiles] = useState<ImageFile[]>([]);
  const [combineCount, setCombineCount] = useState(2);
  const [combinedImageUrl, setCombinedImageUrl] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles: ImageFile[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
        newFiles.push({ url, file });
      }
      setImageFiles([...imageFiles, ...newFiles]);
    }
  };

  const handleCombineCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCombineCount(parseInt(event.target.value));
  };

  const handleCombineImages = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Calculate the size of the combined image based on the combineCount
    const size = Math.floor(Math.sqrt(combineCount)) * 300;

    canvas.width = size;
    canvas.height = size;

    // Draw the images onto the canvas
    for (let i = 0; i < combineCount && i < imageFiles.length; i++) {
      const image = new Image();
      image.src = imageFiles[i].url;

      const x = (i % Math.floor(Math.sqrt(combineCount))) * (size / Math.floor(Math.sqrt(combineCount)));
      const y = Math.floor(i / Math.floor(Math.sqrt(combineCount))) * (size / Math.floor(Math.sqrt(combineCount)));

      image.onload = () => {
        context?.drawImage(image, x, y, size / Math.floor(Math.sqrt(combineCount)), size / Math.floor(Math.sqrt(combineCount)));
        if (i === combineCount - 1) {
          setCombinedImageUrl(canvas.toDataURL());
        }
      };
    }
  };

  return (
    <div>
      <h1>Image Combiner</h1>
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      <div>
        <label htmlFor="combine-count">Combine Count:</label>
        <select id="combine-count" value={combineCount} onChange={handleCombineCountChange}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <button onClick={handleCombineImages}>Combine Images</button>
      {combinedImageUrl && <img src={combinedImageUrl} alt="Combined" />}
    </div>
  );
};

export default ImageCombiner;