<script lang="ts">
	import { projects } from '$lib/projects/projects';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import SmallProjectContainer from './containers/SmallProjectContainer.svelte';

	export let projectName: string;

	let thisProject = projects.find(
		(project) => project.projectName == projectName
	);

	function hoveredOverText() {
		hoverOverText.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}
</script>

<SmallProjectContainer noMargin>
	<p class="projectSubheading">
		{thisProject?.projectName}
	</p>

	<p class="projectHeadline mt-4">
		{#if $$slots.description}
			<slot name="description" />
		{:else}
			{thisProject?.projectDescription}
		{/if}
	</p>
	<div class="mt-16 space-x-2 lg:space-x-4 grid grid-flow-col overflow-x-scroll noScroll place-content-start">
		{#if thisProject && thisProject.tags.length > 0}
			{#each thisProject.tags as tag, i}
				<button
					class="w-fit whitespace-nowrap rounded-full bg-white py-2 px-4 text-center font-mono  text-xs shadow-sm dark:bg-lightgray dark:shadow-none"
					on:mouseenter={hoveredOverText}
					on:mouseleave={notHovering}
				>
					{#if tag === 'branding'}
						Branding
					{/if}
					{#if tag === 'smmm'}
						Social Media Management
					{/if}
					{#if tag === 'ui-ux'}
						UI & UX
					{/if}
					{#if tag === 'tshirt'}
						Apparel Design
					{/if}
					{#if tag === 'website'}
						Website Design
					{/if}
					{#if tag === 'development'}
						Development
					{/if}
				</button>
			{/each}
		{/if}
	</div>
</SmallProjectContainer>
