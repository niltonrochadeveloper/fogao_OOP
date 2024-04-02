"use client";

import { UseBotoes } from "@/hooks";

const Acendedor = () => {
  const { gas, acendedor, usarAcendedor } = UseBotoes();

  return (
    <div
      id="acendedor"
      style={{
        width: 16,
        height: 28,
        borderRadius: 8,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        onClick={() => usarAcendedor()}
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: acendedor ? "" : 0,
          bottom: acendedor ? 0 : "",
          cursor: "pointer",
          borderRadius: 50,
          width: 16,
          height: 18,
        }}
      ></div>
    </div>
  );
};

export default Acendedor;
