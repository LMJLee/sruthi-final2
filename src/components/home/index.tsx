import HomePageText from "@/app/assets/27.jpg";
import { motion } from "framer-motion";

import { Metadata } from "next";
import Image from "next/image";

import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/assets/sruthilogo.png";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";

type PageProps = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: PageProps) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	return (
		<section id="home" className="gap-16 bg-primary-100 py-10 md:h-full md:pb-0">
			{/* IMAGE AND MAIN HEADER */}
			<motion.div className="md:flex py-20 mx-auto w-1/2 items-center justify-center md:h-5/6" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
				{/* MAIN HEADER */}
				<div className="mt-52">
					<motion.div
						className="md:-mt-20"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.75 }}
						variants={{
							hidden: { opacity: 0, x: -100 },
							visible: { opacity: 1, x: 0 }
						}}
					>
						<div className="py-10 before:absolute before:-top-20 before:-left-20 before:z-[-1] ">
							<Image alt="home-page-text" height={500} width={500} src={Logo.src} />
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Home;
