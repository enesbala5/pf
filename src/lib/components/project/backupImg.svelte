<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	let id = String(Math.random());
	let scrollY: number;
	let speed = -0.1;
	let offset = 0;

	export let image: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let fullscreen: boolean = false;

	// parallax logic
	let elDistanceToTop: number | undefined = 0;
	const updateParallax = (
		distTop: number | undefined,
		scrollVert: number
	) => {
		if (distTop !== undefined) {
			actualScrollValue = scrollVert - distTop - offset;
		}
	};
	const updateDistanceTop = () => {
		if (browser) {
			let el = document.getElementById(id);
			const buffer = el?.getBoundingClientRect().top;
			if (buffer !== undefined) {
				elDistanceToTop = buffer;
			}
		}
	};
	onMount(() => {
		updateDistanceTop();
	});

	$: (elDistanceToTop, scrollY),
		updateParallax(elDistanceToTop, scrollY);
	let actualScrollValue: number = 0;
	// parallax logic end

	let imgHeight = 0;

	if (fullscreen) {
		speed = -0.7;
	}
</script>

<svelte:window bind:scrollY />

<p
	class="{actualScrollValue * speed > -1000
		? 'sticky'
		: ''}  top-0 z-40"
>
	{image}
	{actualScrollValue * speed}
</p>
<div
	class="mask1 relative w-full  bg-red-200 dark:bg-darkgray 
				{fullscreen
		? 'mt-48 h-[40vh] lg:h-[105vh]'
		: 'inheritHeight '}"
	{id}
>
	<img
		style:transform="translateY({actualScrollValue *
			-0.1}px)"
		src={`/images/projects/${image}`}
		alt={description !== undefined
			? description
			: "Project Image from Enes Bala's Portfolio"}
		class="relative top-0 float-left w-[100%] object-fill"
	/>
	<!-- {#if fullscreen} -->

	<img
		style:transform="translateY({actualScrollValue *
			speed}px)"
		src={`/images/projects/${image}`}
		alt={description !== undefined
			? description
			: "Project Image from Enes Bala's Portfolio"}
		class="fixed top-0 object-cover"
		style="width: inherit; min-width: 10%"
	/>
	<!-- {/if} -->
</div>

<!-- {#if description !== undefined && !fullscreen}
	<p class="projectH3 mx-auto w-full py-8 text-center">
		{description}
	</p>
{/if} -->
<style>
	.mask1 {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}

	.notFullscreen {
		clip-path: inset(0% 0 8% 0);
	}

	.inheritHeight {
		height: inherit;
		width: inherit;
		min-height: 20vh;
		display: inline-block;
	}

	.float-inline-start {
	}
</style>
