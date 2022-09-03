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

<div class=" group relative flex h-full w-full ">
	<div class="flex h-full w-1/2 flex-col justify-center">
		<a
			href={projectId}
			on:mouseenter={hoveredOverLink}
			on:mouseleave={notHovering}
		>
			<h4 class=" font-medium opacity-70 group-hover:opacity-100">
				{projectName}
			</h4>
			<p
				class="mt-1 w-2/3  font-mono text-sm opacity-70 group-hover:opacity-100 peer-hover:opacity-100"
			>
				{projectDescription}
			</p>
		</a>
		<p
			class="absolute bottom-0 left-0 mt-1 font-mono text-xs opacity-70"
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
		>
			{category}
		</p>
	</div>
	<!-- svelte-ignore a11y-missing-content -->
	<div
		on:click="{() => goto(`/${projectId}`)}"
		on:mouseenter={hoveredOverLink}
		on:mouseleave={notHovering}
		class="peer h-48 w-1/2 dark:bg-darkgray dark:group-hover:bg-lightgray dark:peer-hover:bg-lightgray bg-neutral-200 group-hover:bg-opacity-80 peer-hover:bg-opacity-80"
	/>
</div>
