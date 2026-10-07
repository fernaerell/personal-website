<script lang="ts">
	import { BRAND_PATHS, type BrandName } from '$lib/icons/brands';

	let {
		brand,
		size = 20,
		class: className = ''
	}: { brand: BrandName; size?: number; class?: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	width={size}
	height={size}
	fill="currentColor"
	aria-hidden="true"
	focusable="false"
	class={className}
>
	<path d={BRAND_PATHS[brand]} />
</svg>
