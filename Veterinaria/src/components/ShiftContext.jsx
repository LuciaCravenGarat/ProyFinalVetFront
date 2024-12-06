import { createContext, useState } from "react";

export const ShiftContext = createContext();

export const ShiftProvider = ({ children }) => {
  const [vet, setVet] = useState(null);
  const [categorie, setCategorie] = useState(null);

  return (
    <ShiftContext.Provider value={{ vet, setVet, categorie, setCategorie }}>
      {children}
    </ShiftContext.Provider>
  );
};
