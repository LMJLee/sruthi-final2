import { collection, getDocs } from "firebase/firestore";
import { txtDB } from "@/firebase";
import Admin from "@/components/admin";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { GalleryImage } from "@/shared/types";
import { fetchGalleryImages } from "@/lib";

export default async function AdminPage() {
	const session = await getServerSession(authOptions);
	if (!session) redirect("/signin");
	const allData = await fetchGalleryImages();

	return (
		<section>
			<Admin images={allData} />
		</section>
	);
}
