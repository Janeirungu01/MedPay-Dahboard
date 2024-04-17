import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
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
		icon: <HiOutlineDocumentText />
	},
    {
		key: 'analytics',
		label: 'Analytics',
		path: '/analytics',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
    {
		key: 'profile',
		label: 'Profile',
		path: '/profile',
		icon: <HiOutlineAnnotation />
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