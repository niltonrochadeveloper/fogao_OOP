import React, { useRef, useState } from "react";
import { Arroz, Feijao, CarneVermelha, Frango } from "@/components/comidas";
import { UseBotoes } from "@/hooks";

const Boca3 = () => {
  const { ligaBoca3, content3, setContent3 } = UseBotoes();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const cont3 = useRef(null);

  const handleSelect = (comida: React.ReactNode) => {
    setContent3(comida);
    setOpenModal(false);
  };

  return (
    <>
      <div
        ref={cont3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          onClick={() => setOpenModal(true)}
          style={{
            backgroundColor: ligaBoca3 ? "red" : "black",
            position: "absolute",
            width: 60,
            height: 60,
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              backgroundColor: "gray",
              position: "absolute",
              cursor: "pointer",
              overflow: "hidden",
              width: 48,
              height: 48,
              borderRadius: 50,
            }}
          >
            {content3}
          </div>
        </div>
      </div>
      {openModal && (
        <div
          style={{
            flexDirection: "column",
            gap: 4,
            padding: 12,
            position: "absolute",
            zIndex: 100,
            backgroundColor: "white",
            top: "80px",
            left: "20px",
          }}
        >
          <p onClick={() => handleSelect(<Arroz />)}>Arroz</p>
          <p onClick={() => handleSelect(<Feijao />)}>Feijão</p>
          <p onClick={() => handleSelect(<CarneVermelha />)}>Carne Vermelha</p>
          <p onClick={() => handleSelect(<Frango />)}>Frango</p>
          <p onClick={() => handleSelect(null)}>Tirar Prato</p>
          <button onClick={() => setOpenModal(false)}>Fechar</button>
        </div>
      )}
    </>
  );
};

export default Boca3;
