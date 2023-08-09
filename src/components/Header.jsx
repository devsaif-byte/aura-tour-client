import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import backgroundImage from '../assets/images/bg-2.jpg'
const Header = () => {
	const headerStyle = {
		height: "100vh",
		position: "relative",
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<>
			<section
				style={headerStyle}
				className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-70 bg-blend-screen"
			>
				<Navbar />
				<Hero />
			</section>
		</>
	);
};

export default Header;
