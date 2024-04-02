"use client";

import { fogao } from "@/stores";
import { useStore } from "zustand";

const Lampada = () => {
  const { setLuz, luz } = useStore(fogao);
  return (
    <div
      style={{
        backgroundColor: luz ? "yellow" : "gray",
        width: 20,
        height: 40,
        left: 12,
        position: "relative",
        // zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: luz ? "yellow" : "gray",
          borderRadius: 50,
          position: "absolute",
          top: 8,
          left: -9,
          width: 40,
          height: 40,
          // zIndex: 50,
        }}
      ></div>
    </div>
  );
};

export default Lampada;
