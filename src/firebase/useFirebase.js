import {
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import initAuth from "./firebase.init";
import { useEffect, useState } from "react";

// Initialize firebase
initAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
	const [googleUser, setGoogleUser] = useState({});
	const [error, setError] = useState({});
	const auth = getAuth();

	// Google Popup
	async function googlePopup() {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			const user = result.user;
			console.log(user);
			setGoogleUser(user);
		} catch (err) {
			const errCode = err.code;
			const errMsg = err.message;
			setError([{ errMsg, errCode }]);
		}
	}
	// useEffect
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				setGoogleUser(user);
			}
		});

		return () => unsubscribe(); // Clean up the subscription
	}, []);

	// Logout
	async function logOut() {
		try {
			await signOut(auth);
			setGoogleUser({});
		} catch (err) {
			console.log(err);
		}
	}

	return { googleUser, error, googlePopup, logOut };
};
export default useFirebase;
