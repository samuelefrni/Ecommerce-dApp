import { PurchaseI, ReturDataI } from "./interface";
import { runHeliaNode } from "./helia";

import ImageTactile from "../assets/OL_020p_en_2500x1500_L1240145_be-2048x1229.jpg";
import ImageMusic from "../assets/Blog-Main-Image-5-min.png";
import ImageTheatre from "../assets/ilhom2 (1).jpg.webp";
import ImagePhotography from "../assets/Champaner-Heritage-Resort-Ideal-For-Pre-wedding-Shoots.jpg";
import ImageArts from "../assets/142019441-56a792635f9b58b7d0ebcaa2.webp";
import ImageSculpture from "../assets/100A0228-scaled.jpg";

const images = [
  ImageTactile,
  ImageMusic,
  ImageTheatre,
  ImagePhotography,
  ImageArts,
  ImageSculpture,
];

export const courses = await runHeliaNode().then(({ cid, obj }) => {
  return obj.map((item, index): ReturDataI => {
    return {
      cid: cid.toString(),
      description: item.description,
      id: item.id,
      image: images[index],
      name: item.name,
      value: item.value,
    };
  });
});

export const purchase: PurchaseI[] = [];
