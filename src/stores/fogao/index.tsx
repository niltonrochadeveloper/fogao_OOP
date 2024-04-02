import { create } from "zustand";

interface FogaoState {
  gas: boolean;
  numeroBoca: number;
  acendedor: boolean;
  ligaBoca1: boolean;
  ligaBoca2: boolean;
  ligaBoca3: boolean;
  ligaBoca4: boolean;
  message: string;
  content1: React.ReactNode;
  content2: React.ReactNode;
  content3: React.ReactNode;
  content4: React.ReactNode;
  luz: boolean;
}

interface FogaoActions {
  setGas: (gas: boolean) => void;
  setNumeroBoca: (numeroBoca: number) => void;
  setAcendedor: (acendedor: boolean) => void;
  setLigaBoca1: (ligaBoca1: boolean) => void;
  setLigaBoca2: (ligaBoca2: boolean) => void;
  setLigaBoca3: (ligaBoca3: boolean) => void;
  setLigaBoca4: (ligaBoca4: boolean) => void;
  setMessage: (message: string) => void;
  setContent1: (content1: React.ReactNode) => void;
  setContent2: (content2: React.ReactNode) => void;
  setContent3: (content3: React.ReactNode) => void;
  setContent4: (content4: React.ReactNode) => void;
  setLuz: (luz: boolean) => void;
}

const initialState: FogaoState = {
  gas: false,
  numeroBoca: 0,
  acendedor: false,
  ligaBoca1: false,
  ligaBoca2: false,
  ligaBoca3: false,
  ligaBoca4: false,
  message: "",
  content1: null,
  content2: null,
  content3: null,
  content4: null,
  luz: false,
};

export const fogao = create<FogaoState & FogaoActions>()((set, get) => ({
  ...initialState,
  setGas: (gas) => set((state) => ({ gas: gas })),
  setNumeroBoca: (numeroBoca) => set((state) => ({ numeroBoca: numeroBoca })),
  setAcendedor: (acendedor) => set((state) => ({ acendedor: acendedor })),
  setLigaBoca1: (ligaBoca1) => set((state) => ({ ligaBoca1: ligaBoca1 })),
  setLigaBoca2: (ligaBoca2) => set((state) => ({ ligaBoca2: ligaBoca2 })),
  setLigaBoca3: (ligaBoca3) => set((state) => ({ ligaBoca3: ligaBoca3 })),
  setLigaBoca4: (ligaBoca4) => set((state) => ({ ligaBoca4: ligaBoca4 })),
  setMessage: (message) => set((state) => ({ message: message })),
  setContent1: (content1) => set((state) => ({ content1: content1 })),
  setContent2: (content2) => set((state) => ({ content2: content2 })),
  setContent3: (content3) => set((state) => ({ content3: content3 })),
  setContent4: (content4) => set((state) => ({ content4: content4 })),
  setLuz: (luz) => set((state) => ({ luz: luz })),
  // signOut: () => set(initialState),
}));
