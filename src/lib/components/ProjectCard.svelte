<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { navigation } from '$lib/info/nav';
	import { selectedTags } from '$lib/projects/projects';

	export let projectName: string;
	export let projectDescription: string;
	export let projectId: any;
	export let thumbnail: string;
	export let tags: Tag[];
	export let date: string;
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import type { Tag } from 'src/types';

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

<div
	class="group relative mb-10 flex h-full w-full flex-col-reverse lg:mb-0 lg:flex-row"
>
	<div
		class="mt-4 flex h-full w-full flex-col lg:mt-0 lg:w-1/2 lg:justify-center"
	>
		<a
			href={`/projects/${projectId}`}
			on:mouseenter={hoveredOverLink}
			on:mouseleave={notHovering}
		>
			<h4
				class="text-lg font-medium opacity-70 group-hover:opacity-100 lg:text-xl"
			>
				{projectName}
			</h4>
			<p
				class="mt-1 w-full font-mono text-sm opacity-70 group-hover:opacity-100 peer-hover:opacity-100 lg:w-2/3"
			>
				{projectDescription}
			</p>
		</a>
		<div
			class="noScroll mt-4 flex items-center space-x-2 overflow-scroll py-2 lg:absolute lg:bottom-0 lg:left-0 lg:mt-2 lg:w-fit"
		>
			{#if tags.length > 2}
				{#each tags as tag, i}
					{#if i < 2}
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
								Clothing
							{/if}
							{#if tag === 'website'}
								Website Design
							{/if}
							{#if tag === 'development'}
								Development
							{/if}
						</button>
					{/if}
				{/each}
				<button
					class="w-fit whitespace-nowrap rounded-full bg-white py-2 px-4 text-center font-mono  text-xs shadow-sm dark:bg-lightgray dark:shadow-none"
					on:mouseenter={hoveredOverText}
					on:mouseleave={notHovering}
				>
					+{tags.length - 2}
				</button>
			{:else}
				{#each tags as tag, i}
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
							Clothing
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
			<p
				class="w-full pl-4 font-mono text-xs opacity-70 lg:border-none"
				on:mouseenter={hoveredOverText}
				on:mouseleave={notHovering}
			>
				{date}
			</p>
		</div>
	</div>
	<!-- svelte-ignore a11y-missing-content -->
	<div
		on:click={() => goto(`/projects/${projectId}`)}
		on:mouseenter={hoveredOverLink}
		on:mouseleave={notHovering}
		class="peer relative h-40  overflow-hidden rounded-md bg-neutral-200 dark:bg-darkgray dark:group-hover:bg-lightgray dark:peer-hover:bg-lightgray lg:h-48 lg:w-1/2"
	>
		<img
			src={`/images/thumbnails/${thumbnail}`}
			alt=""
			class="h-full w-full object-cover"
		/>
		<div
			class="absolute top-0 left-0 h-full w-full bg-black opacity-0 transition-opacity group-hover:opacity-5"
		/>
	</div>
</div>
