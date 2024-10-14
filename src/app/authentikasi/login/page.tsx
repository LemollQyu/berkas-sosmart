"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import postLogin from "@/api/login";
import BackNav from "../../components/backNavigasi";
import saveAccount from "@/cookie/saveAccount";

type LoginResponse = {
  code: number;
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
    username: string;
    email: string;
    phone: string;
  };
};

const Login = () => {
  const [emailPhone, setEmailPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [resData, setResData] = useState<any>(null);
  const [resErr, setResErr] = useState<any>(null);

  // const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const data = { emailPhone, password };

    try {
      const response = await postLogin({
        account: emailPhone,
        password: password,
      });

      const dataResponse: LoginResponse = response.data;

      console.log(dataResponse);
      setResData(dataResponse);

      console.log(dataResponse.code);
      console.log(dataResponse.message);

      await saveAccount(dataResponse.data);

      router.push("/");
    } catch (error: any) {
      console.log(error.response);
      setResErr(error.response);
    }
  };

  useEffect(() => {
    console.log(resErr);
  }, [resErr]);

  const SpanError = () => {
    {
      if (
        resErr !== null &&
        resErr.data.code > 400 &&
        resErr.data.code <= 500
      ) {
        return (
          <>
            <p className="text-red-400">{resErr.data.message}</p>
          </>
        );
      }
    }
  };

  return (
    <>
      <BackNav />
      <div className="  page flex flex-col gap-12 font-nunito bottom-10 absolute left-1/2 -translate-x-1/2">
        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src="/image/parrot.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
            <span className="absolute text-xs left-2 top-0">
              Nomor ponsel atau email
            </span>
            <input
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
              type="text"
              className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
            />
            <div className="w-full pt-1">
              <p className="text-red-400 text-xs underline">
                {resErr && resErr.data.error?.account?.[0] !== undefined
                  ? resErr.data.error.account[0]
                  : ""}
              </p>
            </div>
          </div>

          <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative mt-2">
            <span className="absolute text-xs left-2 top-0">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="font-bold w-full h-full bg-[#f1f1f1] outline-none"
            />
            <div className="w-full pt-1">
              <p className="text-red-400 text-xs underline">
                {resErr && resErr.data.error?.password?.[0] !== undefined
                  ? resErr.data.error.password[0]
                  : ""}
              </p>
            </div>
          </div>

          <p className="text-red-400 text-xs underline">
            {resData && resData.message !== undefined ? resData.message : ""}
          </p>

          <button className="w-full text-white  mt-5 rounded-lg h-[50px] flex items-center justify-center bg-[#51D7B1]">
            Masuk
          </button>
          <p className="text-center font-bold">
            <Link
              href={"/authentikasi/lupa-sandi"}
              className="font-bold text-blue-500"
            >
              Lupa kata sandi?
            </Link>
          </p>
        </form>

        <SpanError />

        <Link
          href={"/authentikasi/registrasi"}
          className="bg-[#51D7B1] flex justify-center space-x-4 py-3  rounded-md border"
        >
          <span className="font-nunito text-white">Buat akun baru</span>
        </Link>
      </div>
    </>
  );
};

export default Login;
