<script lang="ts">
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';

	function hoveredOverText() {
		hoverOverText.set(true);
	}
	function hoveredOverLink() {
		hoverOverLink.set(true);
	}
	function notHovering() {
		hoverOverText.set(false);
	}

	export let text: string;
	export let link: boolean = false;
	export let linkUrl: string = '';
	export let lowOpacity: boolean = false;
</script>

<div
	class="group w-fit"
	on:mouseenter={link ? hoveredOverText : hoveredOverLink}
	on:mouseleave={notHovering}
>
	{#if !link}
		<p
			class="text-lg {lowOpacity
				? 'opacity-0 hover:opacity-100'
				: ''} transition-all delay-75  lg:text-xl"
		>
			{text}
		</p>
		<div
			class="mt-0.5 h-0.5 w-1 {lowOpacity
				? 'opacity-0'
				: 'opacity-0'} bg-white transition-all delay-75 group-hover:w-full group-hover:opacity-100 dark:bg-white"
		/>
	{/if}
	{#if link && linkUrl !== ''}
		<a
			href={linkUrl}
			class="text-lg {lowOpacity
				? 'opacity-0 hover:opacity-100'
				: ''}  transition-all delay-75  lg:text-xl"
		>
			{text}
		</a>
		<div
			class="mt-0.5 h-0.5 w-1 {lowOpacity
				? 'opacity-0 '
				: 'opacity-0'} bg-white transition-all delay-75 group-hover:w-full group-hover:opacity-100 dark:bg-white"
		/>
	{/if}
</div>
