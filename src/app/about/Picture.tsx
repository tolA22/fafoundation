
import React from "react";

const Picture = () => {
  return (
    <picture>
      <source media="(max-width: 500px)" srcSet="./mobile-about.png" />
      <source media="(min-width: 800px)" srcSet="./about-head-image.png" />
      <img src="./about-head-image.png" alt="Description of the image" />
    </picture>
  );
};

export default Picture;
