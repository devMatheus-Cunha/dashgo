import React, { cloneElement, ReactElement } from "react";

// next
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

// interface
interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

//--------------------------
// Export
//--------------------------
export const ActiveLink = ({
	children,
	shouldMatchExactHref = false,
	...rest
}: IActiveLinkProps) => {
	// hooks
	const { asPath } = useRouter()

	let isActive = false

	if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
		isActive = true
	}

	if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
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
	);
};
