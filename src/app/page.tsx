import HomePage from "@/components/HomePage";
import { fetchGalleryImages } from "@/lib";

export default async function Home() {
	const images = await fetchGalleryImages();
	return <HomePage images={images} />;
}
