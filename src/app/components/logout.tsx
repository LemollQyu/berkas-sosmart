"use client";

import deleteToken from "@/cookie/deleteToken";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type PropsLogOut = {
  token: string | undefined;
};

const LogOut = ({ token }: PropsLogOut) => {
  const router = useRouter();

  useEffect(() => {
    console.log("acces: ", token);
  }, [token]);

  // Fungsi untuk mengkonsumsi API logout
  const handleLogout = async (token: string | undefined) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      // Menangani respons logout
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Logout failed");
      }
    } catch (error: any) {
      console.log("error: ", error.response);
      throw error;
    }
  };

  // Event handler untuk logout
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      // Memanggil fungsi handleLogout
      const dataResponse = await handleLogout(token);

      console.log("Logout berhasil:", dataResponse);

      await deleteToken();

      // Setelah logout, redirect ke halaman login
      router.push("/authentikasi/login");
      router.refresh();
    } catch (error: any) {
      console.error("Error saat logout:", error);
    }
  };

  return (
    <button onClick={handleClick} className="border rounded-lg px-2 py-1">
      Log out
    </button>
  );
};

export default LogOut;
