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
	export let description: string | undefined = undefined;
	let divHeight: number;

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
			vh !== undefined
		) {
			actualScrollValue =
				scrollVert + vh / 2 - distTop - divH / 2;
			if (image === 'list4free/test.jpg')
				console.log(actualScrollValue);
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
		updateDistanceTop();
	});

	$: updateParallax(distanceTop, scrollY, divHeight, vh);
	// end logic

	let vh: number;
</script>

<svelte:window bind:scrollY bind:innerHeight={vh} />

<div class="flex flex-col items-center">
	<div
		class="relative w-full overflow-hidden bg-red-600
		{fullscreen ? 'h-[40vh] lg:h-[105vh]' : 'inheritAll'}
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
				src={`/images/projects/${image}`}
				alt={description}
				class="inheritWidth -z-20 {fullscreen
					? 'h-[101%]'
					: 'h-[110%]'} object-cover"
			/>
		</div>
	</div>
	{#if !fullscreen}
		<p class="projectH3 mx-auto w-full py-8 text-center">
			{description}
		</p>
	{/if}
</div>

<style>
	.inheritAll {
		width: inherit;
		height: inherit;
	}
	.inheritWidth {
		width: inherit;
	}
</style>
