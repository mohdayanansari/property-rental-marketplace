import { SidebarContext } from "@/contexts/sidebar-context";
import { useContext } from "react";

export default function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error(
      "useSidebarContext must be used within a Sidebar Context Provider!"
    );
  }
  return context;
}
