import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'links.papareact.com',
				port: '',
				pathname: '/ua6',
			},
			{
				protocol: 'https',
				hostname: 'api.themoviedb.org',
				port: '',
				pathname: '/3',
			},
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				port: '',
				pathname: '/t/**',
			},
		],
	},
};

export default nextConfig;
