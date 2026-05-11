<script lang="ts">
	import SearchSvg from './SearchSvg.svelte';
</script>

<div class="flex flex-row items-center gap-2.5 p-2.5">
	<SearchSvg class="text-[white] w-3.75 h-3.75 hover:cursor-pointer"/>
	<input class="text-[white] focus:outline-none" type="text" name="search" id="search" placeholder="Search..." />
</div>
