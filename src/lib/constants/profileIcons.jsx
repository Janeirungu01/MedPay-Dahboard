import {
	
	HiOutlineChartBar,
    HiOutlineBell,	
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const profileLinks = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
    {
		key: 'notification',
		label: 'Notification',
		path: '/notification',
		icon: <HiOutlineBell />
	},
    {
		key: 'darkmode',
		label: 'Dark Mode',
		path: '/darkmode',
		icon: <HiOutlineChartBar />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'aboutus',
		label: 'About Us',
		path: '/aboutus',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
