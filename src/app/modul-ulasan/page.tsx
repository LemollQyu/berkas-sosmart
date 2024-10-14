"use client";
import { useState } from "react";
import NavBar from "../layouts/navbar";

import { useRouter } from "next/navigation";
import Ulasan from "../components/modul-ulasan.tsx/ulasan";
import UlasanImage from "../components/modul-ulasan.tsx/ulasan-image";

const ModulUlasan = () => {
  const router = useRouter();

  const [selectedId, setSelectedId] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  const [tinggiFilterVideoGambar, setTinggiFilterVideoGambar] = useState("h-0");
  const [tinggiRating, setTinggiRating] = useState("h-0");
  const [tinggiUrutan, setTinggiUrutan] = useState("h-0");
  const [tinggiVariasi, setTinggiVariasi] = useState("h-0");
  const [tinggiLaporkan, setTinggiLaporkan] = useState("h-0");

  const [bintang, setBintang] = useState({
    star5: false,
    star4: false,
    star3: false,
    star2: false,
  });

  const handleChangeBintang = (e: any) => {
    const { name, checked } = e.target;
    setBintang({
      ...bintang,
      [name]: checked,
    });
  };

  const handleChooseBintang = (e: any) => {
    e.preventDefault();
    console.log("Bintang:", bintang);
    // Lakukan sesuatu dengan nilai filters, misal dikirim ke server atau digunakan di frontend
  };

  const [filters, setFilters] = useState({
    gambarVideo: false,
    label: false,
  });

  const handleChangeFilter = (e: any) => {
    console.log(filters);
    const { name, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
    // console.log(filters);
  };

  const handleChooseFilter = (e: any) => {
    e.preventDefault();
    console.log("Filters:", filters);
    // Lakukan sesuatu dengan nilai filters, misal dikirim ke server atau digunakan di frontend
  };

  const handleBack = (e: any) => {
    e.preventDefault();
    router.back();
  };

  function handleClick(e: any) {
    console.log(e.target.id);
    if (e.target.id == 2) {
      setActive(true);
      setTinggiFilterVideoGambar("h-[358px]");
    } else if (e.target.id == 3) {
      setTinggiRating("h-[358px]");
      setActive(true);
    } else if (e.target.id == 1) {
      setTinggiUrutan("h-[358px]");
      setActive(true);
    } else if (e.target.id == 4) {
      setTinggiVariasi("h-[358px]");
      setActive(true);
    }
  }

  function handleCloseUrutan() {
    if (tinggiUrutan == "h-[358px]") {
      setTinggiUrutan("h-0");
      setActive(false);
    }
  }

  function handleCloseVariasi() {
    if (tinggiVariasi == "h-[358px]") {
      setTinggiVariasi("h-0");
      setActive(false);
    }
  }

  function handleCloseFilter() {
    if (tinggiFilterVideoGambar == "h-[358px]") {
      setTinggiFilterVideoGambar("h-0");
      setActive(false);
    }
  }

  function handleCloseRating() {
    if (tinggiRating == "h-[358px]") {
      setTinggiRating("h-0");
      setActive(false);
    }
  }

  const xpUlasan = ["satu", "dua", "tiga", "empat", "lima"];
  const xpUlasanGambarVideo = ["satu", "dua", "tiga"];

  // fungsi untuk menampilkan ulasan

  function viewUlasan() {
    if (filters.label && filters.gambarVideo) {
      return (
        <>
          {
            xpUlasan.map((collect: any, index: number) => {
              return (
                <div key={index}>
                  <UlasanImage />
                  <Ulasan />
                </div>
              );
            })
            // console.log(
            //   `filter label ${filters.label} fliter video : ${filters.gambarVideo}`
            // );
          }
        </>
      );
    } else if (filters.label) {
      return (
        <>
          {xpUlasan.map((collect: any, index: number) => {
            return (
              <div key={index}>
                <Ulasan />
              </div>
            );
          })}
        </>
      );
    } else if (filters.gambarVideo) {
      return (
        <>
          {xpUlasanGambarVideo.map((collect: any, index: number) => {
            return (
              <div key={index}>
                <UlasanImage />
              </div>
            );
          })}
        </>
      );
    }
  }

  // tutup fungsi untuk menampilakan ulasan

  return (
    <>
      <NavBar>
        <div className="flex justify-center items-center relative h-[44px] w-full mt-[14px]">
          {/* back */}
          <button
            onClick={handleBack}
            className="w-[40px] h-[40px] rounded-full bg-[#f1f1f1] absolute left-5 z-10  flex justify-center items-center"
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.88421 0.414315C6.19994 0.673072 6.25112 1.14504 5.99855 1.46849L2.45993 5.99997L5.99855 10.5314C6.25112 10.8549 6.19993 11.3269 5.88421 11.5856C5.56849 11.8444 5.10779 11.7919 4.85521 11.4685L0.950737 6.46849C0.736839 6.19457 0.736839 5.80536 0.950737 5.53145L4.85521 0.531445C5.10779 0.207999 5.56849 0.155558 5.88421 0.414315Z"
                fill="#1B1E28"
              />
            </svg>
          </button>
          {/* tutup back */}
          <h1 className="text-[14px] font-nunitoBold">
            Penilaian & Ulasan Produk
          </h1>
        </div>
        <div
          onClick={handleClick}
          className="mt-[20px] border-t-2 pt-[22px] flex items-center gap-[10px] px-5 w-full"
        >
          <div
            id="1"
            className="cursor-pointer w-[72px] h-[44px] flex justify-center items-center shadow-md rounded-md"
          >
            1
          </div>
          <div
            id="2"
            className="w-[72px] cursor-pointer h-[44px] flex justify-center items-center shadow-md rounded-md"
          >
            2
          </div>
          <div
            id="3"
            className="w-[72px] h-[44px] cursor-pointer flex justify-center items-center shadow-md rounded-md"
          >
            3
          </div>
          <div
            id="4"
            className="w-[72px] h-[44px] cursor-pointer flex justify-center items-center shadow-md rounded-md"
          >
            4
          </div>
        </div>
        <div className="mt-[14px] mb-[70px] px-5 ">
          {/* Tampilan ulasan */}

          {viewUlasan()}

          {/* tutup tampilan ulasan */}
        </div>

        {/* bg gelap saat di click */}

        {active ? (
          <div
            className={`bg-[#000] opacity-25 w-full absolute -top-10 w-[360px] h-[100vh] absolute ${active}`}
          ></div>
        ) : null}

        {/* tutup bg gelap di click */}

        {/* pop up  berdasarkan urutan */}
        <form
          // onSubmit={handleChooseUrutan}
          className={` ${tinggiUrutan} z-20 rounded-t-[24px] bg-white overflow-hidden fixed bottom-[45px] left-1/2 -translate-x-1/2 w-[360px] transition-all duration-1000 flex flex-col justify-between pb-5`}
        >
          <div>
            <div className="flex justify-between items-center p-5">
              <h1 className="font-nunitoBold text-[16px]">Urutan Berdasrkan</h1>
              <div
                onClick={handleCloseUrutan}
                className="w-[24px] h-[24px] flex justify-center items-center"
              >
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

            <label className="hover:border-[#51D7B1] hover:border  w-full h-[45px] flex items-center px-5">
              <div className="flex gap-[12px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                >
                  <path
                    d="M7.75002 0.25H14.25L16.4167 2.41667H20.75C21.3483 2.41667 21.8334 2.9017 21.8334 3.5V18.6667C21.8334 19.265 21.3483 19.75 20.75 19.75H1.25002C0.651717 19.75 0.166687 19.265 0.166687 18.6667V3.5C0.166687 2.9017 0.651717 2.41667 1.25002 2.41667H5.58335L7.75002 0.25ZM11 17.5833C14.5899 17.5833 17.5 14.6732 17.5 11.0833C17.5 7.49348 14.5899 4.58333 11 4.58333C7.41017 4.58333 4.50002 7.49348 4.50002 11.0833C4.50002 14.6732 7.41017 17.5833 11 17.5833ZM11 15.4167C8.60678 15.4167 6.66669 13.4765 6.66669 11.0833C6.66669 8.69014 8.60678 6.75 11 6.75C13.3932 6.75 15.3334 8.69014 15.3334 11.0833C15.3334 13.4765 13.3932 15.4167 11 15.4167Z"
                    fill="black"
                  />
                </svg>
                <p className="text-[12px] font-nunitoBold">Paling membantu</p>

                {/* <input
                  type="checkbox"
                  name="gambarVideo"
                  checked={filters.gambarVideo}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                /> */}
              </div>
            </label>
            <label className="w-full h-[45px] flex items-center px-5 hover:border-[#51D7B1] hover:border">
              <div className="flex gap-[12px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M22.75 3.25C23.3483 3.25 23.8334 3.73503 23.8334 4.33333V19.5C23.8334 20.0983 23.3483 20.5833 22.75 20.5833H6.99294L2.16669 24.375V4.33333C2.16669 3.73503 2.65172 3.25 3.25002 3.25H22.75ZM11.3916 8.02923C9.45562 8.86908 8.12502 10.5684 8.12502 12.464C8.12502 13.5417 8.42465 14.2065 8.98271 14.7989C9.334 15.1719 9.88982 15.4375 10.4711 15.4375C11.5181 15.4375 12.3669 14.5887 12.3669 13.5417C12.3669 12.5445 11.5966 11.7421 10.6192 11.6516C10.4445 11.6353 10.2681 11.6384 10.1001 11.6615L10.1004 11.5623C10.1061 11.0849 10.2075 9.67774 11.8751 8.77543L11.3916 8.02923ZM16.8083 8.02923C14.8723 8.86908 13.5417 10.5684 13.5417 12.464C13.5417 13.5417 13.8413 14.2065 14.3994 14.7989C14.7507 15.1719 15.3065 15.4375 15.8878 15.4375C16.9348 15.4375 17.7836 14.5887 17.7836 13.5417C17.7836 12.5445 17.0132 11.7421 16.036 11.6516C15.8612 11.6353 15.6848 11.6384 15.5168 11.6615L15.517 11.5623C15.5228 11.0849 15.6242 9.67774 17.2918 8.77543L16.8083 8.02923Z"
                    fill="black"
                  />
                </svg>
                <p className="text-[12px] font-nunitoBold">Terbaru</p>
                {/* <input
                  type="checkbox"
                  name="label"
                  checked={filters.label}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                /> */}
              </div>
            </label>

            <label className="w-full h-[45px] flex items-center px-5 hover:border-[#51D7B1] hover:border">
              <div className="flex gap-[12px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M22.75 3.25C23.3483 3.25 23.8334 3.73503 23.8334 4.33333V19.5C23.8334 20.0983 23.3483 20.5833 22.75 20.5833H6.99294L2.16669 24.375V4.33333C2.16669 3.73503 2.65172 3.25 3.25002 3.25H22.75ZM11.3916 8.02923C9.45562 8.86908 8.12502 10.5684 8.12502 12.464C8.12502 13.5417 8.42465 14.2065 8.98271 14.7989C9.334 15.1719 9.88982 15.4375 10.4711 15.4375C11.5181 15.4375 12.3669 14.5887 12.3669 13.5417C12.3669 12.5445 11.5966 11.7421 10.6192 11.6516C10.4445 11.6353 10.2681 11.6384 10.1001 11.6615L10.1004 11.5623C10.1061 11.0849 10.2075 9.67774 11.8751 8.77543L11.3916 8.02923ZM16.8083 8.02923C14.8723 8.86908 13.5417 10.5684 13.5417 12.464C13.5417 13.5417 13.8413 14.2065 14.3994 14.7989C14.7507 15.1719 15.3065 15.4375 15.8878 15.4375C16.9348 15.4375 17.7836 14.5887 17.7836 13.5417C17.7836 12.5445 17.0132 11.7421 16.036 11.6516C15.8612 11.6353 15.6848 11.6384 15.5168 11.6615L15.517 11.5623C15.5228 11.0849 15.6242 9.67774 17.2918 8.77543L16.8083 8.02923Z"
                    fill="black"
                  />
                </svg>
                <p className="text-[12px] font-nunitoBold">Terlaris</p>
                {/* <input
                  type="checkbox"
                  name="label"
                  checked={filters.label}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                /> */}
              </div>
            </label>
            <label className="w-full h-[45px] flex items-center px-5 hover:border-[#51D7B1] hover:border">
              <div className="flex gap-[12px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M22.75 3.25C23.3483 3.25 23.8334 3.73503 23.8334 4.33333V19.5C23.8334 20.0983 23.3483 20.5833 22.75 20.5833H6.99294L2.16669 24.375V4.33333C2.16669 3.73503 2.65172 3.25 3.25002 3.25H22.75ZM11.3916 8.02923C9.45562 8.86908 8.12502 10.5684 8.12502 12.464C8.12502 13.5417 8.42465 14.2065 8.98271 14.7989C9.334 15.1719 9.88982 15.4375 10.4711 15.4375C11.5181 15.4375 12.3669 14.5887 12.3669 13.5417C12.3669 12.5445 11.5966 11.7421 10.6192 11.6516C10.4445 11.6353 10.2681 11.6384 10.1001 11.6615L10.1004 11.5623C10.1061 11.0849 10.2075 9.67774 11.8751 8.77543L11.3916 8.02923ZM16.8083 8.02923C14.8723 8.86908 13.5417 10.5684 13.5417 12.464C13.5417 13.5417 13.8413 14.2065 14.3994 14.7989C14.7507 15.1719 15.3065 15.4375 15.8878 15.4375C16.9348 15.4375 17.7836 14.5887 17.7836 13.5417C17.7836 12.5445 17.0132 11.7421 16.036 11.6516C15.8612 11.6353 15.6848 11.6384 15.5168 11.6615L15.517 11.5623C15.5228 11.0849 15.6242 9.67774 17.2918 8.77543L16.8083 8.02923Z"
                    fill="black"
                  />
                </svg>
                <p className="text-[12px] font-nunitoBold">Terbanyak</p>
                {/* <input
                  type="checkbox"
                  name="label"
                  checked={filters.label}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                /> */}
              </div>
            </label>
          </div>

          <button
            onClick={handleCloseUrutan}
            className="border w-[312px] h-[42px] rounded-md bg-[#51D7B1] mx-auto flex justify-center items-center"
          >
            <p className="text-white font-nunitoBold text-[14px]">Konfirmasi</p>
          </button>
        </form>
        {/* akhir pop up Filter berdasarkan urutan */}

        {/* pop up  Variasi */}
        <form
          // onSubmit={handleChooseUrutan}
          className={` ${tinggiVariasi} z-20 rounded-t-[24px] bg-white overflow-hidden fixed bottom-[45px] left-1/2 -translate-x-1/2 w-[360px] transition-all duration-1000 flex flex-col justify-between pb-5`}
        >
          <div>
            <div className="flex justify-between items-center p-5">
              <h1 className="font-nunitoBold text-[16px]">Variasi</h1>
              <div
                onClick={handleCloseVariasi}
                className="w-[24px] h-[24px] flex justify-center items-center"
              >
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

            <label className="hover:border-[#51D7B1] hover:border  w-full h-[45px] flex items-center px-5">
              <div className="flex gap-[12px] items-center">
                <p className="text-[12px] font-nunitoBold">Merah</p>

                {/* <input
                  type="checkbox"
                  name="gambarVideo"
                  checked={filters.gambarVideo}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                /> */}
              </div>
            </label>
            <label className="w-full h-[45px] flex items-center px-5 hover:border-[#51D7B1] hover:border">
              <div className="flex gap-[12px] items-center">
                <p className="text-[12px] font-nunitoBold">Kuning</p>
                {/* <input
                  type="checkbox"
                  name="label"
                  checked={filters.label}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                /> */}
              </div>
            </label>

            <label className="w-full h-[45px] flex items-center px-5 hover:border-[#51D7B1] hover:border">
              <div className="flex gap-[12px] items-center">
                <p className="text-[12px] font-nunitoBold">Biru</p>
                {/* <input
                  type="checkbox"
                  name="label"
                  checked={filters.label}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                /> */}
              </div>
            </label>
            <label className="w-full h-[45px] flex items-center px-5 hover:border-[#51D7B1] hover:border">
              <div className="flex gap-[12px] items-center">
                <p className="text-[12px] font-nunitoBold">Hijau</p>
                {/* <input
                  type="checkbox"
                  name="label"
                  checked={filters.label}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                /> */}
              </div>
            </label>
          </div>

          <button
            onClick={handleCloseVariasi}
            className="border w-[312px] h-[42px] rounded-md bg-[#51D7B1] mx-auto flex justify-center items-center"
          >
            <p className="text-white font-nunitoBold text-[14px]">Konfirmasi</p>
          </button>
        </form>
        {/* akhir pop up Variasi */}

        {/* pop up Filter berdasarkan gambar dan video */}
        <form
          onSubmit={handleChooseFilter}
          className={` ${tinggiFilterVideoGambar} z-20 rounded-t-[24px] bg-white overflow-hidden fixed bottom-[45px] left-1/2 -translate-x-1/2 w-[360px] transition-all duration-1000 flex flex-col justify-between pb-5`}
        >
          <div>
            <div className="flex justify-between items-center p-5">
              <h1 className="font-nunitoBold text-[16px]">Filter</h1>
              <div
                onClick={handleCloseFilter}
                className="w-[24px] h-[24px] flex justify-center items-center"
              >
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
            <label className="hover:border-[#51D7B1] hover:border  w-full h-[45px] flex items-center px-5">
              <div className="flex gap-[12px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                >
                  <path
                    d="M7.75002 0.25H14.25L16.4167 2.41667H20.75C21.3483 2.41667 21.8334 2.9017 21.8334 3.5V18.6667C21.8334 19.265 21.3483 19.75 20.75 19.75H1.25002C0.651717 19.75 0.166687 19.265 0.166687 18.6667V3.5C0.166687 2.9017 0.651717 2.41667 1.25002 2.41667H5.58335L7.75002 0.25ZM11 17.5833C14.5899 17.5833 17.5 14.6732 17.5 11.0833C17.5 7.49348 14.5899 4.58333 11 4.58333C7.41017 4.58333 4.50002 7.49348 4.50002 11.0833C4.50002 14.6732 7.41017 17.5833 11 17.5833ZM11 15.4167C8.60678 15.4167 6.66669 13.4765 6.66669 11.0833C6.66669 8.69014 8.60678 6.75 11 6.75C13.3932 6.75 15.3334 8.69014 15.3334 11.0833C15.3334 13.4765 13.3932 15.4167 11 15.4167Z"
                    fill="black"
                  />
                </svg>
                <p className="text-[12px] font-nunitoBold">
                  Berdasarkan Gambar dan Video
                </p>

                <input
                  type="checkbox"
                  name="gambarVideo"
                  checked={filters.gambarVideo}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                />
              </div>
            </label>
            <label className="w-full h-[45px] flex items-center px-5 hover:border-[#51D7B1] hover:border">
              <div className="flex gap-[12px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M22.75 3.25C23.3483 3.25 23.8334 3.73503 23.8334 4.33333V19.5C23.8334 20.0983 23.3483 20.5833 22.75 20.5833H6.99294L2.16669 24.375V4.33333C2.16669 3.73503 2.65172 3.25 3.25002 3.25H22.75ZM11.3916 8.02923C9.45562 8.86908 8.12502 10.5684 8.12502 12.464C8.12502 13.5417 8.42465 14.2065 8.98271 14.7989C9.334 15.1719 9.88982 15.4375 10.4711 15.4375C11.5181 15.4375 12.3669 14.5887 12.3669 13.5417C12.3669 12.5445 11.5966 11.7421 10.6192 11.6516C10.4445 11.6353 10.2681 11.6384 10.1001 11.6615L10.1004 11.5623C10.1061 11.0849 10.2075 9.67774 11.8751 8.77543L11.3916 8.02923ZM16.8083 8.02923C14.8723 8.86908 13.5417 10.5684 13.5417 12.464C13.5417 13.5417 13.8413 14.2065 14.3994 14.7989C14.7507 15.1719 15.3065 15.4375 15.8878 15.4375C16.9348 15.4375 17.7836 14.5887 17.7836 13.5417C17.7836 12.5445 17.0132 11.7421 16.036 11.6516C15.8612 11.6353 15.6848 11.6384 15.5168 11.6615L15.517 11.5623C15.5228 11.0849 15.6242 9.67774 17.2918 8.77543L16.8083 8.02923Z"
                    fill="black"
                  />
                </svg>
                <p className="text-[12px] font-nunitoBold">Berdasarkan Label</p>
                <input
                  type="checkbox"
                  name="label"
                  checked={filters.label}
                  onChange={handleChangeFilter}
                  className="form-checkbox"
                />
              </div>
            </label>
          </div>

          <button
            onClick={handleCloseFilter}
            className="border w-[312px] h-[42px] rounded-md bg-[#51D7B1] mx-auto flex justify-center items-center"
          >
            <p className="text-white font-nunitoBold text-[14px]">Konfirmasi</p>
          </button>
        </form>
        {/* akhir pop up Filter berdasarkan gambar dan video */}

        {/* pop up Filter berdasarkan rating */}
        <form
          onSubmit={handleChooseBintang}
          className={` ${tinggiRating} z-20 rounded-t-[24px] bg-white overflow-hidden fixed bottom-[45px] left-1/2 -translate-x-1/2 w-[360px] transition-all duration-1000 flex flex-col justify-between pb-5`}
        >
          <div>
            <div className="flex justify-between items-center p-5">
              <h1 className="font-nunitoBold text-[16px]">Rating</h1>
              <div
                onClick={handleCloseRating}
                className="w-[24px] h-[24px] flex justify-center items-center"
              >
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
            <label className="border w-full h-[45px] gap-[7px] flex items-center px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <input
                type="checkbox"
                name="star5"
                checked={bintang.star5}
                onChange={handleChangeBintang}
                className="form-checkbox"
              />
            </label>

            <label className="border w-full h-[45px] flex items-center px-5 gap-[7px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <input
                type="checkbox"
                name="star4"
                checked={bintang.star4}
                onChange={handleChangeBintang}
                className="form-checkbox"
              />
            </label>
            <label className="border w-full h-[45px] flex items-center px-5 gap-[7px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <input
                type="checkbox"
                name="star3"
                checked={bintang.star3}
                onChange={handleChangeBintang}
                className="form-checkbox"
              />
            </label>
            <label className="border w-full h-[45px] flex items-center px-5 gap-[7px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#F7D463"
                />
              </svg>
              <input
                type="checkbox"
                name="star2"
                checked={bintang.star2}
                onChange={handleChangeBintang}
                className="form-checkbox"
              />
            </label>
          </div>

          <button
            onClick={handleCloseRating}
            className="border w-[312px] h-[42px] rounded-md bg-[#51D7B1] mx-auto flex justify-center items-center"
          >
            <p className="text-white font-nunitoBold text-[14px]">Konfirmasi</p>
          </button>
        </form>
        {/* akhir pop up Filter berdasarkan rating */}
      </NavBar>
    </>
  );
};

export default ModulUlasan;
