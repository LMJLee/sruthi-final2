import Image from "next/image";

type DataProps = {
	name: string;
	description?: string;
	image: string;
};

const Class = ({ name, description, image }: DataProps) => {
	const overlayStyles = `p-5 absolute z-30 flex
gallery-image flex-col items-center justify-center
whitespace-normal bg-primary-500 text-center text-white
opacity-0 transition duration-500 hover:opacity-90`;

	return (
		<li className="relative mx-5 inline-block image-shrink">
			<div className={overlayStyles}>
				<p className="text-2xl">{name}</p>
			</div>
			<div className="test" style={{ position: "relative", width: "100%", height: "100%" }}>
				<Image loader={() => image} width={400} height={300} priority alt={`${image}`} src={image} />
			</div>
		</li>
	);
};

export default Class;
