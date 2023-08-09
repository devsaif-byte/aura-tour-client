import { useNavigate } from "react-router-dom";
import useAuth from "../firebase/hooks/useAuth";
const PrivateRoute = ({ children }) => {
	console.log(children);

	const { googleUser } = useAuth();

	googleUser.email ? children : useNavigate("login");
};

export default PrivateRoute;
