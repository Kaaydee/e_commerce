"use client"
import HeaderShoppingCart from "@/app/component/layout/header-shopping-cart";
import HeaderDropdownMenu from "@/app/component/layout/headerDropdownmenu";
import Link from "next/link";
export default function Header() {
  return (
    <header className={' fixed w-full top-0 z-50 bg-white shadow p-5'}>
      <div className={'container flex items-center justify-between '}>
        <Link href={"/"} className={'text-red-800 text-4xl italic font-bold'}>
          PIAcake
        </Link>

        <div className={'hidden lg:flex gap-12'}>
          <Link href={"/"}> Trang chủ</Link>
          <Link href={"/products"}> Sản phẩm</Link>
          <Link href={"/"}> About</Link>
        </div>
        <div className="flex items-center gap-5">
            <HeaderDropdownMenu/>
            <HeaderShoppingCart/>
        </div>
      </div>
    </header>
  );
}
