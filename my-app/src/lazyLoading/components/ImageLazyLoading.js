/*

https://blog.webdevsimplified.com/2023-05/lazy-load-images/


Command to generate small images:
ffmpeg -i imageName.jpg -vf scale=20:-1 imageName-small.jpg

ffmpeg -i img1.PNG -vf scale=20:-1 img1-small.PNG

to use ffmpeg we need to install and add the path, find the instruction on below link:
https://bobbyhadz.com/blog/ffmpeg-is-not-recognized-as-internal-or-external-command#:~:text=The%20error%20%22'ffmpeg'%20is,your%20user's%20PATH%20environment%20variable.



*/

import React, { useEffect, useState } from "react";
import img from "./images/img1.PNG";
function ImageLazyLoading() {
  const [images, setImages] = useState({});
  useEffect(() => {
    import("./images/Images").then((module) => {
      console.log("module", module);
      setImages(module.Images);
    });
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
      }}
    >
      {Object.keys(images).map((key) => (
        <img
          src={images[key]}
          alt="Somethig to appear"
          loading="lazy"
          style={{ width: "400px", height: "400px", border: "1px solid black" }}
          key={key}
        />
      ))}
    </div>
  );
}

export default ImageLazyLoading;
