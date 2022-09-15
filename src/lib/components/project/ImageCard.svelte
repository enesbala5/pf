<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	let id = String(Math.random());
	let scrollY: number;
	let speed = -0.1;
	let offset = 0;

	export let image: string | undefined = undefined;
	export let description: string | undefined = undefined;

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
	export let fullscreen: boolean = false;
	// parallax logic end

	let imgHeight = 0;

	if (fullscreen) {
		speed = -0.7;
	}
</script>

<svelte:window bind:scrollY />

<div
	class="relative {fullscreen
		? 'mt-48'
		: 'inline-block'} w-full"
	{id}
>
	{#if fullscreen}
		<div
			class="mask1 h-[40vh] w-full overflow-hidden bg-red-200 dark:bg-darkgray lg:h-[105vh]"
		>
			<img
				style:transform="translateY({actualScrollValue *
					speed}px)"
				src={`/images/projects/${image}`}
				alt={description !== undefined
					? description
					: "Project Image from Enes Bala's Portfolio"}
				class="fixed top-0 h-[105%] w-full object-cover"
			/>
		</div>
	{/if}
	<!-- {#if !fullscreen}
		<div class="h-full w-full relative">
			<div class="mask1 h-full ">

			<img
				style:transform="translateY({actualScrollValue *
					speed}px)"
				src={`/images/projects/${image}`}
				alt={description !== undefined
					? description
					: "Project Image from Enes Bala's Portfolio"}
				class="absolute top-0 block object-contain"
			/>
			</div>
		</div>
		{#if description !== undefined}
			<p class="projectH2 mx-auto pb-8">
				{description}
			</p>
		{/if}
	{/if} -->

	{#if !fullscreen}
		<div class="relative flex w-full flex-col" {id}>
			<div class="flex w-full flex-col overflow-hidden">
				<div class="aspect-video h-full w-full grow">
					<img
						style:transform="translateY({actualScrollValue *
							speed}px)"
						src={`/images/projects/${image}`}
						alt={description !== undefined
							? description
							: "Project Image from Enes Bala's Portfolio"}
						class="aspect-video h-full w-full object-cover"
					/>
				</div>
				{#if description !== undefined}
					<p class="projectH3 mx-auto pb-8">
						{description}
					</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.mask1 {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}

	.notFullscreen {
		clip-path: inset(0% 0 8% 0);
	}
</style>
