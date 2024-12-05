import { motion } from "framer-motion";

import AboutRef from "@/assets/aboutref.jpg";
import Image from "next/image";

import { SelectedPage } from "@/shared/types";
import HomePageSection from "../HomePageSection";

type PageProps = {
	setSelectedPage: (value: SelectedPage) => void;
};

const About = () => {
	return (
		<section id="about">
			<HomePageSection background="bg-primary-100">
				<motion.div>
					<div className="flex flex-col lg:flex-row items-start gap-6 py-6">
						{/* Image Section */}
						<div className="relative w-full lg:w-1/3 h-auto flex justify-center lg:justify-start ">
							<Image src={AboutRef.src} alt="Knotique Creations" width={450} height={550} className="rounded-lg shadow-lg object-cover h-full" />
						</div>

						{/* Text Section */}
						<div className="w-full lg:w-2/3">
							<h1 className="font-montserrat text-3xl font-bold text-primary-300 mb-4">My story</h1>

							<p className="text-lg mb-4">
								Welcome to <strong>Knotique Creations!</strong>
							</p>
							<p className="text-lg mb-4">
								Knotique Creations is a labor of love, founded by Sruthi, a passion that grew from childhood inspiration into a business. My journey began with hand embroidery, a skill
								I admired while watching my mother create beautiful designs to support our family. Her talent inspired me, and soon I was crafting embroidered greeting cards for
								friends and family.
							</p>
							<p className="text-lg mb-4">
								As life moved forward, I set aside my hobby for education and work. Years later, when I was expecting my son, I discovered crochet through YouTube videos and was
								immediately captivated. With no prior experience, I eagerly learned this new craft and soon began making booties and sweaters for my newborn. My interest in crochet
								only grew from there, and by the time my daughter was born, I found myself creating hair accessories for her—eventually turning this passion into Knotique Creations.
							</p>
							<p className="text-lg mb-4">
								At Knotique, I focus on crafting unique, high-quality crochet hair accessories with attention to detail and design. I also offer a limited selection of keychains and
								bookmarks. Each product is handmade with care and crafted from thoughtfully chosen materials to ensure both beauty and durability.
							</p>
							<p className="text-lg mb-4">If you&apos;re interested in a custom-made piece, please reach out via email. I would be thrilled to create something special for you.</p>
							<p className="text-lg mb-4">
								Thank you for visiting, and I hope you find something here that brings you joy! Don’t forget to join our Instagram community to stay connected and see the latest
								creations.
							</p>
							<p className="text-lg">Warm regards,</p>
							<p className="text-lg font-semibold">Sruthi</p>
						</div>
					</div>
				</motion.div>
			</HomePageSection>
		</section>
	);
};

export default About;
