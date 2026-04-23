<script lang="ts">
	interface Props {
		year: number;
		name: string;
	}

	const { year, name }: Props = $props();
</script>

<div class="p-12.5">
	<p class="text-center opacity-50">© {year} {name}. All Rights Reserved.</p>
</div>
