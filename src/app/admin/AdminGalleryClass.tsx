import Image from "next/image";

type Props = {
	name: string;
	description?: string;
	image: string;
};

const AdminGalleryClass = ({ name, description, image }: Props) => {
	const overlayStyles = ` py-5`;

	return (
		<li className="relative mx-5 inline-block image-shrink">
			<div className={overlayStyles}>
				<p className="text-2xl">{name}</p>
			</div>
			<Image loader={() => image} width={400} height={600} alt={`${image}`} src={image} />
		</li>
	);
};

export default AdminGalleryClass;
