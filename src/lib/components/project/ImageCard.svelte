<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	let id = String(Math.random());
	let scrollY: number;
	let speed = 0.25;

	$: if (
		!fullscreen &&
		divHeight !== undefined &&
		vh !== undefined
	) {
		speed = 0.25 * (divHeight / vh);
	}

	export let topMargin: boolean = false;
	export let image: string | undefined = undefined;
	export let fullscreen: boolean = false;
	export let aspectVideo: boolean = false;
	export let description: string | undefined = undefined;
	let divHeight: number;
	export let customAttribute: string = '';
	export let imageCustomAttribute: string = '';
	export let alternativeImage: boolean = false;

	// start logic
	let actualScrollValue: number = 0; // how far into scrolling the user is
	let distanceTop: number | undefined = 0; // distance of element from the top of the screen
	let distanceBottom: number | undefined = 0; // distance of element from the top of the screen

	const updateParallax = (
		distTop: number | undefined,
		scrollVert: number,
		divH: number,
		viewportHeight: number
	) => {
		if (
			distTop !== undefined &&
			divH !== undefined &&
			viewportHeight !== undefined
		) {
			actualScrollValue =
				scrollVert +
				viewportHeight / 2 -
				distTop -
				divH / 2;
		}
	};

	const updateDistanceTop = () => {
		if (browser) {
			let el = document.getElementById(id);
			const buffer = el?.getBoundingClientRect().top;
			if (buffer !== undefined) {
				distanceTop = buffer;
			}
		}
	};

	onMount(() => {
		if (scrollY === 0) updateDistanceTop();
	});

	$: if (scrollY === 0) updateDistanceTop(); 

	$: updateParallax(distanceTop, scrollY, divHeight, vh);
	// end logic

	let vh: number;
	let innerWidth: number = 1600;
</script>

<svelte:window
	bind:scrollY
	bind:innerHeight={vh}
	bind:innerWidth
/>

{#if innerWidth >= 1024}
	<div class="flex flex-col items-center">
		<div
			class="mask1 relative w-full overflow-hidden
			{aspectVideo ? 'aspect-video' : ''}
		{customAttribute !== '' ? customAttribute : ''}
		{fullscreen
				? 'h-[40vh] lg:h-[105vh]'
				: customAttribute
				? 'inheritWidth rounded-md'
				: 'inheritAll rounded-md'}
		{topMargin ? 'mt-48' : ''}
		"
			{id}
		>
			<div
				class="h-full w-full"
				bind:clientHeight={divHeight}
			>
				<img
					style:transform={`translateY(calc(${
						actualScrollValue * speed
					}px - ${fullscreen ? '1.5%' : '5%'}))`}
					src={alternativeImage
						? image
						: `/images/projects/${image}`}
					alt={description}
					class="{aspectVideo? 'w-full' : 'inheritWidth'} -z-20 object-cover {imageCustomAttribute}
				{fullscreen ? 'h-[101%]' : 'h-[110%] rounded-md'}"
				/>
			</div>
		</div>
		{#if !fullscreen && description !== undefined}
			<p class="projectH3 mx-auto w-full py-8 text-center">
				{description}
			</p>
		{/if}
	</div>
{/if}

{#if innerWidth < 1024}
	<div class="flex flex-col items-center">
		<div
			class="relative w-full overflow-hidden
		{customAttribute !== '' ? customAttribute : ''}
		{fullscreen
				? 'h-[40vh] lg:h-[105vh]'
				: customAttribute
				? 'inheritWidth rounded-md'
				: 'inheritAll rounded-md'}
		{topMargin ? 'mt-12' : ''}
		"
			{id}
		>
			<div
				class="h-full w-full"
				bind:clientHeight={divHeight}
			>
				<img
					src={alternativeImage
						? image
						: `/images/projects/${image}`}
					alt={description}
					class="-z-20 object-cover 
				{fullscreen
						? 'h-full w-full'
						: 'h-full w-full rounded-md object-cover'}"
				/>
			</div>
		</div>
		{#if !fullscreen && description !== undefined}
			<p
				class="projectSmallerText mx-auto w-full py-8 text-center"
			>
				{description}
			</p>
		{/if}
	</div>
{/if}

<style>
	.inheritAll {
		width: inherit;
		height: inherit;
	}
	.inheritWidth {
		width: inherit;
	}

	.mask1 {
		clip-path: 0% 8% 8% 0%;
	}
</style>
