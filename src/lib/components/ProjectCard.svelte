<script lang="ts">
import { goto } from "$app/navigation";

	export let projectName: string;
	export let projectDescription: string;
	export let projectId: any;
	export let category: string;
	import { hoverOverLink, hoverOverText } from "$lib/state/hoverOver";

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function hoveredOverText() {
		hoverOverText.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}
</script>

<div class="group relative flex h-full w-full flex-col-reverse lg:flex-row mb-10 lg:mb-0">
	<div class="flex h-full lg:w-1/2 w-full flex-col lg:justify-center mt-4 lg:mt-0">
		<a
			href={`/projects/${projectId}`}
			on:mouseenter={hoveredOverLink}
			on:mouseleave={notHovering}
		>
			<h4 class="font-medium opacity-70 group-hover:opacity-100 text-lg lg:text-xl">
				{projectName}
			</h4>
			<p
				class="mt-1 lg:w-2/3 w-full font-mono text-sm opacity-70 group-hover:opacity-100 peer-hover:opacity-100"
			>
				{projectDescription}
			</p>
		</a>
		<p
			class="lg:absolute lg:bottom-0 lg:left-0 lg:mt-1 mt-4 pt-4 border-t dark:border-lightgray border-neutral-200 font-mono text-xs opacity-70 w-full lg:w-fit lg:pt-0 lg:border-none"
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
		>
			{category}
		</p>
	</div>
	<!-- svelte-ignore a11y-missing-content -->
	<div
		on:click="{() => goto(`/projects/${projectId}`)}"
		on:mouseenter={hoveredOverLink}
		on:mouseleave={notHovering}
		class="peer h-40 lg:h-48 lg:w-1/2 dark:bg-darkgray dark:group-hover:bg-lightgray dark:peer-hover:bg-lightgray bg-neutral-200 group-hover:bg-opacity-80 peer-hover:bg-opacity-80 transition-colors"
	/>
</div>
