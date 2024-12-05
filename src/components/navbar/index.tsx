import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Link from "./Link";

import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/assets/sruthilogo.png";
import Image from "next/image";

const Navbar = () => {
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	return (
		<nav>
			<div className={`bg-primary-100 flex items-center justify-between fixed top-0 z-30 w-full py-6 wrapper`}>
				<div className={`flex items-center justify-between`}>
					<div className={`flex items-center justify-between w-full gap-16`}>
						<Image alt="home-page-text" height={75} width={75} src={Logo.src} className="home-image" />
						{/* RIGHT SIDE */}
						{isAboveMediumScreens ? (
							<div className={`flex items-center justify-between w-full`}>
								<div className={`flex items-center justify-between gap-8 text-sm`}>
									<Link page="Home" />
									<Link page="Gallery" />
									<Link page="About" />
									<Link page="Contact" />
								</div>
							</div>
						) : (
							<button className="rounded-full bg-primary-200 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
								<Bars3Icon className="h-6 w-6 text-white" />
							</button>
						)}
					</div>
				</div>
			</div>
			{/* {MOBILE MENU MODAL} */}
			{!isAboveMediumScreens && isMenuToggled && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-150 drop-shadow-xl">
					{/* CLOSE ICON */}
					<div className="flex justify-end p-12">
						<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<XMarkIcon className="h-6 w-6 text-gray-400" />
						</button>
					</div>

					{/* MENU ITEMS */}
					<div className="ml-[33%] flex flex-col gap-10 text-2xl">
						<Link page="Home" />
						<Link page="Gallery" />
						<Link page="About" />
						<Link page="Contact" />
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
