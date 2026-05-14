<script lang="ts">
	const options = ['All', 'Minecraft', 'GTA V', 'Addon', 'Mod'];
</script>

<div class="rounded-2xl bg-[#1a1a1a] p-2.5">
	<select class="pr-1 focus:outline-none" name="tag" id="tag">
		{#each options as option, index (index)}
			<option value={option} selected={index == 0}>{option}</option>
		{/each}
	</select>
</div>
