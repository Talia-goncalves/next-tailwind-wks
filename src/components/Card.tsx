import { Product } from "@/types/Product";
import React from "react";
import Image from "next/image";

type PropsCard = {
  product: Product;
};

export default function Card({ product }: PropsCard) {
  return (
    product.price != undefined &&(
    <div className="bg-slate-50 text-black p-5 rounded-md min-h-[250px]">
      <h1 className="text-xl">{product.title}</h1>
      <Image src={product.images.medium.url} alt = "" width={product.images.medium.width} height={product.images.medium.height} />
      <p className="text-lg font-bold text-blue-500">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
    </div>
  ));
}