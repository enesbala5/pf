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
			class="child flex w-full items-center justify-between"
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
	<div class="marquee2 marquee">
		<div
			class="child flex w-full items-center justify-between"
		>
			{#each logoPanel as logo}
				<div
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}
					class="cursor-none opacity-70 transition-opacity ease-in-out hover:opacity-100"
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

<style lang="scss">
	.marquee-w {
		position: relative;
		width: 100%;

		height: 140px;
		overflow: hidden;
	}

	.marquee {
		position: absolute;
		white-space: nowrap;
		overflow: hidden;
		min-width: 100%;
		height: 100%;
	}

	.marquee .child {
		text-align: center;
		-webkit-text-stroke: 1px #43e486;
		white-space: nowrap;
		min-width: 100%;
		height: 100%;
		line-height: 140px;
		animation: marquee 10s linear infinite;
	}

	.marquee2 .child {
		animation-delay: 5s;
	}

	@keyframes marquee {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100%, 0);
		}
	}
</style>
