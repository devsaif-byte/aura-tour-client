import React, { useEffect, useState } from "react";
import cardImage1 from "../assets/images/card-1.jpg";
import PlansPricingCard from "./PlansPricingCard";
const Plans = () => {
	const [data, setData] = useState([]);
	// console.log(data);
	useEffect(() => {
		fetch("http://localhost:5000/data")
			.then((res) => res.json())
			.then((api) => {
				setData(api);
			});
	}, []);

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto box-border h-full">
					<div className="flex flex-col text-center w-full mb-10">
						<h1 className="sm:text-3xl text-6xl font-bold title-font mb-4 text-burntSienna">
							We Offering
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							haven't heard of them man bun deep jianbing selfies heirloom.
						</p>
					</div>
					<div className="flex flex-wrap -m-4">
						{data.map((cardData) => {
							return (
								<PlansPricingCard
									key={cardData._id}
									id={cardData._id}
									title={cardData.title}
									location={cardData.location}
									description={cardData.description}
									price={cardData.price}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Plans;
