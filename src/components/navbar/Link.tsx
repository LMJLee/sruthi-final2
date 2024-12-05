import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	page: string;
};

const Link = ({ page }: Props) => {
	const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

	return <AnchorLink href={`#${lowerCasePage}`}>{page}</AnchorLink>;
};

export default Link;
