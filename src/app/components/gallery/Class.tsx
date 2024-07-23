import Image from "next/image";

type Props = {
	name: string;
	description?: string;
	image: string;
};

const Class = ({ name, description, image }: Props) => {
	const overlayStyles = `p-5 absolute z-30 flex
gallery-image flex-col items-center justify-center
whitespace-normal bg-primary-500 text-center text-white
opacity-0 transition duration-500 hover:opacity-90`;

	return (
		<li className="relative mx-5 inline-block image-shrink">
			<div className={overlayStyles}>
				<p className="text-2xl">{name}</p>
			</div>
			<Image loader={() => image} width={400} height={600} alt={`${image}`} src={image} />
		</li>
	);
};

export default Class;
