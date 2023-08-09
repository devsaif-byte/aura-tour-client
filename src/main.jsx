import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
	useParams,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import AuthProvider from "./firebase/AuthProvider.jsx";
import Register from "./pages/Register.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./Services/PrivateRoute.jsx";

const dataLoader = async () => {
	const params = useParams();
	const result = await fetch(`http://localhost:5173/plans/${params.id}`);
	if (!result.ok) throw new Error("Something went wrong!");

	const data = await result.json();
	console.log(data)
	return { data };
};

const router = createBrowserRouter([
	{
		path: "register",
		element: <Register />,
	},
	{
		path: "login",
		element: <Login />,
	},

	{
		path: `plans/:id`,
		element: (
			<PrivateRoute>
				<PlaceOrder />
			</PrivateRoute>
		),
		// loader: () => dataLoader,
	},
	{
		path: "*",
		element: <App />,
		errorElement: <NotFound />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
