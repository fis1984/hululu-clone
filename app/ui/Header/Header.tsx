import React from 'react';
import Image from 'next/image';
import HeaderItem from '../HeaderItem/HeaderItem';
import { headerIcons } from '@/app/lib/placeholder-data';

function Header() {
	return (
		<header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				{headerIcons.map((headerIcon) => {
					return (
						<HeaderItem
							key={headerIcon.id}
							title={headerIcon.title}
							Icon={headerIcon.Icon}
						/>
					);
				})}
			</div>

			<Image
				src='https://links.papareact.com/ua6'
				alt=''
				width={200}
				height={100}
				style={{
					objectFit: 'contain',
				}}
			/>
		</header>
	);
}

export default Header;
