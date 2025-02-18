// import {
// 	Dialog,
// 	DialogContent,
// 	DialogFooter,
// 	DialogHeader,
// 	DialogTitle,
//   } from "@/components/ui/dialog";
//   import { z } from "zod";
//   import { useForm } from "react-hook-form";
//   import { zodResolver } from "@hookform/resolvers/zod";
//   import { useState } from "react";
//   import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
//   import { Button } from "@/components/ui/button";
//   import { Input } from "@/components/ui/input";

//   import { useCartStore } from "@/state/cart-store";
//   import { useRouter } from "next/navigation";
//   import { useToast } from "@/hooks/use-toast";
//   import validator from "validator";

//   const checkoutFormSchema = z.object({
// 	name: z.string().min(2, {
// 	  message: 'Ít nhất 2 ký tự',
// 	}),
// 	email: z.optional(z.string().email()),
// 	phone: z.string().refine((phone) => {
// 	  return validator.isMobilePhone(phone, 'vi-VN');
// 	}, {
// 	  message: 'Số điện thoại không hợp lệ',
// 	}),
// 	address: z.string().min(10, {
// 	  message: 'Ít nhất 10 ký tự',
// 	}),
//   });

//   export default function DialogCheckout(props: {
// 	open: boolean;
// 	onOpenChange: (open: boolean) => void;
//   }) {
// 	const cartStore = useCartStore();
// 	const { toast } = useToast();
// 	const router = useRouter();

// 	const form = useForm<z.infer<typeof checkoutFormSchema>>({
// 	  resolver: zodResolver(checkoutFormSchema),
// 	});
// 	const [loading, setLoading] = useState(false);

// 	async function onSubmit(values: z.infer<typeof checkoutFormSchema>) {
// 	  setLoading(true);

// 	  try {
// 		// Gửi yêu cầu tạo đơn hàng và sản phẩm qua API route
// 		const response = await fetch('/api/create-order', {
// 		  method: 'POST',
// 		  headers: {
// 			'Content-Type': 'application/json',
// 		  },
// 		  body: JSON.stringify({
// 			name: values.name,
// 			phone: values.phone,
// 			email: values.email,
// 			address: values.address,
// 			cartItems: cartStore.list,
// 		  }),
// 		});

// 		const data = await response.json();

// 		if (data.success) {
// 		  toast({
// 			title: "✅ Đơn hàng đã được tạo thành công",
// 		  });
// 		  cartStore.addSuccessList();
// 		  cartStore.reset();
// 		  router.push('/cart/order-success');
// 		} else {
// 		  throw new Error(data.message);
// 		}
// 	  } catch (e) {
// 		console.log(e);
// 	  }

// 	  setLoading(false);
// 	}

// 	return (
// 	  <Dialog
// 		open={props.open}
// 		onOpenChange={(open) => props.onOpenChange(open)}
// 	  >
// 		<DialogContent>
// 		  <Form {...form}>
// 			<form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-8'}>
// 			  <DialogHeader>
// 				<DialogTitle>Thông tin đơn hàng</DialogTitle>
// 			  </DialogHeader>
// 			  <div className="space-y-3">
// 			  <FormField
//   control={form.control}
//   name={"name"}
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel>Tên người nhận</FormLabel>
//       <FormControl>
//         <Input
//           disabled={loading}
//           required
//           placeholder={"Người nhận..."}
//           {...field}
//           value={field.value || ""} // Đảm bảo không bị undefined
//         />
//       </FormControl>
//       <FormMessage />
//     </FormItem>
//   )}
// />

