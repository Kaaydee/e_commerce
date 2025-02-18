'use client';

// import Homepage from '@/app/component/pages/homepage';
import ProductsList from '@/app/component/pages/products/productslist';
import axios from 'axios';
import {  useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.airtable.com/v0/appVLQqhdM9zgCg2B/products", {
          headers: {
            Authorization: `Bearer pat0Hwe7QzAbOMV86.83b9ee39aa84792ed0f7a96d6dc60e2c84ec7ea7304b85af755c1aaff039c983`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);  // Kiểm tra dữ liệu trả về
        setData(response.data);  // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 
  return (
    <div className='container my-14'>
        <h1 className='text-2xl font-semibold mb-8  '>Tất cả sản phẩm </h1>
      {data && <ProductsList data={JSON.stringify(data)} />}
    </div>
  );
};

export default Products;
