import { createContext, ReactNode, useContext } from "react";

// chakra
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

// interfaces
interface SidebarDrawerProviderProps {
  children: ReactNode
}

// type
type SidebarDrawerContextData = UseDisclosureReturn

// context
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

//--------------------------
// Export
//--------------------------
export function SidebarDrawerProvider({
	children,
}:SidebarDrawerProviderProps) {
	const disclosure = useDisclosure()
	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	)
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
