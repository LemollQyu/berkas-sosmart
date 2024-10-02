"use client";

import { createContext, ReactNode } from "react";
import HomePage from "./components/homepage/homepage";
import UserCookie from "./layouts/userCookie";

type HomePageType = {
  acces_token: string | undefined;
  refresh_token: string | undefined;
  account: Account | null;
};

type Account = {
  username: string;
  phone: string;
  email: string;
};

// Tipe untuk AppContext
type AppContextType = {
  acces_token: string;
  refresh_token: string;
  account: Account;
} | null;

export const AppContext = createContext<AppContextType>(null);

export default function ActionPage({
  acces_token,
  refresh_token,
  account,
}: HomePageType) {
  return (
    <>
      <AppContext.Provider
        value={{
          acces_token: acces_token || "",
          refresh_token: refresh_token || "",
          account: account!,
        }}
      >
        <UserCookie>
          <HomePage />
        </UserCookie>
      </AppContext.Provider>
    </>
  );
}
