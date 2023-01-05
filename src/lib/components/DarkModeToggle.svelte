<script>
	import { darkMode } from '$lib/info/darkMode';
</script>

<div x-data={$darkMode ? 'dark' : ''} class="{$darkMode ? 'dark' : ''} app">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-full w-full"
		viewBox="0 0 24 24"
		fill="none"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<!-- Moon -->
		<path pathLength="1" class="moon-icon" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		<!-- Sun -->
		<circle pathLength="1" class="sun-icon" cx="12" cy="12" r="5" />
		<line pathLength="1" class="sun-icon" x1="12" y1="1" x2="12" y2="3" />
		<line pathLength="1" class="sun-icon" x1="12" y1="21" x2="12" y2="23" />
		<line pathLength="1" class="sun-icon" x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line pathLength="1" class="sun-icon" x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		<line pathLength="1" class="sun-icon" x1="1" y1="12" x2="3" y2="12" />
		<line pathLength="1" class="sun-icon" x1="21" y1="12" x2="23" y2="12" />
		<line pathLength="1" class="sun-icon" x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line pathLength="1" class="sun-icon" x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	</svg>
</div>

<style lang="postcss">
	.app {
		--transition-duration: 50ms;
		--text: #333;
	}

	.app.dark {
		--text: white;
	}

	.app {
		background-color: var(--bg);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text);
		transition: color, background-color var(--transition-duration);
	}

	.app svg {
		transition: stroke var(--transition-duration);
		stroke: var(--text);
	}

	.app .moon-icon {
		stroke-dasharray: 0px 1px;
		opacity: 0;
		transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
	}

	.app .sun-icon {
		stroke-dasharray: 1px 1px;
		opacity: 1;
		transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
	}

	.app.dark .moon-icon {
		stroke-dasharray: 1px 1px;
		opacity: 1;
	}

	.app.dark .sun-icon {
		stroke-dasharray: 0px 1px;
		opacity: 0;
	}
</style>
