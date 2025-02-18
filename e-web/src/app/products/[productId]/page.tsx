import base from "@/app/ultils/airtable";
import Link from "next/link";
import Image from "next/image";
import {marked} from "marked";
import { Fragment } from "react";
import { resolveRichText } from "@/app/ultils/product_utils";
import ProductVariantSelection from "@/app/component/pages/products/product-variant-selection";
// Sử dụng server-side logic để lấy dữ liệu cho trang sản phẩm
export default async function SingleProduct({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params; // Await params trước khi sử dụng

  if (!productId) {
    return <p>Product ID is missing</p>;
  }

  try {
    // Fetch sản phẩm từ Airtable
    const records = await base("products")
      .select({
        filterByFormula: `RECORD_ID() = '${productId}'`, // Sử dụng productId đã await
      })
      .all();

    if (records.length === 0) {
      return <p>Product not found</p>;
    }

    const product = records[0].fields;

    // Kiểm tra và ép kiểu product.name để đảm bảo nó là string
    const productName =
      typeof product.name === "string"
        ? product.name
        : "Product name not available";
    const productDescription =
      typeof product.discription === "string"
        ? product.discription
        : "Description not available";

    return (
      //{/* <h1>{productName}</h1>
      //<p>{productDescription}</p> */}
      <div className="container my-6">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="sticky top-24">
            <ProductImageThumbnails product={product}></ProductImageThumbnails>
            </div>
          </div>
          <div className="flex-grow flex gap-6">
            <div className="w-1/2 flex-shrink-0">
              <ProductImage product={product}></ProductImage>
            </div>
            <div className="flex-grow">
                <h1 className=" my-4 text-4xl text-center">{productName} </h1>
                <ProductVariantSelection product={JSON.stringify(product)}></ProductVariantSelection>
                {/* <div className="my-8 text-justify ">{productDescription}</div> */}
                <div dangerouslySetInnerHTML={{__html: marked.parse(resolveRichText(productDescription))}}/>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <p>Error loading product</p>;
  }
}

const ProductImageThumbnails = ({ product }: { product: any }) => {
  if (!product?.image || !Array.isArray(product.image)) {
    return <p>No Image Available</p>;
  }
  return (
    <div className={"flex flex-col gap-2"}>
      {product.image.map((image: any, index: number) => (
        <Link href={`#${image.id}`} key={image.id} className="border p-2 rounded-lg shadow items-center">
          <Image
            src={image.url}
            alt={product.name}
            width={150}
            height={150}
            quality={75}
          />
        </Link>
      ))}
    </div>
  );
};

const ProductImage = ({ product }: { product: any }) => {
  if (!product?.image || !Array.isArray(product.image)) {
    return <p>No Image Available</p>;
  }

  return (
    <div className={"flex flex-col gap-2"}>
      {product.image.map((image: any, index: number) => (
        <Fragment key={image.id} >
          <Image
            className="w-full border p-4 rounded-lg shadow items-center"
            src={image.url}
            alt={product.name}
            width={image.width}
            height={image.height}
            quality={75}
            id={image.id}
          />
        </Fragment>
      ))}
    </div>
  );
};
