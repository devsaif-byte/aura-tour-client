import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const initAuth = () => {
	initializeApp(firebaseConfig);
};
export const auth = getAuth(app);

export default initAuth;
