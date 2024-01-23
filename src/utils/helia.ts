import { createHelia } from "helia";
import { json } from "@helia/json";
import { ObjI } from "./interface";

import Data from "../../data.json";

export const runHeliaNode = async () => {
  const helia = await createHelia();
  const j = json(helia);

  const cid = await j.add(Data);

  const obj: ObjI[] = await j.get(cid);

  return obj;
};
