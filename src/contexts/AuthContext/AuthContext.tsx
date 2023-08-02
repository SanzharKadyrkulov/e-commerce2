import React, {
	FC,
	ReactNode,
	createContext,
	useEffect,
	useState,
} from "react";
import { IAuthContextTypes, IUserCredentials } from "./types";
import { TUser } from "../../models/user";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

export const authContext = createContext<IAuthContextTypes | null>(null);

interface IAuthContextProps {
	children: ReactNode;
}

const AuthContext: FC<IAuthContextProps> = ({ children }) => {
	const [user, setUser] = useState<TUser>(null);

	async function register({ email, password }: IUserCredentials) {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (e: any) {
			console.log(e.code);
		}
	}
	async function login({ email, password }: IUserCredentials) {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (e: any) {
			console.log(e.code);
		}
	}

	async function logout() {
		try {
			await signOut(auth);
		} catch (e: any) {
			console.log(e.code);
		}
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);

	const value = {
		user,
		register,
		login,
		logout,
	};
	return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
