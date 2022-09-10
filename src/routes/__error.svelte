<script>
	import Footer from "$lib/components/Footer.svelte";
	import { navigation } from "$lib/info/nav";

	import { hoverOverLink, hoverOverText } from "$lib/state/hoverOver";

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}
</script>

<!-- contact -->
<div class="mx-auto mt-24 w-10/12 font-aeonik min-h-[45vh]">
	<p class="lg:mb-2 headline dark:text-darkgray text-neutral-200 w-fit hover:text-brand dark:hover:text-brand">Oops!</p>
	<h1 class="headline">Page not found!</h1>

	<div class="relative mx-auto mt-24 mb-8 lg:grid lg:grid-cols-10 lg:gap-2 text-lg">
		<a
			href={navigation.home}
			on:mouseenter={hoveredOverLink}
			on:mouseleave={notHovering}
			class="buttonSecondary lg:col-span-2 lg:col-start-1 lg:row-start-1 mt-4 h-fit "
			>Return Home</a
		>
	</div>
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-44 font-aeonik">
	<Footer />
</div>
