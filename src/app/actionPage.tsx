"use client";

import { createContext, ReactNode } from "react";
import HomePage from "./components/homepage/homepage";

type HomePageType = {
  access_token: string | undefined;
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
  access_token: string;
  refresh_token: string;
  account: Account;
} | null;

export const AppContext = createContext<AppContextType>(null);

export default function ActionPage({
  access_token,
  refresh_token,
  account,
}: HomePageType) {
  return (
    <>
      <AppContext.Provider
        value={{
          access_token: access_token || "",
          refresh_token: refresh_token || "",
          account: account!,
        }}
      >
        <HomePage />
      </AppContext.Provider>
    </>
  );
}
