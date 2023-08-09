import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import PrivateRoute from "./Services/PrivateRoute";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<Header />
			<Plans />
			<WhyChooseUs />
			<Testimonial />
			<Footer />
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route
					path={`/plans/:id`}
					element={
						<PrivateRoute>
							<PlaceOrder />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
