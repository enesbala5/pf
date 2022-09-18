<script lang="ts">
	import { goto } from '$app/navigation';
	import { emailAddress } from '$lib/info/info';
	import { navigation } from '$lib/info/nav';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}


	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}

	export let margin: boolean = true;
</script>

<div
	class="{margin
		? 'mt-24 mb-20 lg:my-64'
		: ''} mx-auto flex w-full flex-col-reverse items-center px-4 pb-10 lg:w-10/12 lg:flex-row lg:px-0"
>
	<div class="mt-8 w-full lg:mt-0 lg:w-1/2">
		<h2 class="text-2xl font-medium lg:text-3xl ">
			Interested in working together?
		</h2>
		<p class="mt-4 lg:mt-2">
			Get in touch and let's make something great
		</p>

		<div class="mt-14 flex items-center space-x-6">
			<button
				on:click={() => goto(navigation.contact)}
				class="buttonPrimary"
				on:mouseenter={hoveredOverLink}
				on:mouseleave={notHovering}>Get in touch</button
			>
			<a
				href={`mailto:${emailAddress}`}
				class="opacity-70"
				on:mouseenter={hoveredOverLink}
				on:mouseleave={notHovering}>Send me an email</a
			>
		</div>
	</div>
	<div
		class="h-96 max-h-48 w-full overflow-hidden bg-neutral-200 dark:bg-darkgray lg:max-h-80 lg:w-1/2 rounded-md"
	>
		<div
			class="h-full w-full mix-blend-multiply dark:opacity-40 dark:mix-blend-lighten dark:invert"
		>
			<img
				src="images/contact.png"
				alt="Hand writing note"
				class="h-full w-full object-cover"
			/>
		</div>
	</div>
</div>
