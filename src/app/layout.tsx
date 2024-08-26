import "./globals.css";
import SessionProvider from "@/SessionProvider";
import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Knotique Creations",
	icons: {
		icon: "/sruthilogo.png"
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full ">
			<body>
				<SessionProvider>
					{/* <Link href="/admin">Admin</Link> */}
					{children}

					<Footer></Footer>
				</SessionProvider>
			</body>
		</html>
	);
}
