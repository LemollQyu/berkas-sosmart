"use client";
import BackNav from "@/app/components/backNavigasi";
import NavBar from "@/app/layouts/navbar";
import Image from "next/image";
import NumberInputWithSlider from "../components/detail-produk/inputBarProgres";
import { useState } from "react";
import DescProduct from "../components/detail-produk/descProduk";
import PenilaianUlasan from "../components/detail-produk/penilaian-ulasan";
import EtalaseToko from "../components/detail-produk/etalase-toko";
import ProdukSerupa from "../components/detail-produk/produk-serupa";

const products = () => {
  const [tinggi, setTinggi] = useState<string>("h-0");
  const [count, setCount] = useState<number>(0);

  // handle kesempatan

  const handleKesempatan = () => {
    console.log("kesempatan");
  };

  // tutup function handle kesempatan

  const handleClickVariant = () => {
    console.log("ada");
    setTinggi(" h-[444px]");
  };

  const handleCloseVariant = () => {
    console.log("close");
    setTinggi("h-0");
  };

  const handleMin = () => {
    if (count != 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <NavBar>
        <main className="bg-white pt-20 ">
          <BackNav />
          <div className="border-blue-400 relative">
            {/* Slider */}
            <div className=" rounded-md overflow-hidden bg-stone-200 w-[312px] h-[312px] mx-auto ">
              <Image
                src={"/image/parrot.jpg"}
                alt="hello world"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <span className="py-2 absolute right-5 text-xs font-nunitoLight">
              50 Terjual
            </span>
          </div>
          {/* Tutup Slider */}

          {/* harga dan star */}

          <div className="mt-8  items-center  flex justify-between px-5 mt-5">
            <h1 className="text-sm font-nunitoBold">
              Rp. 500.000 - Rp. 600.000
            </h1>

            {/* star */}

            <div className="flex gap-2 h-[24px] items-center">
              <div className="rounded-full border-[1.5px] flex items-center gap-2 px-2 py-[2px] h-full  border-[#A9A9A9]">
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
                <div className="inline-block w-[2px] h-[16px] rounded-md bg-[#A9A9A9]"></div>
                <p className="text-xs  text-[#A9A9A9] font-nunitoBold">40</p>
              </div>

              {/* tutup star */}

              {/* Share produk */}

              <div className=" rounded-md  h-[24px] w-[24px] border-[1.5px] flex justify-center items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.65085 8.92736L4.20148 7.5913C3.77568 8.04635 3.16975 8.33073 2.4974 8.33073C1.20873 8.33073 0.164062 7.28604 0.164062 5.9974C0.164062 4.70873 1.20873 3.66406 2.4974 3.66406C3.16972 3.66406 3.77563 3.94841 4.20142 4.40341L6.65085 3.06739C6.60505 2.88497 6.58073 2.69402 6.58073 2.4974C6.58073 1.20873 7.62542 0.164062 8.91406 0.164062C10.2027 0.164062 11.2474 1.20873 11.2474 2.4974C11.2474 3.78606 10.2027 4.83073 8.91406 4.83073C8.24171 4.83073 7.6358 4.54636 7.20997 4.09133L4.7606 5.42736C4.8064 5.60977 4.83073 5.80075 4.83073 5.9974C4.83073 6.19404 4.80641 6.38496 4.76062 6.56737L7.21003 7.90344C7.6358 7.44844 8.24171 7.16406 8.91406 7.16406C10.2027 7.16406 11.2474 8.20875 11.2474 9.4974C11.2474 10.786 10.2027 11.8307 8.91406 11.8307C7.62542 11.8307 6.58073 10.786 6.58073 9.4974C6.58073 9.30075 6.60505 9.10977 6.65085 8.92736ZM2.4974 7.16406C3.14173 7.16406 3.66406 6.64175 3.66406 5.9974C3.66406 5.35305 3.14173 4.83073 2.4974 4.83073C1.85306 4.83073 1.33073 5.35305 1.33073 5.9974C1.33073 6.64175 1.85306 7.16406 2.4974 7.16406ZM8.91406 3.66406C9.55841 3.66406 10.0807 3.14173 10.0807 2.4974C10.0807 1.85306 9.55841 1.33073 8.91406 1.33073C8.26971 1.33073 7.7474 1.85306 7.7474 2.4974C7.7474 3.14173 8.26971 3.66406 8.91406 3.66406ZM8.91406 10.6641C9.55841 10.6641 10.0807 10.1417 10.0807 9.4974C10.0807 8.85305 9.55841 8.33073 8.91406 8.33073C8.26971 8.33073 7.7474 8.85305 7.7474 9.4974C7.7474 10.1417 8.26971 10.6641 8.91406 10.6641Z"
                    fill="#A9A9A9"
                  />
                </svg>
              </div>
            </div>

            {/* tutip share produk  */}
          </div>
          <div className="w-full  flex gap-2  px-5">
            <p className="text-[#A9A9A9] text-[10px] font-nunitoLight text-bold line-through">
              Rp 800.000-900.000
            </p>
            <p className="text-[10px] font-nunito text-[#EE443F]">14% Hemat</p>
          </div>

          {/* Tutup harga dan star*/}

          {/* name produk */}

          <h1 className="px-5 mt-2 text-[12px] font-nunitoBold">
            Sepatu Anak | Sepatu Remaja Kegembiraan Untuk Pendidikan Anak
            Sekolah | Sepatu Laki-Laki, Perempuan
          </h1>

          {/* tutup name produk */}

          {/* varian tersedia */}

          <div className="px-5 w-full my-4 py-3 flex justify-between">
            <p className="text-[10px] ">Varian tersedia</p>
            <div onClick={handleClickVariant} className="">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.35466 4.27609C6.13903 4.44859 6.10407 4.76324 6.27658 4.97887L8.69337 7.99986L6.27658 11.0208C6.10407 11.2365 6.13903 11.5511 6.35466 11.7236C6.57029 11.8961 6.88494 11.8612 7.05745 11.6455L9.72411 8.3122C9.8702 8.12959 9.8702 7.87012 9.72411 7.68751L7.05745 4.35417C6.88494 4.13854 6.57029 4.10358 6.35466 4.27609Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
          </div>

          {/* tutup varian tersedia */}

          {/* foto variant */}

          <div className="w-full  px-5 flex gap-[10px]">
            <div className="w-[64px] h-[64px] rounded-md overflow-hidden">
              <Image
                src="/image/parrot.jpg"
                alt="hallo"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[64px] h-[64px] rounded-md overflow-hidden">
              <Image
                src="/image/parrot.jpg"
                alt="hallo"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[64px] h-[64px] rounded-md overflow-hidden">
              <Image
                src="/image/parrot.jpg"
                alt="hallo"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* tutup foto variant */}

          {/* discount */}

          <div className="mt-[21px] w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="pl-5 flex gap-2 w-[1000px]">
              <div className="w-[212px] h-[64px] border rounded-lg bg-gradient-to-r from-[#83E69B] to-[#00BAE1] py-2 px-2">
                <div className="flex w-full justify-between">
                  <h1 className="text-[14px] text-white font-nunitoBold">
                    Rp. 20.000
                  </h1>
                  <h1 className="text-white text-[12px] font-nunitoBold">
                    S&K
                  </h1>
                </div>
                <p className="text-[8px] font-nunitoLight text-white">
                  Belanja Min 200.000
                </p>
                <p className="text-[8px] font-nunitoLight text-white">
                  Berlaku hingga 30 September
                </p>
              </div>

              <div className="w-[212px] h-[64px] border rounded-lg bg-gradient-to-r from-[#83E69B] to-[#00BAE1] py-2 px-2">
                <div className="flex w-full justify-between">
                  <h1 className="text-[14px] text-white font-nunitoBold">
                    Rp. 20.000
                  </h1>
                  <h1 className="text-white text-[12px] font-nunitoBold">
                    S&K
                  </h1>
                </div>
                <p className="text-[8px] font-nunitoLight text-white">
                  Belanja Min 200.000
                </p>
                <p className="text-[8px] font-nunitoLight text-white">
                  Berlaku hingga 30 September
                </p>
              </div>

              <div className="w-[212px] h-[64px] border rounded-lg bg-gradient-to-r from-[#83E69B] to-[#00BAE1] py-2 px-2">
                <div className="flex w-full justify-between">
                  <h1 className="text-[14px] text-white font-nunitoBold">
                    Rp. 20.000
                  </h1>
                  <h1 className="text-white text-[12px] font-nunitoBold">
                    S&K
                  </h1>
                </div>
                <p className="text-[8px] font-nunitoLight text-white">
                  Belanja Min 200.000
                </p>
                <p className="text-[8px] font-nunitoLight text-white">
                  Berlaku hingga 30 September
                </p>
              </div>

              <div className="w-[212px] h-[64px] border rounded-lg bg-gradient-to-r from-[#83E69B] to-[#00BAE1] py-2 px-2">
                <div className="flex w-full justify-between">
                  <h1 className="text-[14px] text-white font-nunitoBold">
                    Rp. 20.000
                  </h1>
                  <h1 className="text-white text-[12px] font-nunitoBold">
                    S&K
                  </h1>
                </div>
                <p className="text-[8px] font-nunitoLight text-white">
                  Belanja Min 200.000
                </p>
                <p className="text-[8px] font-nunitoLight text-white">
                  Berlaku hingga 30 September
                </p>
              </div>
            </div>
          </div>

          {/* ajukan negosiasi */}
          <div className="mt-[20px] border-y-[6px] border-[#f1f1f1] h-[84px] w-full px-5 py-[10px]">
            <h1 className=" font-nunitoBold text-[12px]">Ajukan Negosiasi</h1>

            <div className="mt-[8px]">
              <NumberInputWithSlider />
            </div>
          </div>
          {/* tutup negosiasi */}

          {/* deskripsi produk */}

          <DescProduct />

          {/* akhir deskripsi produk */}

          {/* tutup discount */}
        </main>

        {/* variant pop up */}
        <div
          className={`w-[360px] z-30 fixed bottom-[44px] border rounded-md  ${tinggi} bg-[#fff] transition-all duration-1000 overflow-hiden`}
        >
          <div className="px-5 border-b-2  w-full h-[288px]">
            <div className="flex w-full h-10  items-center justify-between ">
              <h1 className="font-nunitoBold text-[16px]">Variant Tesedia</h1>

              <div className="" onClick={handleCloseVariant}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99976 5.46871L12.362 0.106445L13.8941 1.63851L8.53181 7.00076L13.8941 12.3629L12.362 13.895L6.99976 8.53281L1.63754 13.895L0.105469 12.3629L5.46771 7.00076L0.105469 1.63851L1.63754 0.106445L6.99976 5.46871Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            {/* variant warna */}

            <div>
              <p className="font-nunitoLight font-bold text-[12px]">
                Warna : Hitam, Putih, Biru
              </p>
            </div>

            {/* tutup variant warna */}

            {/* gambar variant */}

            <div className=" h-[80px] flex gap-3 mt-[6px]">
              <div className="w-[80px] h-[80px] rounded-md overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src="/image/parrot.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div className="w-[80px] h-[80px] rounded-md  overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src="/image/parrot.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div className="w-[80px] h-[80px] rounded-md overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src="/image/parrot.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
            </div>

            {/* tutup variant gambar */}

            {/* variant Ukuran */}

            <div className="w-full mt-5">
              <p className="text-[12px] font-nunito">Ukuran</p>
            </div>

            <div className="w-full gap-2 flex mt-5  items-center">
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                18
              </div>
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                19
              </div>
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                20
              </div>
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                21
              </div>
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                22
              </div>
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                23
              </div>
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                24
              </div>
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                25
              </div>
              <div className="w-[30px] h-[30px] text-[16px] border-2 border-[#08A9A8] rounded flex justify-center items-center">
                26
              </div>
            </div>

            {/* tutup variant ukuran */}

            <div className=" mt-[18px]">
              <p className="font-nunitoBold text-[12px] pb-[16px]">Stok : 21</p>
            </div>
          </div>

          <div className="flex justify-between px-5 mt-[26px]">
            {/* kuantitas */}
            <h1 className="font-nunito text-[12px]">Kuantitas</h1>
            {/* tutup kuantitas */}

            {/* count produk */}
            <div className=" flex gap-2 items-center">
              <div
                onClick={handleMin}
                className="flex justify-center items-center  w-[18px] h-[18px] bg-[#08A9A8]"
              >
                <span className="inline-block bg-white w-1/2 h-[2px] "></span>
              </div>

              <div className="w-[20px] h-[20px] rounded-sm border border-[#08A9A8] flex justify-center items-center">
                <p className="font-nunito text-[10px] text-[#08A9A8]">
                  {count}
                </p>
              </div>

              <div
                onClick={handlePlus}
                className="flex justify-center items-center relative  w-[18px] h-[18px] bg-[#08A9A8]"
              >
                <span className="inline-block bg-white w-1/2 h-[2px] "></span>
                <span className="absolute inline-block bg-white w-1/2 h-[2px] rotate-90"></span>
              </div>
            </div>

            {/* Akhir count produk */}
          </div>
          {/* harga kuantias */}
          <h1 className="pl-5 font-nunito text-[14px]">Rp. 500.000</h1>

          {/* tutup harga kuantitas */}

          {/* button beli sekarang*/}
          <div className="w-full flex justify-center mt-[20px]">
            <button className="w-[312px] bg-[#51D7B1] h-[48px] rounded-md text-center font-nunitoBold text-[#fff] ">
              Beli Sekarang
            </button>
          </div>

          {/* tutup beli sekarang */}
        </div>

        {/* tutup variant pop up */}

        {/* pop up Negosiasi */}
        <div className="hidden w-[360px] h-[320px] border rounded-md px-5 flex flex-col items-center gap-3 py-[30px]">
          {/* lingkaran warning*/}

          <div className="bg-[#F4827F] w-[100px] h-[100px] rounded-full flex justify-center items-center">
            <h1 className="text-white text-[40px] font-nunitoBold">1</h1>
          </div>

          {/* tutup lingkaran warning */}

          {/* kesempatan */}
          <div>
            <h1 className="text-center font-nunitoBold text-[24px]">
              Kesempatan sisa
            </h1>
            <p className="font-nunito text-[14px] text-center">
              Kesempatan negosiasi telah mencapai batas <span>2X</span> Silakan
              coba lagi nanti !
            </p>
          </div>

          {/* tutup kesempatan */}

          <div>
            <button
              onClick={handleKesempatan}
              className="w-[312px] bg-[#51D7B1] h-[48px] rounded-md text-center font-nunitoBold text-[#fff] "
            >
              Oke
            </button>
          </div>
        </div>
        {/* Akhir Pop up negosiasi */}

        {/* Penilaian dan ulasan */}
        <div className="mt-[10px]">
          <PenilaianUlasan />
        </div>

        {/* tutup penialaian dan ulasan  */}

        {/* toko */}

        <div className="w-full h-[82px] border-b-[6px] border-[#f1f1f1] flex justify-between items-center px-5">
          <div className="flex gap-[10px] ">
            <div className="rounded-md  w-[42px] h-[42px] bg-[#f1f1f1]"></div>
            <div className="flex justify-between flex-col">
              <div className="flex gap-[10px]">
                <div className="w-[25px] h-[19px] bg-[#09CBCA] flex justify-center items-center rounded-md border">
                  <p className="text-[10px] text-[#fff] font-nunitoBold">SS</p>
                </div>
                <h1 className="text-[12px] font-nunitoBold">Toko Bangunan</h1>
              </div>
              <div className="flex items-center gap-[5px]">
                <p className="font-nunitoLight text-[10px]">Online</p>
                <p className="font-nunito text-[10px] text-[#51D7B1]">
                  12 Menit lalu
                </p>
              </div>
            </div>
          </div>
          <div className="w-[40px] h-[20px] bg-gradient-to-r from-[#83E69B] to-[#00BAE1] justify-center flex items-center rounded-md text-[10px] font-nunitoBold text-white">
            Ikuti
          </div>
        </div>

        {/* akhir toko */}

        {/* etalase toko */}

        <EtalaseToko />

        {/* tutup etalase toko */}

        {/* produk serupa */}

        <ProdukSerupa />

        {/* tutup produk serupa */}

        {/* navbar belanja keranjang */}
        <div className="fixed bottom-11 h-[41px] bg-white w-[360px] flex  justify-between items-center px-5">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4.00436 6.91686L0.761719 3.67422L2.17593 2.26001L5.41857 5.50265H20.6603C21.2126 5.50265 21.6603 5.95037 21.6603 6.50265C21.6603 6.59997 21.6461 6.69678 21.6182 6.79L19.2182 14.79C19.0913 15.213 18.7019 15.5027 18.2603 15.5027H6.00436V17.5027H17.0044V19.5027H5.00436C4.45207 19.5027 4.00436 19.0549 4.00436 18.5027V6.91686ZM6.00436 7.50265V13.5027H17.5163L19.3163 7.50265H6.00436ZM5.50436 23.5027C4.67593 23.5027 4.00436 22.8311 4.00436 22.0027C4.00436 21.1742 4.67593 20.5027 5.50436 20.5027C6.33279 20.5027 7.00436 21.1742 7.00436 22.0027C7.00436 22.8311 6.33279 23.5027 5.50436 23.5027ZM17.5044 23.5027C16.6759 23.5027 16.0044 22.8311 16.0044 22.0027C16.0044 21.1742 16.6759 20.5027 17.5044 20.5027C18.3328 20.5027 19.0044 21.1742 19.0044 22.0027C19.0044 22.8311 18.3328 23.5027 17.5044 23.5027Z"
                fill="#51D7B1"
              />
            </svg>
          </div>
          <div className="flex gap-2 ">
            <div className="w-[141px] border rounded-lg h-[26px] bg-[#C5F2E5] border-[#09CBCA] border text-center flex justify-center items-center text-[#09CBCA] text-[12px]">
              Masukan Keranjang
            </div>

            <button className="w-[105px] h-[26px] bg-[#51D7B1] rounded-md">
              <p className="text-white font-nunito text-[12px] text-center">
                Beli Sekarang
              </p>
            </button>
          </div>
        </div>
        {/* tutup navbar belanja keranjang */}

        <div className="h-[70px] w-full border"></div>
      </NavBar>
    </>
  );
};

export default products;
