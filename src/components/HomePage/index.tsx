"use client";

import { GalleryImage, SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../navbar";
import Hero from "../hero";
import Gallery from "../gallery";
import About from "../about";
import Contact from "../contact";
import Footer from "../footer";

export default function HomePage({ images }: { images: GalleryImage[] }) {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			} else {
				setIsTopOfPage(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
	});

	return (
		<BrowserRouter>
			<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<Hero setSelectedPage={setSelectedPage} />
			<Gallery setSelectedPage={setSelectedPage} images={images} />
			<About setSelectedPage={setSelectedPage} />
			<Contact setSelectedPage={setSelectedPage} />
			<Footer />
		</BrowserRouter>
	);
}
