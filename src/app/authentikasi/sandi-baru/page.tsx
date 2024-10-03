"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import NavBack from "../../components/backNavigasi";
import React from "react";
import passNew from "@/api/password-new";

const SandiBaru = (e: React.FormEvent) => {
  const router = useRouter();

  const [pass, setPass] = useState<string>("");
  const [passKonf, setKonfPass] = useState<string>("");

  const searchParams = useSearchParams();
  const otpId = searchParams.get("otpId");
  const userId = searchParams.get("userId");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log({ pass, passKonf });
    console.log({ otpId });
    console.log({ userId });

    try {
      const response = await passNew({
        otps_id: otpId || "",
        users_id: userId || "",
        new_password: pass,
        new_password_confirmation: passKonf,
      });

      console.log(response.data);
    } catch (e: any) {
      console.log(e.response);
    }
  };

  return (
    <>
      <NavBack />
      <div className="auth page flex  flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2  top-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-center font-nunitoBold">
            Lupa Kata Sandi
          </h1>
          <span className="w-full text-center text-md px-10">
            <p className="font-nunitoLight">Masukan email untuk mereset </p>
            <p className="font-nunitoLight">kata sandi</p>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex w-[312px] flex-col gap-4">
          <div className=" w-full h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative ">
            <span className="absolute text-xs left-2 top-0">Password baru</span>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
            />
          </div>

          <div className=" w-full h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative ">
            <span className="absolute text-xs left-2 top-0">
              Konfirmasi password baru
            </span>
            <input
              value={passKonf}
              onChange={(e) => setKonfPass(e.target.value)}
              type="password"
              className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
            />
          </div>

          <button className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black absolute bottom-0">
            Reset kata sandi
          </button>

          {/* <Link
            href={"/authentikasi/lupa-sandi/kode-otp"}
            className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black absolute bottom-0"
          >
            Reset kata sandi
          </Link> */}
        </form>
      </div>
    </>
  );
};

export default SandiBaru;
