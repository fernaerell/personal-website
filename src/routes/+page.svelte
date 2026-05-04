<script lang="ts">
	import additional_mobs_webp from '$lib/assets/images/additional_mobs.webp';
	import sawit_webp from '$lib/assets/images/sawit.webp';
	import titans_webp from '$lib/assets/images/titans.webp';

	import Header from './components/Header.svelte';
	import PortfolioComponent from './components/Portfolio.svelte';
	import FooterComponent from './components/Footer.svelte';

	import type Portfolio from './lib/Portfolio';

	const PFL_MC_JAVA_MOD = 'Minecraft Java Mod';
	const PFL_MC_MYHTIC_MOBS = 'Minecraft MythicMobs';
	const PFL_MC_MODEL_ENGINE = 'Minecraft ModelEngine';
	const PFL_MC_BEDROCK_ADDON = 'Minecraft Add-on';
	const PFL_GTA_V_MOD = 'GTA V Mod';

	let portfolios: Portfolio[] = [
		// {
		// 	href: '/',
		// 	img: {
		// 		src: placeholder,
		// 		alt: 'placeholder'
		// 	},
		// 	title: 'Placeholder',
		// 	label: 'Placeholder'
		// },
		{
			href: 'https://youtu.be/149eF_udHZI?si=C40zpLLOkU_6761O',
			img: {
				src: 'https://i3.ytimg.com/vi/149eF_udHZI/maxresdefault.jpg',
				alt: 'Aerell Fasting Image'
			},
			title: 'Aerell Fasting',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://youtu.be/2AGPcd45Lvc?si=SrpnhhBNA51jDM44',
			img: {
				src: 'https://i3.ytimg.com/vi/2AGPcd45Lvc/maxresdefault.jpg',
				alt: 'Aerell Time Text Image'
			},
			title: 'Aerell Time Text',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://drive.google.com/file/d/18CKmCfYqSsNb1O6nhVrdLzEjsHUD66BS/view?usp=sharing',
			img: {
				src: sawit_webp,
				alt: 'Sawit Image'
			},
			title: 'Sawit',
			label: [PFL_MC_JAVA_MOD]
		},
		{
			href: 'https://youtu.be/UFIP6Ipsgcs?si=A3Xmz0KNU3oUcHrE',
			img: {
				src: 'https://i3.ytimg.com/vi/UFIP6Ipsgcs/maxresdefault.jpg',
				alt: 'Aerell NPC Image'
			},
			title: 'Aerell NPC',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://www.curseforge.com/minecraft/mc-mods/aerellcrafter',
			img: {
				src: 'https://raw.githubusercontent.com/aerell-minecraft/aerell-crafter/refs/heads/main/gif/with.gif',
				alt: 'Aerell Crafter Gif'
			},
			title: 'Aerell Crafter',
			label: [PFL_MC_JAVA_MOD]
		},
		{
			href: 'https://youtu.be/s9zcFahb3wg?si=YXrmY51ovjbmKEPY',
			img: {
				src: 'https://i3.ytimg.com/vi/s9zcFahb3wg/maxresdefault.jpg',
				alt: 'Aerell Flags Image'
			},
			title: 'Aerell Flags & Headbands',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://drive.google.com/file/d/1rNik7oqhqOC9L66j09OXFqy4vEqZIim_/view?usp=sharing',
			img: {
				src: titans_webp,
				alt: 'Titans Image'
			},
			title: 'Titans (Model from client)',
			label: [PFL_MC_JAVA_MOD]
		},
		{
			href: 'https://drive.google.com/file/d/1S_3SZ2BntmKT86rFCRFNUsNCnLo71r64/view?usp=sharing',
			img: {
				src: additional_mobs_webp,
				alt: 'Additional Mobs Image'
			},
			title: 'Additional Mobs (Model from client)',
			label: [PFL_MC_MYHTIC_MOBS, PFL_MC_MODEL_ENGINE]
		},
		{
			href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeQ61-EcY1Tl7UnRdZ-e2_H2',
			img: {
				src: 'https://img.youtube.com/vi/-mYn7Pra-04/maxresdefault.jpg',
				alt: 'Idul Adha Image'
			},
			title: 'Idul Adha',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://mcpedl.com/reltech-digital-clock-addon/',
			img: {
				src: 'https://i3.ytimg.com/vi/yEx5T6HiiLI/maxresdefault.jpg',
				alt: 'Digital Clock Image'
			},
			title: 'Digital Clock',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://youtu.be/A2PakxHFyfg?si=UyegmsNE-2cJP959',
			img: {
				src: 'https://i3.ytimg.com/vi/A2PakxHFyfg/maxresdefault.jpg',
				alt: 'Smart Torch Image'
			},
			title: 'Smart Torch',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeT7TDkvwX8lRURfQKbVEDkx',
			img: {
				src: 'https://i3.ytimg.com/vi/-FM4k4FtvFw/maxresdefault.jpg',
				alt: 'Partner Image'
			},
			title: 'Partner',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeQN_vs4PjZxNdxMvF-79mky',
			img: {
				src: 'https://img.youtube.com/vi/pnxBliV9QmQ/maxresdefault.jpg',
				alt: 'Ramadhan Image'
			},
			title: 'Ramadhan',
			label: [PFL_MC_BEDROCK_ADDON, PFL_MC_JAVA_MOD]
		},
		{
			href: 'https://www.youtube.com/watch?v=A1Ng-_zSoOc',
			img: {
				src: 'https://img.youtube.com/vi/A1Ng-_zSoOc/maxresdefault.jpg',
				alt: 'Random Ore Generator Image'
			},
			title: 'Random Ore Generator',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://www.youtube.com/watch?v=JgvSrLJ9Fkw',
			img: {
				src: 'https://img.youtube.com/vi/JgvSrLJ9Fkw/maxresdefault.jpg',
				alt: 'Flat World Village Image'
			},
			title: 'Flat World Village',
			label: [PFL_MC_BEDROCK_ADDON]
		},
		{
			href: 'https://id.gta5-mods.com/scripts/ragdoll-player-when-shot-fern-aerell',
			img: {
				src: 'https://img.youtube.com/vi/Jdf9VIBzo7A/maxresdefault.jpg',
				alt: 'Ragdoll Player When Shot Image'
			},
			title: 'Ragdoll Player When Shot',
			label: [PFL_GTA_V_MOD]
		}
	];
</script>

<Header/>

<PortfolioComponent {portfolios}></PortfolioComponent>

<FooterComponent year={2026} name="Fern Aerell"></FooterComponent>
