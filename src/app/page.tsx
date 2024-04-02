"use client";

import { Botao, Lampada } from "@/components";
import { Luz } from "@/components/botoes";
import Acendedor from "@/components/botoes/acendedor";
import { UseBotoes } from "@/hooks";

export default function Home() {
  const {
    message,
    ligaBoca1,
    ligaBoca2,
    ligaBoca3,
    ligaBoca4,
    setLigaBoca1,
    setLigaBoca2,
    setLigaBoca3,
    setLigaBoca4,
    ligaBoca,
  } = UseBotoes();

  const startCooking = ({ numBoca }: { numBoca: number }) => {
    ligaBoca({ numBoca });
  };

  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "650px",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div>Meu Fogão</div>
      <div>{message}</div>
      <div
        id="fogao"
        style={{
          backgroundColor: "#f2f2f2",
          borderRadius: 16,
          width: 240,
          height: 340,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "80%",
          }}
        >
          <Botao.Boca1 />
          <Botao.Boca2 />
          <Botao.Boca3 />
          <Botao.Boca4 />
        </div>
        <div
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: "black",
            position: "absolute",
            bottom: 0,
            zIndex: 99,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <p
            style={{
              color: "white",
              position: "absolute",
              bottom: -6,
              fontSize: 12,
            }}
          >
            Brastemp
          </p>
          <div
            onClick={
              ligaBoca1
                ? () => setLigaBoca1(false)
                : () => startCooking({ numBoca: 1 })
            }
            style={{
              backgroundColor: ligaBoca1 ? "gray" : "white",
              width: 24,
              height: 24,
              borderRadius: 50,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                width: 12,
                height: 12,
                borderRadius: 50,
              }}
            />
          </div>
          <div
            onClick={
              ligaBoca3
                ? () => setLigaBoca3(false)
                : () => startCooking({ numBoca: 3 })
            }
            style={{
              backgroundColor: ligaBoca3 ? "gray" : "white",
              width: 24,
              height: 24,
              borderRadius: 50,
              display: "flex",
              alignItems: "flex-end",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                width: 12,
                height: 12,
                borderRadius: 50,
              }}
            />
          </div>
          <div
            onClick={
              ligaBoca2
                ? () => setLigaBoca2(false)
                : () => startCooking({ numBoca: 2 })
            }
            style={{
              backgroundColor: ligaBoca2 ? "gray" : "white",
              width: 24,
              height: 24,
              borderRadius: 50,
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                width: 12,
                height: 12,
                borderRadius: 50,
              }}
            />
          </div>
          <div
            onClick={
              ligaBoca4
                ? () => setLigaBoca4(false)
                : () => startCooking({ numBoca: 4 })
            }
            style={{
              backgroundColor: ligaBoca4 ? "gray" : "white",
              width: 24,
              height: 24,
              borderRadius: 50,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                width: 12,
                height: 12,
                borderRadius: 50,
              }}
            />
          </div>
          <Acendedor />
          <Luz />
        </div>
        <div
          style={{
            border: "8px solid black",
            height: "240px",
            position: "relative",
            paddingTop: 60,
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              position: "relative",
              height: "100%",
            }}
          >
            <Lampada />
          </div>
        </div>
      </div>
    </main>
  );
}
