"use client";

import { createContext, useState } from "react";

type SidebarContextProviderProps = {
  children: React.ReactNode;
};
type SidebarContextTypes = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SidebarContext = createContext<SidebarContextTypes | null>(null);

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
