"use client";

import { fogao } from "@/stores";
import { useState } from "react";
import { useStore } from "zustand";

import { Arroz, Feijao, CarneVermelha, Frango } from "@/components/comidas";

const UseBotoes = () => {
  const {
    gas,
    setGas,
    numeroBoca,
    setNumeroBoca,
    acendedor,
    setAcendedor,
    ligaBoca1,
    setLigaBoca1,
    ligaBoca2,
    setLigaBoca2,
    ligaBoca3,
    setLigaBoca3,
    ligaBoca4,
    setLigaBoca4,
    message,
    setMessage,
    content1,
    setContent1,
    content2,
    setContent2,
    content3,
    setContent3,
    content4,
    setContent4,
  } = useStore(fogao);

  const ligaBoca = ({
    numBoca,
    tamanhoFogo = 1,
  }: {
    numBoca: number;
    tamanhoFogo?: number;
  }) => {
    if (numBoca > 0) {
      setNumeroBoca(numBoca);
      setGas(true);
      setMessage("gás ligado");
      console.log("gás ligado");
      setTimeout(() => {
        setGas(false);
        setMessage("");
        console.log("gás desligado");
      }, 5000);
    }
  };

  const usarAcendedor = () => {
    setAcendedor(true);
    switch (numeroBoca) {
      case 1:
        setLigaBoca1(true);
        setMessage("boca 1 ligada");
        break;
      case 2:
        setLigaBoca2(true);
        console.log("boca 2 ligada");
        break;
      case 3:
        setLigaBoca3(true);
        console.log("boca 3 ligada");
        break;
      case 4:
        setLigaBoca4(true);
        console.log("boca 4 ligada");
        break;
      default:
        break;
    }
    setTimeout(() => {
      setAcendedor(false);
    }, 150);
  };

  return {
    ligaBoca,
    usarAcendedor,
    numeroBoca,
    setNumeroBoca,
    message,
    gas,
    setGas,
    setAcendedor,
    acendedor,
    ligaBoca1,
    setLigaBoca1,
    ligaBoca2,
    setLigaBoca2,
    ligaBoca3,
    setLigaBoca3,
    ligaBoca4,
    setLigaBoca4,
    content1,
    setContent1,
    content2,
    setContent2,
    content3,
    setContent3,
    content4,
    setContent4,
  };
};

export default UseBotoes;
