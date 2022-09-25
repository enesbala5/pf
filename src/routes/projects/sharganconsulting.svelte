<script>
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
  import ScrollDown from '$lib/components/scroll/ScrollDown.svelte';
	import NextCase from '$lib/sections/NextCase.svelte';
	import Keyboard from '$lib/svgs/hero/Keyboard.svelte';
  import Palette from '$lib/svgs/hero/Palette.svelte';
</script>

<!-- <div
	class="mx-auto mt-24 min-h-screen w-full px-4 font-aeonik lg:mt-24 lg:w-10/12 lg:px-0"
>
	<h1 class="projectHeadline">Shargan Consulting</h1>
</div> -->

<!-- <Keyboard /> -->
<Keyboard classNames="w-48 h-48"></Keyboard>
<Palette classNames="w-48 h-48"></Palette>
<!-- <NextCase/> -->


<div class="h-12 w-12  relative mx-auto my-48">
	<ScrollDown classNames="w-full h-full"></ScrollDown>
</div>
<Footer />
