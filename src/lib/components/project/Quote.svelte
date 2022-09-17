<script lang="ts">
	export let person: string = '';
	export let position: string = 'Chief Executive Officer';
</script>

<div class="text-left font-aeonik">
	<!-- person -> position -->
	<div class="mb-6 flex items-center">
		<div class="mr-4 h-px w-6 bg-black dark:bg-white" />
		<p class="font-medium">
			{person}<span class="font-normal opacity-70"
				>, {position}</span
			>
		</p>
	</div>
	<p class="projectText w-2/3">
		<slot />
	</p>
</div>
