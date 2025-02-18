"use client";

import {
  getProductPrice,
  getProductVariants,
} from "@/app/ultils/product_utils";
import { Fragment, useState } from "react";
import Image from "next/image";
import { PiCheckCircleFill } from "react-icons/pi";
import {cn} from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {useCartStore} from "@/state/cart-store";
import { useToast } from "@/hooks/use-toast";

export default function ProductVariantSelection(props: { product: any }) {
    const {toast} = useToast()
	const cartStore = useCartStore()
  const product = JSON.parse(props.product);
  const variants = getProductVariants(product);
  console.log(variants);

  const [price, setPrice] = useState(getProductPrice(product));
  const [selectedID, setSelectedID] = useState(variants[0].variants)
  return (
    <>
      <div className="text-center my-4 py-3 text-xl border-t border-b border-dashed border-gray-900 ">
        Giá: {price.toLocaleString("vi-VN")}Đ
      </div>
      <div className="my-4 flex flex-col gap-4">
        <p>Phân loại</p>
        <div className="grid grid-cols-3 gap-4">
          {variants.map((variant: any, index: number) => (
            <Fragment key={variant.variants}>
           <div className={cn("relative",
									Number(variant.variant_inhouse) > 0 ? 'cursor-pointer' : 'opacity-80 cursor-not-allowed'
								)}
								onClick={() => {
									if(Number(variant.variant_inhouse) > 0){
										setPrice(variant.variant_price)
										setSelectedID(variant.variants)
									}
								}}
							>
                {variant.variant_image?.url ? (
                
                  <Image
                    className={"w-full aspect-square bg-gray-200"}
                    src={variant.variant_image.url}
                    alt={variant.variant_name}
                    width={200}
                    height={200}
                  />
                ) : (
                  <div />
                )}
                <div className=" pl-4 pr-4 absolute w-full bottom-0 left-0 bg-gray-500 text-white text-xs flex justify-between">
                  <div title={variant.variant_name}>    
                    <p className="line-clamp-1">{variant.variant_name}</p>
             
                    <p className="line-clamp-1">Kho {variant.variant_inhouse}</p>
                    {/* <p className="line-clamp-1">{variant.variant_price}</p> */}

                  </div>
                  <div>
                  {Boolean(selectedID === variant.variants) && (
											<PiCheckCircleFill className={'w-6 h-6'}/>
										)}
                  </div>
    
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>


      <Button
				size={'lg'}
				className={'w-full text-lg bg-green-600 mb-5 '}
				onClick={() => {
					toast({
						title: "✅ Đã thêm sản phẩm vào giỏ hàng"
					})

					cartStore.add({
						product: {
							name: product.name,
							record_id: product.record_id,
						},
						product_variant: variants.find(v => v.variants === selectedID),
						variant_id: selectedID,
						quantity: 1
					})
				}}
			>
				Thêm vào giỏ
			</Button>
    </>
  );
}
