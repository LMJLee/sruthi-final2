"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { SelectedPage } from "./shared/types";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Homepage from "@/components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

export default function Home() {
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
			<Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<Homepage setSelectedPage={setSelectedPage} />
			<Gallery setSelectedPage={setSelectedPage} />
			<About setSelectedPage={setSelectedPage} />
			<Contact setSelectedPage={setSelectedPage} />
		</BrowserRouter>
	);
}

Home.requireAuth = true;
