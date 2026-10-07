<script lang="ts">
	import BrandIcon from './BrandIcon.svelte';
	import { SOCIALS } from '$lib/data/site';
</script>

<ul class="flex items-center gap-4 sm:gap-5 lg:gap-6">
	{#each SOCIALS as social (social.brand)}
		<li>
			<a
				href={social.href}
				rel="external noopener noreferrer"
				aria-label={social.name}
				title={social.name}
				class="group relative grid size-9 place-items-center rounded-full text-white/85 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b0d] focus-visible:outline-none sm:size-10"
                target="_blank"
			>
				<span
					class="absolute inset-0 rounded-full bg-white/0 ring-1 ring-white/0 transition-all duration-300 group-hover:bg-white/8 group-hover:ring-white/25"
				></span>
				<BrandIcon
					brand={social.brand}
					size={19}
					class="relative transition-transform duration-300 group-hover:-translate-y-0.5"
				/>
			</a>
		</li>
	{/each}
</ul>