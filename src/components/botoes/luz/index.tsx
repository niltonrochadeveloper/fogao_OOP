"use client";

import { useStore } from "zustand";
import { fogao } from "@/stores";

const Luz = () => {
  const { setLuz, luz } = useStore(fogao);
  return (
    <div
      onClick={() => setLuz(!luz)}
      style={{
        backgroundColor: "white",
        width: 16,
        height: 28,
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          backgroundColor: "yellow",
          width: "100%",
          height: 12,
          top: luz ? 0 : "",
          bottom: luz ? "" : 0,
        }}
      ></div>
    </div>
  );
};

export default Luz;
