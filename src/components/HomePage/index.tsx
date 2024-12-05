"use client";

import { GalleryImage } from "@/shared/types";
import Navbar from "../navbar";
import Hero from "../hero";
import Gallery from "../gallery";
import About from "../about";
import Contact from "../contact";
import Footer from "../footer";

export default function HomePage({ images }: { images: GalleryImage[] }) {
	return (
		<>
			<Navbar />
			<Hero />
			<Gallery images={images} />
			<About />
			<Contact />
			<Footer />
		</>
	);
}
