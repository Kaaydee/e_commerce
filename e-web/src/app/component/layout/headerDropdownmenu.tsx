"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <RxHamburgerMenu className="w-8 h-8 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="-translate-x-1/3 max-h-[500px] overflow-y-auto">
        {/* Danh mục Sản phẩm */}
        <DropdownMenuSeparator />
        <DropdownMenuLabel>SẢN PHẨM</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Bánh Pía Truyền Thống */}
        <DropdownMenuLabel>BÁNH PÍA TRUYỀN THỐNG</DropdownMenuLabel>
        <DropdownMenuItem>Bánh pía khoai môn sầu riêng trứng</DropdownMenuItem>
        <DropdownMenuItem>Bánh pía đậu xanh sầu riêng trứng</DropdownMenuItem>
        <DropdownMenuItem>Bánh pía đậu mè đen sầu riêng trứng</DropdownMenuItem>
        <DropdownMenuSeparator />

        {/* Bánh Pía Chay */}
        <DropdownMenuLabel>BÁNH PÍA CHAY</DropdownMenuLabel>
        <DropdownMenuItem>Bánh pía chay đậu xanh</DropdownMenuItem>
        <DropdownMenuItem>Bánh pía chay đậu đỏ</DropdownMenuItem>
        <DropdownMenuItem>Bánh pía chay dừa dứa</DropdownMenuItem>
        <DropdownMenuSeparator />

        {/* Bánh Pía Kim Sa */}
        <DropdownMenuLabel>BÁNH PÍA KIM SA</DropdownMenuLabel>
        <DropdownMenuItem>Bánh pía kim sa bí đỏ</DropdownMenuItem>
        <DropdownMenuItem>Bánh pía kim sa môn</DropdownMenuItem>
        <DropdownMenuSeparator />

        {/* Bánh Pía Nhỏ - Mini
        <DropdownMenuLabel>BÁNH PÍA NHỎ - MINI</DropdownMenuLabel>
        <DropdownMenuItem>Bánh BIBI môn</DropdownMenuItem>
        <DropdownMenuSeparator /> */}

        {/* Các sản phẩm khác */}
        <DropdownMenuLabel>CÁC SẢN PHẨM KHÁC</DropdownMenuLabel>
        <DropdownMenuItem>Đang cập nhật...</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
