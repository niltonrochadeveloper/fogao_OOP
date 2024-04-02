import Image from "next/image";

const CarneVermelha = () => {
  return (
    <div>
      <Image
        src={"/images/carne_vermelha.png"}
        width={50}
        height={50}
        alt="carne vermelha"
      />
    </div>
  );
};

export default CarneVermelha;
