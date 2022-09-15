<script lang="ts">
	export let title: string = 'The challenge';
	export let text: string;
</script>

<div
	class="mx-auto flex w-full flex-col lg:w-10/12 lg:flex-row lg:justify-between"
>
	<p class="projectH3 mb-6 font-medium lg:mb-0 lg:w-1/3">
		{title}
	</p>
	<p class="projectText lg:w-2/3">
		{text}
	</p>
</div>
