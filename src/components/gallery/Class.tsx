import Image from "next/image";

type Props = {
	name: string;
	description?: string;
	image: string;
};

const Class = ({ name, description, image }: Props) => {
	const overlayStyles = `p-5 absolute z-30 flex
  h-[80px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

	return (
		<li className="relative mx-5 inline-block h-[380px] w-[450px]">
			<div className={overlayStyles}>
				<p className="text-2xl">{name}</p>
			</div>
			<Image
				loader={() => image}
				fill
				sizes="(max-width: 450px) 100vw, 700px"
				priority
				alt={`${name}`}
				src={image}
				className="ImageWrap transition-opacity opacity-0 duration-[2s]"
				onLoadingComplete={image => image.classList.remove("opacity-0")}
			/>
		</li>
	);
};

export default Class;
