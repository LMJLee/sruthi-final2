/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "localhost:3000/",
				port: "3000",
				pathname: " "
			}
		]
	}
};
