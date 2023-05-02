import React, { useState, useRef } from "react";

interface ImageData {
  file: File;
  url: string;
  width: number;
  height: number;
}

const MAX_IMAGES = 6;

const generateCombinedImage = (canvas: HTMLCanvasElement, images: ImageData[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    const { width, height } = images.reduce(
      (size, image) => {
        size.width += image.width;
        size.height = Math.max(size.height, image.height);
        return size;
      },
      { width: 0, height: 0 }
    );
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) {
      reject(new Error("Failed to get canvas context."));
      return;
    }
    let x = 0;
    const onLoads: Promise<void>[] = [];
    images.forEach((image) => {
      const scale = height / image.height;
      const imageWidth = image.width * scale;
      const img = new Image();
      const onLoad = new Promise<void>((resolve) => {
        img.onload = () => {
          context.drawImage(img, x, 0, imageWidth, height);
          x += imageWidth;
          resolve();
        };
      });
      onLoads.push(onLoad);
      img.src = image.url;
    });
    Promise.all(onLoads).then(() => {
      resolve();
    });
  });
};

const App: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);
  const [numImagesToCombine, setNumImagesToCombine] = useState<number>(2);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const images: Promise<ImageData>[] = Array.from(files)
        .filter((file) => file.type.startsWith("image/"))
        .slice(0, MAX_IMAGES - selectedImages.length)
        .map(async (file) => {
          const url = URL.createObjectURL(file);
          const img = new Image();
          img.src = url;
          return new Promise<ImageData>((resolve) => {
            img.onload = () => {
              resolve({ file, url, width: img.width, height: img.height });
            };
          });
        });
      Promise.all(images).then((newImages) => {
        setSelectedImages([...selectedImages, ...newImages]);
      });
    }
  };

  const handleCombineClick = () => {
    if (selectedImages.length < 2) {
      alert("Please select at least 2 images.");
      return;
    }
    if (numImagesToCombine > selectedImages.length) {
      alert("Please select a number of images to combine that is less than or equal to the number of selected images.");
      return;
    }
    const imagesToCombine = selectedImages.slice(0, numImagesToCombine);
    const canvas = canvasRef.current;
    if (canvas) {
      generateCombinedImage(canvas, imagesToCombine);
    }
  };

  return (
    <div>
      <label>
        Select images:
        <input type="file" multiple accept="image/*" onChange={handleImageSelect} />
      </label>
      <br />
      {selectedImages.map((image, index) => (
        <img key={index} src={image.url} alt={`Selected Image ${index + 1}`} width={100} height={100} />
      ))}
      <br />
      <label>
        Number of images to combine:
        <select value={numImagesToCombine} onChange={(e) => setNumImagesToCombine(parseInt(e.target.value))}>
          {[2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button onClick={handleCombineClick}>Combine Images</button>
      </label>
     
</div>

  );
};

export default App;