import { GalleryImage } from "@/shared/types";
import HomePage from "@/components/HomePage";
import { collection, getDocs } from "firebase/firestore";
import { txtDB } from "@/firebase";

export default async function Home() {
	const valRef = collection(txtDB, "txtData");
	const dataDb = await getDocs(valRef);
	const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id })) as GalleryImage[];
	const imageUrls = await Promise.all(allData);
	return <HomePage images={imageUrls} />;
}
