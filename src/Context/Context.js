import React, { useContext, useState } from "react";
const ThroneContext = React.createContext();

function AppProvider({ children }) {
  const [logged, setLogged] = useState(false);
  return (
    <ThroneContext.Provider
      value={{
        logged,
        setLogged,
      }}
    >
      {children}
    </ThroneContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(ThroneContext);
};
export default AppProvider;
