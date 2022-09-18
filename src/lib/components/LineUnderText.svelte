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
		hoverOverLink.set(false);
	}

	export let text: string = '';
	export let link: boolean = false;
	export let linkUrl: string = '';
	export let custom: boolean = false;
	export let central: boolean = false;
	export let centralOpacity: string =
		'opacity-10 dark:opacity-30';

	type LineColor =
		| 'default'
		| 'inverted'
		| 'white'
		| 'black';
	export let lineColor: LineColor = 'default';
	type TextColor = 'default' | 'inverted';
	export let textColor: TextColor = 'default';
</script>

<div
	class="group relative w-fit {textColor === 'default'
		? ''
		: 'text-black dark:text-white'}"
	on:mouseenter={!link ? hoveredOverText : hoveredOverLink}
	on:mouseleave={notHovering}
>
	{#if custom}
		<slot />
		{#if central}
			<div
				class="absolute bottom-0 left-1/2 mt-0.5 h-0.5 w-1 -translate-x-1/2 opacity-0 transition-all delay-100 group-hover:w-full group-hover:opacity-100
				{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'}"
			/>
			<div
				class="mt-0.5 h-0.5 w-full {centralOpacity} 
				{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'}"
			/>
		{/if}
		{#if !central}
			<div
				class="mt-0.5 h-0.5 w-1 opacity-0 transition-all delay-75 group-hover:w-full group-hover:opacity-100
					{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'}"
			/>
		{/if}
	{/if}
	{#if !custom && !link}
		<p class="text-lg transition-all delay-75 lg:text-xl">
			{text}
		</p>
		{#if central}
			<div
				class="absolute bottom-0 left-1/2 mt-0.5 h-0.5 w-1 -translate-x-1/2 opacity-0 transition-all delay-100 group-hover:w-full group-hover:opacity-100
					{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'}"
			/>
			<div
				class="mt-0.5 h-0.5 w-full {centralOpacity} 
				{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'} "
			/>
		{/if}
		{#if !central}
			<div
				class="mt-0.5 h-0.5 w-1 opacity-0 transition-all delay-75 group-hover:w-full group-hover:opacity-100
				{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'} "
			/>
		{/if}
	{/if}
	{#if !custom && link && linkUrl !== ''}
		<a
			href={linkUrl}
			class="text-lg  transition-all delay-75  lg:text-xl"
		>
			{text}
		</a>
		{#if central}
			<div
				class="absolute bottom-0 left-1/2 mt-0.5 
				{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'}  h-0.5 w-1 -translate-x-1/2 opacity-0 transition-all delay-100 group-hover:w-full group-hover:opacity-100"
			/>
			<div
				class="mt-0.5 h-0.5 w-full {centralOpacity}
					{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'} "
			/>
		{/if}
		{#if !central}
			<div
				class="mt-0.5 h-0.5 w-1 opacity-0 
				{lineColor === 'inverted'
					? 'bg-white dark:bg-black'
					: lineColor === 'white'
					? 'bg-white'
					: lineColor === 'black'
					? 'bg-black'
					: 'bg-black dark:bg-white'} transition-all delay-75 group-hover:w-full group-hover:opacity-100"
			/>
		{/if}
	{/if}
</div>
