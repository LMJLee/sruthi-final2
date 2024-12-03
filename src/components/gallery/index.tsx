"use client";

import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { SelectedPage, GalleryImage } from "@/shared/types";
import Image from "next/image";

interface GalleryProps {
	setSelectedPage: (value: SelectedPage) => void;
	images: GalleryImage[];
}

const Gallery = ({ setSelectedPage, images }: GalleryProps) => {
	return (
		<section id="gallery" className="w-full bg-white py-16 wrapper">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}>
				<div className="mb-3">
					<HText>
						<span className="text-primary-300"> Gallery</span>
					</HText>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{images.map((image, index) => (
						<div key={index} className="relative w-full pb-[56.25%] bg-gray-200 rounded-lg overflow-hidden group">
							<Image loader={() => image.imgUrl} alt={image.txtVal} src={image.imgUrl} layout="fill" objectFit="cover" className={` transition-all`} />
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								{image.txtVal || ""}
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Gallery;
