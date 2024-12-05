"use client";
import Image from "next/image";

interface AdminGalleryClassProps {
	name: string;
	image: string;
}

const AdminGalleryClass = ({ name, image }: AdminGalleryClassProps) => {
	return (
		<li className="relative mx-5 inline-block image-shrink">
			<div className="py-5">
				<p className="text-2xl">{name}</p>
			</div>
			<Image loader={() => image} width={400} height={600} unoptimized={true} alt={image} src={image} />
		</li>
	);
};

export default AdminGalleryClass;
