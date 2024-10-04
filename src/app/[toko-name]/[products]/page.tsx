"use client";
import BackNav from "@/app/components/backNavigasi";
import NavBar from "@/app/layouts/navbar";
import Image from "next/image";

const products = () => {
  return (
    <>
      <NavBar>
        <main className="bg-white pt-20">
          <BackNav />
          <div className="border border-blue-400 relative">
            {/* Slider */}
            <div className=" rounded-md overflow-hidden bg-stone-200 w-[312px] h-[312px] mx-auto ">
              {/* <Image
              src={"/image/sepatu.jpg"}
              alt="hello world"
              width={500}
              height={500}
              className="w-full h-full object-fit rounded-md"
            /> */}
            </div>

            <span className=" absolute right-0 text-xs font-nunitoLight">
              50 Terjual
            </span>
          </div>
          {/* Tutup Slider */}

          {/* harga dan star */}

          <div className="border flex justify-between mt-5">
            <h1>Rp. 500.000 - Rp. 600.000</h1>

            {/* star */}
            <div className="border rounded-lg flex items-center ">
              <div>
                <div className="w-[10px] h-[10px]">
                  <Image
                    src="/icon/star-fill.png"
                    alt="hallo"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-nunitoBold text-xs">4,4</p>
              </div>
            </div>
            {/* tutup star */}
          </div>

          {/* Tutup harga dan star*/}
        </main>
      </NavBar>
    </>
  );
};

export default products;
