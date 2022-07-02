import { createContext, useState } from "react";
export const FirebaseContext = createContext();
export const Contexts = createContext();

export default function Context({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [user, setuser] = useState(null);

  return (
    <Contexts.Provider value={{ isLoading, setLoading, user, setuser }}>
      {children}
    </Contexts.Provider>
  );
}
