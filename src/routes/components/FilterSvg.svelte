<script lang="ts">
	const props = $props();
	const strokeWidth = 1.5;
</script>

<svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
	<path d="M10 8L20 8" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" />
	<path d="M4 16L14 16" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" />
	<ellipse cx="7" cy="8" rx="3" ry="3" stroke="currentColor" stroke-width={strokeWidth} fill="none" />
	<ellipse cx="17" cy="16" rx="3" ry="3" stroke="currentColor" stroke-width={strokeWidth} fill="none" />
</svg>
