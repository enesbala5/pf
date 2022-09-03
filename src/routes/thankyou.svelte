<script>
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import { navigation } from "$lib/info/nav";

	import { draw } from "svelte/transition";
	import { quadIn } from "svelte/easing";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	let condition = false;

	onMount(() => (condition = true));

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

<title>Thank You - Enes Bala</title>

<!-- contact -->
<div class="mx-auto mt-24 w-10/12 font-aeonik text-white">
	<div class="flex items-center justify-between">
		<h1 class="text-8xl font-medium">Thank You!</h1>
		<svg
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
			xmlns="http://www.w3.org/2000/svg"
			class="h-24 w-24 stroke-red-500"
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

	<div class="relative mx-auto mt-24 mb-8 grid grid-cols-10 gap-2 text-lg">
		<p class="col-span-3 col-start-2 text-justify opacity-70 ">
			Submission received successfully.<br /> I'll reach back to you as soon as possible.
		</p>
		<a
			href={navigation.home}
			on:mouseenter={hoveredOverLink}
			on:mouseleave={notHovering}
			on:click={() => goto(navigation.home)}
			class="buttonSecondary col-span-3 col-start-2 row-start-2 mt-4 h-fit"
			>Return Home</a
		>
	</div>
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-96 font-aeonik text-white">
	<Footer />
</div>
