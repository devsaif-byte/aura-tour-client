import React from "react";
import { useLoaderData } from "react-router-dom";

const PlaceOrder = () => {
	const location = useLocation();
	// const data = useLoaderData();
	const state = location.state;
	// console.log(data);
	return (
		<>
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
							<h2 className="text-lg title-font text-gray-500 tracking-widest mb-10">
								AURA TOUR
							</h2>
							<h2 className="text-md title-font text-rose-500 tracking-widest mb-4">
								{state.title}
							</h2>
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
								{state.location}
							</h1>

							<p className="leading-relaxed mb-4">{state.description}</p>
							<div className="flex border-t border-gray-200 py-2">
								<span className="text-gray-500">Meeting point</span>
								<span className="ml-auto text-gray-900">
									Amazing Canoeing Ao Po Pier
								</span>
							</div>
							<div className="flex border-t border-gray-200 py-2">
								<span className="text-gray-500">End point</span>
								<span className="ml-auto text-gray-900">
									Ends back at the meeting point.
								</span>
							</div>
							<div className="flex border-t border-b mb-6 border-gray-200 py-2">
								<span className="text-gray-500">Start time</span>
								<span className="ml-auto text-gray-900">09:30 AM</span>
							</div>
							{/* add form start */}
							<div className="flex">
								<form className="flex flex-col bg-white py-8" action="">
									<label
										className="font-semibold text-xs"
										htmlFor="usernameField"
									>
										Name
									</label>
									<input
										className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
										type="text"
									/>
									<label
										className="font-semibold text-xs mt-3"
										htmlFor="passwordField"
									>
										Address
									</label>
									<input
										className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
										type="text"
									/>
								</form>
							</div>
							{/* add form end */}
							<div className="flex">
								<span className="title-font font-medium text-2xl text-gray-900">
									${state.price}.00
								</span>
								<button className="flex ml-auto text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded">
									Checkout
								</button>
								<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
									<svg
										fill="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
									</svg>
								</button>
							</div>
						</div>
						<img
							alt="e-commerce"
							className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
							src="https://dummyimage.com/400x400"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default PlaceOrder;
