import { motion } from "framer-motion";

import AboutRef from "@/app/assets/aboutref.jpg";
import Image from "next/image";

import HText from "@/app/shared/HText";
import { SelectedPage } from "@/app/shared/types";

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
		<section id="about" className="mx-auto bg-primary-100 w-full md:h-full md:pb-0 py-20 ">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
				{/* GRAPHICS AND DESC */}
				<div className="h-full w-full mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
					{/* GRAPHIC */}
					<Image className="mx-auto max-width px-8 py-8" alt="the creator" src={AboutRef.src} width={500} height={600} />
					{/* DESCRIPTION */}
					<div>
						{/* TITLE */}
						<div className="relative px-5">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstract-waves">
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
									<HText>
										MY<span className="text-primary-300"> STORY</span>
									</HText>
								</motion.div>
							</div>
						</div>
						{/* DESCRIPTION */}
						<motion.div
							className="h-full py-8"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 }
							}}
						>
							<p className="my-5 px-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<p className="mb-5 px-5">
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
