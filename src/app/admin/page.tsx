import { collection, getDocs } from "firebase/firestore";
import { txtDB } from "@/firebase";
import Admin from "@/components/admin";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { GalleryImage } from "@/shared/types";

export default async function AdminPage() {
	const session = await getServerSession(authOptions);

	if (!session) redirect("/signin");

	const valRef = collection(txtDB, "txtData");
	const dataDb = await getDocs(valRef);
	const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id })) as GalleryImage[];

	return (
		<section>
			<Admin images={allData} />
		</section>
	);
}
