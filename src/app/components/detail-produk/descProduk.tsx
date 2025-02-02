"use client";

import Link from "next/link";
import { useState } from "react";

const DescProduct = () => {
  const [idActive, setIdActive] = useState("");
  const [active, setActive] = useState("");
  const [ada1, setAda1] = useState("block");
  const [ada2, setAda2] = useState("hidden");

  const [tPanduanUkuran, setPPanduanUkuran] = useState("h-[0px]");
  const [tInformasiPenting, setTinformasiPenting] = useState("h-0");
  const [panduanUkuranAda, setPanduanUkuranAda] = useState("hidden");
  const [informasiPentingAda, setInformasiPentingAda] = useState("hidden");

  const active1 = "h-[3px] left-0";
  const active2 = "h-[3px] left-1/2";

  const handleActive = (e: any) => {
    e.preventDefault();

    setIdActive(e.target.id);
    console.log(e.target.id);

    if (e.target.id == "1") {
      setActive(active1);
      setAda2("hidden");
      setAda1("block");
    } else {
      setActive(active2);
      setAda1("hidden");
      setAda2("block");
    }
  };

  function handlePanduanUkuran(event: any): void {
    event.preventDefault();

    if (tPanduanUkuran == "h-[0px]") {
      setPPanduanUkuran("h-[352px]");
      setPanduanUkuranAda("block");
    } else {
      setPPanduanUkuran("h-[0px]");
      setPanduanUkuranAda("hidden");
    }
  }
  function handleInformasiPenting(event: any): void {
    event.preventDefault();

    if (tInformasiPenting == "h-0") {
      setTinformasiPenting("h-[352px]");
      setInformasiPentingAda("block");
    } else {
      setTinformasiPenting("h-0");
      setInformasiPentingAda("hidden");
    }
  }

  return (
    <>
      <div className="px-5">
        <div
          onClick={handleActive}
          className="w-full  flex justify-between items-center mt-[10px] h-[40px]  relative"
        >
          <div
            id="1"
            className="group w-1/2  h-full  justify-center items-center flex"
          >
            <h1
              id="1"
              className="group-hover:font-bold active:font-bold font- text-[12px]"
            >
              Detail Produk
            </h1>
          </div>
          <div
            id="2"
            className="group w-1/2 h-full justify-center items-center  flex"
          >
            <h1
              id="2"
              className="group-hover:font-bold font-nunito active:font-bold text-[12px]"
            >
              Deskripsi Produk
            </h1>
          </div>

          <div
            className={`absolute z-10 bottom-0 bg-black w-1/2  ${active}  transition-all duration-1000`}
          ></div>
          <div
            className={`absolute bottom-0  bg-[#f1f1f1] h-[3px] w-full`}
          ></div>
        </div>
      </div>

      {/* detail */}

      <div className={`${ada1} px-5 mt-[10px] flex flex-col gap-2`}>
        <p className="font-nunito text-[10px]">
          <span className="font-bold">Merek :</span> Anugrah
        </p>
        <p className="font-nunito  text-[10px]">
          <span className="font-bold">Warna :</span> Hitam/Pink/Biru
        </p>
        <p className="font-nunito  text-[10px]">
          <span className="font-bold">Gaya :</span> Casual
        </p>
        <p className="font-nunito  text-[10px]">
          <span className="font-bold">Ukuran :</span> 15, 16, 17, 18
        </p>
        <p className="font-nunito  text-[10px]">
          <span className="font-bold">Keamanan Produk :</span> Produk tidak
          berhaya
        </p>

        <p className="font-nunito  text-[10px]">
          <span className="font-bold">Etalase :</span>
          <Link href={"#"} className="font-bold text-[#00BAE1]">
            Semua Etalase
          </Link>
        </p>
      </div>

      {/* akhir detail */}

      {/* diskripsi */}

      <div className={`${ada2} px-5 mt-[10px]`}>
        <p className="font-nunito text-[10px]">
          Sepatu sekolah anak ini dirancang khusus untuk memberikan kenyamanan
          dan dukungan optimal sepanjang hari. Terbuat dari bahan berkualitas
          tinggi, sepatu ini memiliki sol karet yang anti-slip, sehingga aman
          dipakai di berbagai permukaan. Bagian dalam dilengkapi dengan bantalan
          empuk yang menjaga kaki tetap nyaman, bahkan saat anak aktif bergerak.
        </p>
        <br />

        <p className="font-nunito text-[10px] mb-5 ">
          Desainnya sederhana namun modern, dengan warna-warna netral yang mudah
          dipadukan dengan seragam sekolah. Tersedia dalam berbagai ukuran untuk
          memastikan pas di kaki anak. Sepatu ini juga dilengkapi dengan perekat
          Velcro yang memudahkan anak untuk memakai dan melepasnya sendiri,
          mendukung kemandirian mereka. Cocok untuk aktivitas dalam maupun luar
          ruangan, sepatu ini adalah pilihan ideal untuk menunjang keseharian
          anak di sekolah.
        </p>

        {/* panduan ukuran */}

        <div
          onClick={handlePanduanUkuran}
          className="bg-white h-[39px] w-full p-8 border-b flex justify-center items-center mt-[12px] p-[8px]"
        >
          <div className="flex justify-between w-full items-center px-[8px]">
            <h1 className="font-nunito font-bold text-[12px]">
              Panduan Ukuran
            </h1>

            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.414315 0.303837C0.673072 -0.0118858 1.14504 -0.0630745 1.46849 0.189503L5.99997 3.72811L10.5314 0.189503C10.8549 -0.0630745 11.3269 -0.0118858 11.5856 0.303837C11.8444 0.619559 11.7919 1.08026 11.4685 1.33284L6.46849 5.23731C6.19457 5.45121 5.80536 5.45121 5.53145 5.23731L0.531445 1.33284C0.207999 1.08026 0.155558 0.619559 0.414315 0.303837Z"
                fill="#0F0F0F"
              />
            </svg>
          </div>
        </div>
        {/* tutup panduan ukuran */}

        {/* panduan ukuran dropdown */}

        <div
          className={`  ${tPanduanUkuran} transition-all duration-600 rounded-lg w-full  overflow-hidden p-[8px]`}
        >
          <div className={panduanUkuranAda}>
            <h1 className="font-nunitoBold text-[16px] text-center                      ">
              Panduan Ukuran
            </h1>

            <p className="font-nunitoLight text-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              rem ipsa voluptate molestiae, enim harum recusandae, laboriosam
              voluptatibus cumque consectetur quas adipisci explicabo expedita
              hic facilis. Non fugiat corporis saepe.
            </p>

            <p className="font-nunitoLight text-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              rem ipsa voluptate molestiae, enim harum recusandae, laboriosam
              voluptatibus cumque consectetur quas adipisci explicabo expedita
              hic facilis. Non fugiat corporis saepe.
            </p>
          </div>
        </div>

        {/* tutup panduan ukuran dropdown */}

        {/* informasi penting */}

        <div
          onClick={handleInformasiPenting}
          className="bg-white h-[39px] w-full p-8 border-b flex justify-center items-center mt-[12px] p-[8px]"
        >
          <div className="flex justify-between w-full items-center px-[8px]">
            <h1 className="font-nunito font-bold text-[12px]">
              Informasi Penting
            </h1>

            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.414315 0.303837C0.673072 -0.0118858 1.14504 -0.0630745 1.46849 0.189503L5.99997 3.72811L10.5314 0.189503C10.8549 -0.0630745 11.3269 -0.0118858 11.5856 0.303837C11.8444 0.619559 11.7919 1.08026 11.4685 1.33284L6.46849 5.23731C6.19457 5.45121 5.80536 5.45121 5.53145 5.23731L0.531445 1.33284C0.207999 1.08026 0.155558 0.619559 0.414315 0.303837Z"
                fill="#0F0F0F"
              />
            </svg>
          </div>
        </div>
        {/* tutup informasi penting */}

        {/* dropdown informasi penting */}

        <div
          className={`my-[10px] ${tInformasiPenting} transition-all duration-600 rounded-lg w-full  p-[8px]`}
        >
          <div className={informasiPentingAda}>lorem ipsum</div>
        </div>

        {/* tutup inforamsi penting */}
      </div>

      {/* akhir diskripsi */}
    </>
  );
};

export default DescProduct;
