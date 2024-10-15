import Image from "next/image";
import React from "react";
import RectangleImage from "../images/Rectangle.png";

const RectangleImageComponent = () => {
  return (
    <>
      <Image src={RectangleImage}></Image>
    </>
  );
};

export default RectangleImageComponent;
