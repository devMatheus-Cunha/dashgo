import React, { cloneElement, ReactElement } from "react";

// next
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";

// interface
interface IActiveLinkProps extends LinkProps {
  children: ReactElement
}

//--------------------------
// Export
//--------------------------
export const ActiveLink = ({ children, ...rest }: IActiveLinkProps) => {
	// hooks
	const { asPath } = useRouter()
	let isActive = false

	if (asPath === rest.href || asPath === rest.as) {
		isActive = true
	}

	//--------------------------
	// Return
	//--------------------------
	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? "pink.400" : "gray.50",
			})}
		</Link>
	)
}