// 				<FormField
// 				  control={form.control}
// 				  name={"email"}
// 				  render={({ field }) => (
// 					<FormItem>
// 					  <FormLabel>Email</FormLabel>
// 					  <FormControl>
// 						<Input type={'email'} disabled={loading} placeholder={'Email'} {...field} />
// 					  </FormControl>
// 					  <FormMessage />
// 					</FormItem>
// 				  )}
// 				/>
// 				<FormField
// 				  control={form.control}
// 				  name={"phone"}
// 				  render={({ field }) => (
// 					<FormItem>
// 					  <FormLabel>Điện thoại</FormLabel>
// 					  <FormControl>
// 						<Input disabled={loading} required placeholder={'Số điện thoại'} {...field} />
// 					  </FormControl>
// 					  <FormMessage />
// 					</FormItem>
// 				  )}
// 				/>
// 				<FormField
// 				  control={form.control}
// 				  name={"address"}
// 				  render={({ field }) => (
// 					<FormItem>
// 					  <FormLabel>Địa chỉ</FormLabel>
// 					  <FormControl>
// 						<Input disabled={loading} required placeholder={'Địa chỉ'} {...field} />
// 					  </FormControl>
// 					  <FormMessage />
// 					</FormItem>
// 				  )}
// 				/>
// 			  </div>
// 			  <DialogFooter>
// 				<Button type={'submit'}>Xác nhận</Button>
// 				<Button type={'button'} variant={'outline'} onClick={() => props.onOpenChange(false)}>Hủy</Button>
// 			  </DialogFooter>
// 			</form>
// 		  </Form>
// 		</DialogContent>
// 	  </Dialog>
// 	);
//   }

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import validator from "validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCartStore } from "@/state/cart-store";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import base from "@/app/ultils/airtable";
import isValidArray from "@/app/ultils/isValidArray";

const checkoutFormSchema = z.object({
  name: z.string().min(2, {
    message: "Ít nhất 2 ký tự",
  }),
  email: z.optional(z.string().email()),
  phone: z.string().refine(
    (phone) => {
      return validator.isMobilePhone(phone, "vi-VN");
    },
    {
      message: "Số điện thoại không hợp lệ",
    }
  ),
  address: z.string().min(10, {
    message: "Ít nhất 10 ký tự",
  }),
});

export default function DialogCheckout(props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const cartStore = useCartStore();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
  });
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof checkoutFormSchema>) {
    setLoading(true);

    try {
      const request = await base("orders").create([
        {
          fields: {
            name: values.name,
            phone: values.phone,
            email: values.email,
            address: values.address,
          },
        },
      ]);

      if (isValidArray(request)) {
        const orderId = request[0].id;

        const records = cartStore.list.map((item) => {
          return {
            fields: {
              price: item.product_variant.variant_price,
              quantity: item.quantity,
              product_variant: [item.variant_id],
              order: [orderId],
            },
          };
        });

        const orderItems = await base("orders-products").create(records);

        if (isValidArray(orderItems)) {
          toast({
            title: "✅ Đơn hàng đã được tạo thành công",
          });
          cartStore.addSuccessList();
          cartStore.reset();
          router.push("/cart/order-success");
        }
      } else {
        new Error("Đã có lỗi, tạo đơn không thành công");
      }
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  }

  return (
    <Dialog open={props.open} onOpenChange={(open) => props.onOpenChange(open)}>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-8"}>
            <DialogHeader>
              <DialogTitle>Thông tin đơn hàng</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name={"name"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên người nhận</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          required
                          placeholder={"Người nhận..."}
                          {...field}
                          value={field.value || ""} // Đảm bảo không bị undefined
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={"email"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type={"email"}
                          disabled={loading}
                          placeholder={"Email"}
                          {...field}
                          value={field.value || ""} // Đảm bảo không bị undefined
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={"phone"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Điện thoại</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          required
                          placeholder={"Số điện thoại"}
                          {...field}
                          value={field.value || ""} // Đảm bảo không bị undefined
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={"address"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Địa chỉ</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          required
                          placeholder={"Địa chỉ"}
                          {...field}
                          value={field.value || ""} // Đảm bảo không bị undefined
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </DialogBody>
            <DialogFooter>
              <Button type={"submit"}>Xác nhận</Button>
              <Button
                type={"button"}
                variant={"outline"}
                onClick={() => props.onOpenChange(false)}
              >
                Hủy
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
