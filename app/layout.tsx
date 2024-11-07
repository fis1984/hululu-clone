import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Hululu Clone',
	description: 'Created by Carlos Fis',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
