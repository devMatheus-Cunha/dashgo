import React, { cloneElement, ReactElement } from "react";

// next
import Link, { LinkProps } from "next/link"

// interface
interface IActiveLinkProps extends LinkProps {
  children: ReactElement
}

//--------------------------
// Export
//--------------------------
export const ActiveLink = ({ children, ...rest }: IActiveLinkProps) => {
	const isActive = true
	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? "pink.400" : "gray.50",
			})}
		</Link>
	)
}
