import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const router = useRouter();

  const [errors, setErrors] = useState();

  useEffect(() => setErrors(), [router]);

  return (
    <ErrorContext.Provider value={{ errors, setErrors }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
