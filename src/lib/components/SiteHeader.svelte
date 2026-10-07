<script lang="ts">
	import { resolve } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { NAV_LINKS, SITE } from '$lib/data/site';

	let menuOpen = $state(false);

	$effect(() => {
		document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.documentElement.style.overflow = '';
		};
	});
</script>

<header
	class="absolute inset-x-0 top-0 z-40 flex items-center justify-between gap-6 px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12"
>
	<a
		href={resolve('/#home')}
		class="font-sans text-[0.8125rem] font-medium tracking-[0.02em] text-white/80 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none sm:text-sm"
		>{SITE.brand}</a
	>

	<nav aria-label="Primary" class="hidden items-center gap-8 md:flex lg:gap-10">
		{#each NAV_LINKS as link, i (link.href)}
			<a
				href={resolve(link.href)}
				class="group relative font-sans text-[0.6875rem] font-medium tracking-[0.22em] text-white/55 uppercase transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none sm:text-xs"
			>
				{link.label}
				<span
					class="absolute -bottom-1.5 left-0 h-px w-0 bg-white/70 transition-all duration-400 ease-out group-hover:w-full"
				></span>
				{#if i === 0}
					<span class="absolute -bottom-1.5 left-0 h-px w-full bg-white/70"></span>
				{/if}
			</a>
		{/each}
	</nav>

	<button
		type="button"
		onclick={() => (menuOpen = !menuOpen)}
		aria-expanded={menuOpen}
		aria-controls="mobile-menu"
		aria-label={menuOpen ? 'Close menu' : 'Open menu'}
		class="relative -mr-1 grid size-10 place-items-center md:hidden cursor-pointer"
	>
		<span class="flex w-6 flex-col gap-1.25">
			<span
				class="h-px w-full origin-center bg-white transition-transform duration-300 ease-out"
				class:translate-y-[3px]={menuOpen}
				class:rotate-45={menuOpen}
			></span>
			<span
				class="h-px w-full origin-center bg-white transition-transform duration-300 ease-out"
				class:-translate-y-[3px]={menuOpen}
				class:-rotate-45={menuOpen}
			></span>
		</span>
	</button>
</header>

{#if menuOpen}
	<div
		id="mobile-menu"
		transition:fly={{ y: -12, duration: 260 }}
		class="fixed inset-x-0 top-0 z-30 flex min-h-svh flex-col bg-[#08090b]/97 px-5 pt-6 pb-10 backdrop-blur-xl md:hidden"
	>
		<nav aria-label="Mobile" class="mt-20 flex flex-col gap-1">
			{#each NAV_LINKS as link, i (link.href)}
				<a
					href={resolve(link.href)}
					onclick={() => (menuOpen = false)}
					style="transition-delay: {60 + i * 45}ms"
					class="border-b border-white/8 py-5 font-display text-[2rem] leading-none font-extrabold tracking-[-0.03em] text-white/85 uppercase transition-colors hover:text-white"
				>
					<span
						class="mr-3 align-super font-sans text-[0.625rem] font-medium tracking-[0.2em] text-white/35"
						>0{i + 1}</span
					>{link.label}
				</a>
			{/each}
		</nav>

		<p class="mt-auto font-sans text-xs tracking-[0.14em] text-white/40 uppercase">
			{SITE.location}
		</p>
	</div>
{/if}