import { motion } from "framer-motion";

import AboutRef from "@/assets/aboutref.jpg";
import Image from "next/image";

import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 }
	}
};

type PageProps = {
	setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: PageProps) => {
	return (
		<section id="about" className="  bg-primary-100 w-full md:h-full md:pb-0  ">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
				{/* GRAPHICS AND DESC */}
				<div className="flex flex-col  md:flex-row items-center justify-between h-full w-full md:space-x-8 space-y-8 md:space-y-0">
					{/* PHOTO */}
					<motion.div
						className="md:w-1/2 w-full flex justify-center items-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0, duration: 0.75 }}
						variants={{
							hidden: { opacity: 0, x: 50 },
							visible: { opacity: 1, x: 0 }
						}}
					>
						<div className=":max-w-md lg:max-w-lg w-full">
							<Image
								className="about-image py-20 pl-16 "
								priority
								alt="the creator"
								src={AboutRef.src}
								width={450}
								height={550}
								sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</motion.div>

					{/* TITLE & DESCRIPTION */}
					<div className="  px-10      flex-col   ">
						{/* TITLE */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.3 }}
							variants={{
								hidden: { opacity: 0, x: -50 },
								visible: { opacity: 1, x: 0 }
							}}
						>
							<div className="py-7  ">
								<HText>
									<span className="text-primary-300">My story</span>
								</HText>
							</div>
						</motion.div>

						{/* DESCRIPTION */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 }
							}}
						>
							<p className="pb-20">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								<br />
								<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
