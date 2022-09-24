<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	let id = String(Math.random());
	let scrollY: number;
	let speed = 0.25;

	export let topMargin: boolean = false;
	export let fullscreen: boolean = true;
	export let parallax: boolean = true;
	let divHeight: number;

	// start logic
	let actualScrollValue: number = 0; // how far into scrolling the user is
	let vh: number;
	let distanceTop: number | undefined = 0; // distance of element from the top of the screen

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

	$: updateParallax(distanceTop, scrollY, divHeight, vh);
	// end logic

	let innerWidth: number = 1600;
</script>

<svelte:window
	bind:scrollY
	bind:innerHeight={vh}
	bind:innerWidth
/>

{#if innerWidth >= 1024 && parallax}
	<div class="flex flex-col items-center">
		<div
			class="relative h-[40vh] w-full overflow-hidden lg:h-[100vh]
		{topMargin ? 'mt-48' : ''}"
			{id}
		>
			<div
				class="h-full w-full"
				bind:clientHeight={divHeight}
			>
				<div
					style:transform={`translateY(${
						actualScrollValue * speed
					}px)`}
					class="inheritWidth -z-20 h-screen object-cover"
				>
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}

{#if innerWidth < 1024 || !parallax}
	<div class="flex flex-col items-center">
		<div
			class="relative h-[40vh] w-full overflow-hidden lg:h-[100vh]
		{topMargin ? 'mt-48' : ''}"
			{id}
		>
			<div
				class="h-full w-full"
				bind:clientHeight={divHeight}
			>
				<div
					class="w-full h-full -z-20 object-cover"
				>
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.inheritWidth {
		width: inherit;
	}
</style>
