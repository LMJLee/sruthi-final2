import { txtDB } from "@/firebase";
import { GalleryImage } from "@/shared/types";
import { collection, getDocs } from "firebase/firestore";

export async function fetchGalleryImages() {
	const valRef = collection(txtDB, "txtData");
	const dataDb = await getDocs(valRef);
	return await Promise.all(dataDb.docs.map(val => ({ ...val.data(), id: val.id })) as GalleryImage[]);
}
