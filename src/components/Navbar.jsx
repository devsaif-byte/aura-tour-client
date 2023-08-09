import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../firebase/useFirebase";
import { Fragment } from "react";
// import { MenuAlt1Icon } from "@heroicons/react/outline";
const Navbar = () => {
	const { googleUser, logOut } = useFirebase();
	const handleSignOut = async () => await logOut();
	return (
		<>
			<nav className="body-font text-gray-700 bg-slate-100 bg-opacity-60">
				<div className="container-xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
							viewBox="0 0 24 24"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>

						<span className="ml-3 text-xl">Aura Tour</span>
					</a>
					<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
						<NavLink className="mr-5 hover:text-gray-900">Home</NavLink>
						<Link className="mr-5 hover:text-gray-900" to="/plans">
							Pricing
						</Link>
					</nav>
					<div className="flex justify-center">
						{/* change here */}
						{googleUser?.email ? (
							<Menu as="div" className="relative">
								<Menu.Button type="button">
									<img
										src={googleUser?.photoURL}
										alt="avatar"
										className="inline-block h-8 w-8 rounded-full"
									/>
								</Menu.Button>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-slate-100 py-3 focus:outline-none">
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active ? "bg-muted-1 text-heading" : "text-text"
													} flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
												>
													Profile
												</button>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active ? "bg-muted-1 text-heading" : "text-text"
													} flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
												>
													My Orders
												</button>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<button
													onClick={handleSignOut}
													className={`${
														active ? "bg-muted-1 text-heading" : "text-text"
													} flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
												>
													Logout
												</button>
											)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu>
						) : (
							<button className="inline-flex text-white font-bold bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-sm">
								<Link to="/register">Register/Sign In</Link>
							</button>
						)}

						{/* change here */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
