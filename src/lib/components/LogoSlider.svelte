<script>
	import { logoPanel } from '$lib/info/logoPanel';
	import { hoverOverLink } from '$lib/state/hoverOver';

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
	}
</script>

<div
	class="marquee-w my-12 bg-neutral-100 dark:bg-darkgray lg:my-44"
>
	<div class="marquee">
		<div
			class="child mx-auto flex w-full items-center justify-between"
		>
			{#each logoPanel as logo}
				<div
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}
					class=" cursor-none opacity-70 transition-opacity ease-in-out hover:opacity-100"
				>
					<svelte:component
						this={logo.logo}
						classNames={`fill-black dark:fill-white opacity-80 hover:opacity-90 w-full ${
							logo.name === 'Universi Language Center'
								? 'h-16'
								: logo.name === 'List4Free'
								? 'h-6'
								: 'max-h-8'
						}`}
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
