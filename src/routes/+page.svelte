<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
	import { SITE } from '$lib/data/site';
</script>

<svelte:head>
	<title>{SITE.name}</title>
</svelte:head>

<section id="home" class="min-h-svh bg-[#08090b]">
	<Portrait />
</section>
