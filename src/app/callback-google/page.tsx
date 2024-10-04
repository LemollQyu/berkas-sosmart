"use client";

import { useEffect, useState } from "react";
import LayoutAuth from "../layouts/layoutAuth";
import callbackAuthGoogle from "@/api/callbackAuthGoogle";
import { useSearchParams } from "next/navigation";

const CallbackGoogle = () => {
  const searchParam = useSearchParams();
  const [code, setCode] = useState<string>("");

  const token = searchParam.get("token");

  console.log("token: ", token);

  useEffect(() => {
    async function fetchAuthGoogle() {
      try {
        console.log({
          token,
        });
        const response = await callbackAuthGoogle({
          token: token || "",
        });
        console.log(response.data);
      } catch (error: any) {
        console.log(error.response);
      }
    }

    fetchAuthGoogle();
  }, []);
  return (
    <>
      <LayoutAuth>
        <h1>Loading...</h1>
      </LayoutAuth>
    </>
  );
};

export default CallbackGoogle;
