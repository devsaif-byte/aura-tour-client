import React, { createContext } from "react";
import initAuth from "./firebase.init";
import useFirebase from "./useFirebase";
import PropTypes from "prop-types";
initAuth();
export const AuthContext = createContext(useFirebase);

const AuthProvider = ({ children }) => {
	const contexts = useFirebase();
	AuthProvider.prototypes = {
		children: PropTypes.any,
	};
	return (
		<AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
