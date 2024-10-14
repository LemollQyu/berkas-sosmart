"use client";

import NavBar from "../layouts/navbar";
import LayoutFeed from "./layout";
import { useContext } from "react";

export default function Feed() {
  return (
    <>
      <NavBar>
        <LayoutFeed>
          <p>hello world</p>
        </LayoutFeed>
      </NavBar>
    </>
  );
}
