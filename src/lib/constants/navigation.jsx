import {
	HiOutlineViewGrid,
	HiOutlineUsers,
    HiOutlineChartBar,
    HiSwitchHorizontal,
	HiOutlineUser,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const sidebarTopLinks = [
	{
		key: 'dashboard',
		label: 'DashBoard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
    {
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiSwitchHorizontal />
	},
    {
		key: 'analytics',
		label: 'Analytics',
		path: '/analytics',
		icon: <HiOutlineChartBar />
	},
	{
		key: 'profile',
		label: 'Profile',
		path: '/profile',
		icon: <HiOutlineUser />
	},
	{
		key: 'staff',
		label: 'Staff',
		path: '/staff',
		icon: <HiOutlineUsers />
	}
]

export const sidebarBottomLinks = [
    {
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	}
]