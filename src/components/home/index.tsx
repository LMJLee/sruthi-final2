import HomePageText from "@/app/assets/27.jpg";
import { motion } from "framer-motion";
import HText from "@/app/shared/HText";
import { Metadata } from "next";
import Image from "next/image";
import { SelectedPage } from "@/app/shared/types";
import useMediaQuery from "@/app/hooks/useMediaQuery";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	return (
		<section id="home" className="gap-16 bg-primary-100 py-10 md:h-full md:pb-0">
			{/* IMAGE AND MAIN HEADER */}
			<motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
				{/* MAIN HEADER */}
				<div className="z-10 mt-32 md:basis-3/5">
					{/* HEADINGS  CUSTOMIZE TO FADE IN INSTEAD OF SLIDING*/}
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
						<HText>
							WEL<span className="text-primary-300">COME</span>
						</HText>

						<p className="mt-8 text-md">
							Welcome! My name is Sruthi and I love to crochet. <br></br> Please contact me for further inquiries!
						</p>

						<div className="relative">
							<div className="py-10 before:absolute before:-top-20 before:-left-20 before:z-[-1] ">
								<Image alt="home-page-text" height={600} width={600} src={HomePageText.src} className="home-image" />
							</div>
						</div>
					</motion.div>
					{/* ACTIONS */}
					<motion.div
						// staggered animation
						className="mt-8 flex items-center gap-8"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.75 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 }
						}}
					></motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Home;
