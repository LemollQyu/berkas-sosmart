"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProdukSerupa() {
  const [products, setProducts] = useState<any>("");
  const [erorr, setError] = useState<any>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<any>(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/product`,
          {
            params: {
              page: 1,
              category: 1,
            },
          }
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to load products");
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <div className="mt-[10px] w-[360px]  px-5 border-[#f1f1f1] pb-[28px]">
        <h1 className="text-[12px] font-nunitoBold ">Produk Serupa</h1>
        <div className="mt-[10px] w-full h-[50px] border">
          {/* produk serupa */}
        </div>
      </div>
    </>
  );
}
