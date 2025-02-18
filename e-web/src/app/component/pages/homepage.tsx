// 'use client'
// export default function Homepage(props:{
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	data: any
// }){
// 	console.log(JSON.parse(props.data))
// 	return (
// 		<>
// 			Homepage
// 		</>
// 	)
// }

'use client';

export default function Homepage(props: { data: string }) {
  let parsedData = null;

  try {
    // Cố gắng parse chuỗi JSON nếu có
    parsedData = JSON.parse(props.data);
  } catch (error) {
    console.error("Error parsing data:", error);
  }

  console.log(parsedData); // Kiểm tra dữ liệu sau khi parse
  return (
    <>
      <h1>Đây là trang chủ của cửa hàng </h1>
      {/* Render dữ liệu đã parse */}
      {/* <pre>{JSON.stringify(parsedData, null, 2)}</pre> */}
    </>
  );
}
