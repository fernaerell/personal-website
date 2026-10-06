<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE } from '$lib/data/site';
</script>

<header
    class="absolute inset-x-0 top-0 z-40 flex items-center justify-between gap-6 px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12"
>
	<a
		href={resolve('/#home')}
		class="font-sans text-[0.8125rem] font-medium tracking-[0.02em] text-white/80 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none sm:text-sm"
		>{SITE.brand}</a
	>
</header>
