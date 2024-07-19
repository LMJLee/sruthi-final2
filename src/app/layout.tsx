"use client";

import "./globals.css";
import SessionProvider from "./SessionProvider";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SelectedPage } from "./shared/types";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Gallery from "./components/gallery";
import Admin from "./components/admin/page";
import { Metadata } from "next";

// export const metadata = {
// 	title: "Knotique Creations]"
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<html lang="en" className="h-full ">
			<body>
				<SessionProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/admin" element={<Admin />} />
						</Routes>

						<Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Home setSelectedPage={setSelectedPage} />
						<Gallery setSelectedPage={setSelectedPage} />
						<About setSelectedPage={setSelectedPage} />
						<Contact setSelectedPage={setSelectedPage} />
					</BrowserRouter>

					{children}
					<Footer></Footer>
				</SessionProvider>
			</body>
		</html>
	);
}
