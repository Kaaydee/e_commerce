'use client';

import { getProductPrice } from "@/app/ultils/product_utils";
import Image from "next/image"
import Link from "next/link";
import { Fragment } from "react";

export default function ProductsList(props: { data: string }) {
  let parsedData = [];

  try {
    parsedData = JSON.parse(props.data);
  } catch (error) {
    console.error("Error parsing data:", error);
  }

  if (!Array.isArray(parsedData.records)) {
    return <p>Invalid data</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parsedData.records .map((product: any, index: number) => (
        <Fragment key={index}>
        <Link href={`/products/${product.id}`} className="border p-4 rounded-lg shadow items-center">
        <ProductImage product={product}/>
        <div  className="text-center"> 
          <p>{product.fields.name}</p>
          <p className="font-bold ">{getProductPrice(product.fields).toLocaleString('vi-VN')}Đ</p>
          
        </div>
        </Link>
          
        </Fragment>
      ))}
    </div>
  )
  
  
}


const ProductImage = ({ product }: { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any }) => {
  // Kiểm tra xem có ảnh không
  if (!product.fields?.image || !Array.isArray(product.fields.image)) {
    return <p>No Image Available</p>;
  }

  const imageUrl = product.fields.image[0]?.url;

  if (!imageUrl) return <p>No Image Available</p>;

  return (
    <Image
      className="aspect-square w-full"
      src={imageUrl}
      alt={product.fields.name}
      width={product.fields.image[0].width} // Giá trị mặc định nếu width không tồn tại
      height={product.fields.image[0].height }
      unoptimized // Nếu Next.js vẫn không hiển thị được ảnh
    />
  );
};


