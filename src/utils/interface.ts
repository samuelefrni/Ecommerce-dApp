import { Dispatch, SetStateAction } from "react";

export interface CourseI {
  title: string;
  description: string;
  image: string;
  value: string;
}

export interface PurchaseI {
  courseName: string;
  price: string;
  accountAddress: string;
  txHash: string;
  chainId: number | undefined;
}

export interface SuccesPageI {
  title: string;
  image: string;
  setPurchaseSuccess: Dispatch<SetStateAction<boolean>>;
}

export interface ObjI {
  description: string;
  id: string;
  name: string;
  value: string;
}

export interface ReturDataI {
  cid: string;
  description: string;
  id: string;
  image: string;
  name: string;
  value: string;
}

export interface ErrorI {
  errorName: string;
  errorMessage: string;
}
