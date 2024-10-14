"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBack from "../../components/backNavigasi";
import sendOtp from "@/api/send-otp";

const LupaPassword = (e: React.FormEvent) => {
  const router = useRouter();

  const [emailPhone, setEmailPhone] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await sendOtp({
        account: emailPhone,
      });

      console.log(response.data);
      if (response.data.code == 200) {
        router.push(`/authentikasi/lupa-sandi/kode-otp?account=${emailPhone}`);
        router.refresh();
      }
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <>
      <NavBack />
      <div className="w-[312px] flex flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2  top-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-center font-nunitoBold">
            Lupa Kata Sandi
          </h1>
          <span className="w-full text-center text-md px-10">
            <p className="font-nunitoLight">
              Masukan email untuk mereset kata sandi
            </p>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="border w-full h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative mx-auto">
            <span className="absolute text-xs left-2 top-0">
              Nomor ponsel atau email
            </span>
            <input
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
              type="text"
              className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
            />
          </div>

          <button className="w-full bg-[#51D7B1] text-white mt-5 rounded-lg h-[50px] flex items-center justify-center absolute bottom-0">
            <p className="text-white">Reset kata sandi</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default LupaPassword;
