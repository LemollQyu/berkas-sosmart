"use server";

import { cookies } from "next/headers";

export default async function getToken() {
  const cookieStore = cookies();
  const accesToken = cookieStore.get("acces-token");

  return accesToken;
}
