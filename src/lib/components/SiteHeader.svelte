<script lang="ts">
	import { resolve } from '$app/paths';
	import { NAV_LINKS, SITE } from '$lib/data/site';
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
</header>
