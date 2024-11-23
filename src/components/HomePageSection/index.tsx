import { PropsWithChildren } from "react";

interface HomePageSectionProps extends PropsWithChildren {
	background?: string;
}

export default function HomePageSection({ background, children }: HomePageSectionProps) {
	return <div className={`wrapper ${background ?? ""}`}>{children}</div>;
}
