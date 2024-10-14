"use client";

import { createContext, useContext, useState } from "react";
import SubNav from "./subnav";

// Definisikan tipe untuk context
interface SidebarContextType {
  isOpen: string;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<string>("dua");

  return (
    <SidebarContext.Provider value={{ isOpen }}>
      <SidebarNav />
    </SidebarContext.Provider>
  );
}

function SidebarNav() {
  let { isOpen }: any = useContext(SidebarContext);

  return (
    <div>
      <p>Home</p>

      <h1 className="font-nunitoBold"> {isOpen} </h1>
    </div>
  );
}
