import { HeaderItemProps } from './definitions';
import {
	CheckBadgeIcon,
	BoltIcon,
	HomeIcon,
	RectangleStackIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from '@heroicons/react/24/outline';

const headerIcons: HeaderItemProps[] = [
	{ id: 1, title: 'HOME', Icon: HomeIcon },
	{ id: 2, title: 'TRENDING', Icon: BoltIcon },
	{ id: 3, title: 'VERIFIED', Icon: CheckBadgeIcon },
	{ id: 4, title: 'COLLECTIONS', Icon: RectangleStackIcon },
	{ id: 5, title: 'SEARCH', Icon: MagnifyingGlassIcon },
	{ id: 6, title: 'ACCOUNT', Icon: UserIcon },
];

export { headerIcons };
