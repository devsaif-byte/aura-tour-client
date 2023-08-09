import { Link, useNavigate } from "react-router-dom";
import cardImage1 from "../assets/images/card-1.jpg";
import { useState } from "react";
export default function PlansPricingCard({
	id,
	title,
	description,
	location,
	price,
}) {
	const { info, setInfo } = useState({
		id,
		title,
		description,
		location,
		price,
	});

	// console.log(info);

	return (
		<>
			<div className="lg:w-1/3 sm:w-1/2 p-4">
				<div className="flex relative">
					<img
						alt="gallery"
						className="absolute inset-0 w-full h-full object-cover object-center"
						src={cardImage1}
					/>
					<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
						<h2 className="tracking-widest text-sm title-font font-medium text-burntSienna mb-1">
							{title}
						</h2>
						<h1 className="title-font text-lg font-medium text-gray-900 mb-3">
							{location}
						</h1>
						<p className="leading-relaxed">{description}</p>
						<div className="flex justify-around mt-8">
							<span className="title-font font-medium text-2xl text-gray-900">
								${price}.00
							</span>
							<Link to={`plans/${id}`} state={info}>
								<button
									className="flex text-white bg-burntSienna border-0 py-2 px-6
									focus:outline-none hover:bg-orange-500 rounded"
								>
									Get Offer
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
