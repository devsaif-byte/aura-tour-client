import React from "react";

const Hero = () => {
	return (
		<>
			<section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-16 md:py-20 xl:py-20">
				{/* <!-- text start --> */}
				<div className="relative flex flex-col items-center p-4 sm:max-w-xl lg:max-w-4xl">
					<p className="mb-4 text-center text-lg sm:text-xl md:mb-8 text-black">
						Discover amazing places at exclusive deals
					</p>
					<h1 className="mb-8 text-center text-slate-100 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl lg:text-9xl">
						Fall in love with the world
					</h1>

					<div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
						<a
							href="#"
							className="inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold outline-none transition duration-100 bg-green-500 hover:bg-green-600 text-white focus-visible:ring active:text-gray-700 md:text-base"
						>
							View All tours
						</a>
					</div>
				</div>
				{/* <!-- text end --> */}
			</section>
		</>
	);
};

export default Hero;
