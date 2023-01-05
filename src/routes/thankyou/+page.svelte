<script>
	import Footer from '$lib/components/Footer.svelte';
	import { navigation } from '$lib/info/nav';

	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';

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

	import { draw } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let condition = false;

	onMount(() => (condition = true));
</script>

<!-- contact -->
<div class="mx-auto mt-24 min-h-[45vh] lg:min-h-[55vh] w-10/12 font-aeonik">
	<div class="flex items-center justify-between">
		<h1 class="headline">Thank You!</h1>
		<svg
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
			xmlns="http://www.w3.org/2000/svg"
			class="h-24 w-24 stroke-brand"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			{#if condition}
				<path
					in:draw={{ duration: 500, easing: quadIn }}
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M5 13l4 4L19 7"
				/>
			{/if}
		</svg>
	</div>
	<div
		class="relative mx-auto mt-24 mb-8 text-lg lg:grid lg:grid-cols-10 lg:gap-2"
	>
		<p
			class="mt-4 h-fit lg:col-span-3 lg:col-start-1 lg:row-start-1 "
		>
			Submission received successfully.<br />I'll reach back
			to you as soon as possible.
		</p>
		<a
			href={navigation.home}
			on:mouseenter={hoveredOverLink}
			on:mouseleave={notHovering}
			class="buttonSecondary mt-4 h-fit lg:col-span-2 lg:col-start-1 lg:row-start-2"
			>Return Home</a
		>
	</div>
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-44 font-aeonik">
	<Footer />
</div>
