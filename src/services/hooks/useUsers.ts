// react query
import { useQuery } from "react-query";

// api
import { api } from "../api";

// types
type Users = {
	id: string
	name: string
	email: string
	createdAt: string,
}

//--------------------------
// Export Get Data Users
//--------------------------
export async function getUsers(): Promise<Users[]> {
	const { data } = await api.get("/users");

	const users = data?.users.map((user: Users) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
				day: "2-digit",
				month: "long",
				year: "numeric",
			}),
		};
	});
	return users;
}

//--------------------------
// Export Hook
//--------------------------
export const useUsers = () => {
	return useQuery("users", getUsers, {
		staleTime: 1000 * 5, // 5 seconds
	});
}
