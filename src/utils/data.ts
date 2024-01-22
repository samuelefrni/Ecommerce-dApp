import { PurchaseI } from "./interface";
import { runHeliaNode } from "./helia";

export const courses = await runHeliaNode().then((obj) => {
  return obj.map((item) => {
    return {
      description: item.description,
      id: item.id,
      image: item.image,
      name: item.name,
      value: item.value,
    };
  });
});

export const purchase: PurchaseI[] = [];
