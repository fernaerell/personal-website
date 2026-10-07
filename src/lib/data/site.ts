import type { BrandName } from '$lib/icons/brands';

export const SITE = {
    brand: "Personal Web",
    name: 'Fern Aerell',
    role: 'Digital Creator & Software Engineer',
    location: 'Rahasia, Indonesia',
    email: 'fernaerell.business@gmail.com'
} as const;

export const NAV_LINKS = [
	{ label: 'Home', href: '/#home' },
	// { label: 'About', href: '/#about' },
	// { label: 'Work', href: '/#work' },
	// { label: 'Contact', href: '/#contact' }
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export const SOCIALS = [
	{ name: 'YouTube', brand: 'youtube', href: 'https://www.youtube.com/@fernaerell' },
	{ name: 'Instagram', brand: 'instagram', href: 'https://www.instagram.com/fernaerell' },
    { name: 'Threads', brand: 'threads', href: 'https://www.threads.com/@fernaerell' },
	{ name: 'Facebook', brand: 'facebook', href: 'https://web.facebook.com/fernaerelll' },
	{ name: 'TikTok', brand: 'tiktok', href: 'https://www.tiktok.com/@fernaerell' },
	{ name: 'X', brand: 'x', href: 'https://x.com/fernaerell' },
	{ name: 'LinkedIn', brand: 'linkedin', href: 'https://www.linkedin.com/in/fernaerell/' },
	{ name: 'Github', brand: 'github', href: 'https://github.com/fernaerell' }
] as const satisfies readonly { name: string; brand: BrandName; href: string }[];

export type Social = (typeof SOCIALS)[number];