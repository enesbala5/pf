<script lang="ts">
	export let title: string;
	export let text: string;
</script>

<div
	class="flex w-full flex-col lg:flex-row lg:justify-between lg:space-x-8 my-12 lg:my-24"
>
	<p class="projectH2 w-full mb-6 lg:mb-0 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
		{title}
	</p>
	<p class="projectSmallerText lg:w-1/2">
		{text}
	</p>
</div>
