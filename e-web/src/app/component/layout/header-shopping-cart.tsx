'use client'

import {AiOutlineShoppingCart} from "react-icons/ai";
import {clearStateTime, useCartStore} from "@/state/cart-store";
import Link from "next/link";
import {useEffect} from "react";

export default function HeaderShoppingCart(){
	const cartStore = useCartStore()

	useEffect(() => {
		const now = new Date().getTime()

		if(cartStore.setupTime){
			if(now - cartStore.setupTime > clearStateTime){
				cartStore.reset()
			}
		}
	}, [cartStore.setupTime]);

	return (
<Link href={'/cart'} className="relative">
  <AiOutlineShoppingCart className="w-10 h-10" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-5 text-red-600 font-semibold">
    <span className="text-xl leading-none">
      {cartStore.list.length}
    </span>
  </div>
</Link>

	)
}