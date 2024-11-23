"use client";

import { motion } from "framer-motion";
import Class from "./Class";

import HText from "@/shared/HText";
import { SelectedPage, GalleryImage } from "@/shared/types";

interface GalleryProps {
	images: GalleryImage[];
	setSelectedPage: (value: SelectedPage) => void;
}

const Gallery = ({ images, setSelectedPage }: GalleryProps) => {
	return (
		<section id="gallery" className="w-full bg-white py-40 wrapper">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}>
				<div>
					<HText>
						<span className="text-primary-300"> Gallery</span>
					</HText>
				</div>
				<div className="mt-10 h-full w-full overflow-x-auto overflow-y-hidden">
					<ul className="w-full whitespace-wrap">
						{images.map(item => (
							<Class key={item.id} name={item.txtVal} image={item.imgUrl} />
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	);
};

export default Gallery;
