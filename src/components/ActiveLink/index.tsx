import React, { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link"

interface IActiveLinkProps extends LinkProps {
  children: ReactElement
}

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
