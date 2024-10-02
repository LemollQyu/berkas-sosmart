"use server";

import { cookies } from "next/headers";

export default async function deleteToken() {
  cookies().delete("acces-token");
  cookies().delete("refresh-token");
}
