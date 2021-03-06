/* eslint-disable react-hooks/exhaustive-deps */
import {
	createContext, ReactNode, useContext, useEffect,
} from "react";

// next
import { useRouter } from "next/router";

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
	const router = useRouter()

	useEffect(() => {
		disclosure.onClose()
	}, [router.asPath])
	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	)
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
