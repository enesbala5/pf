<script lang="ts">
	import { darkMode } from '$lib/info/darkMode';
	export let classNames: string = 'w-full h-full';
</script>

<div class="scrolldown-container {classNames}">
	<div class="scrolldown-btn h-full w-full">
		<svg
			version="1.1"
			id="chevron"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 50 80"
			enable-background="new 0 0 50 80"
			xml:space="preserve"
		>
			<path
				class="first-path"
				fill={!$darkMode ? '#000' : '#fff'}
				d="M24.752,79.182c-0.397,0-0.752-0.154-1.06-0.463L2.207,57.234c-0.306-0.305-0.458-0.656-0.458-1.057                  s0.152-0.752,0.458-1.059l2.305-2.305c0.309-0.309,0.663-0.461,1.06-0.461c0.398,0,0.752,0.152,1.061,0.461l18.119,18.119                  l18.122-18.119c0.306-0.309,0.657-0.461,1.057-0.461c0.402,0,0.753,0.152,1.059,0.461l2.306,2.305                  c0.308,0.307,0.461,0.658,0.461,1.059s-0.153,0.752-0.461,1.057L25.813,78.719C25.504,79.027,25.15,79.182,24.752,79.182z"
			/>
			<path
				class="second-path"
				fill={!$darkMode ? '#000' : '#fff'}
				d="M24.752,58.25c-0.397,0-0.752-0.154-1.06-0.463L2.207,36.303c-0.306-0.304-0.458-0.655-0.458-1.057                  c0-0.4,0.152-0.752,0.458-1.058l2.305-2.305c0.309-0.308,0.663-0.461,1.06-0.461c0.398,0,0.752,0.153,1.061,0.461l18.119,18.12                  l18.122-18.12c0.306-0.308,0.657-0.461,1.057-0.461c0.402,0,0.753,0.153,1.059,0.461l2.306,2.305                  c0.308,0.306,0.461,0.657,0.461,1.058c0,0.401-0.153,0.753-0.461,1.057L25.813,57.787C25.504,58.096,25.15,58.25,24.752,58.25z"
			/>
		</svg>
	</div>
</div>

<style>
	.scrolldown-container {
		position: relative;
	}

	.scrolldown-container .scrolldown-btn {
		width: 50%;
		height: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		bottom: auto;
		right: auto;
		-webkit-transform: translateX(-50%) translateY(-50%);
		-moz-transform: translateX(-50%) translateY(-50%);
		-ms-transform: translateX(-50%) translateY(-50%);
		-o-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
		text-align: center;
	}
	.scrolldown-container .scrolldown-btn svg {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: auto;
	}
	.scrolldown-container .scrolldown-btn svg path.first-path {
		animation: scrollanim 1s ease-in-out infinite;
		animation-delay: 0.8s;
	}
	.scrolldown-container .scrolldown-btn svg path.second-path {
		animation: scrollanim2 1s ease-in-out infinite;
	}

	@-webkit-keyframes scrollanim {
		0% {
			-webkit-transform: translate(0, -40px);
			opacity: 0;
		}
		60% {
			-webkit-transform: translate(0, 0);
			opacity: 0.8;
		}
	}
	@-moz-keyframes scrollanim {
		0% {
			-moz-transform: translate(0, -40px);
			opacity: 0;
		}
		60% {
			-moz-transform: translate(0, 0);
			opacity: 0.8;
		}
	}
	@keyframes scrollanim {
		0% {
			-webkit-transform: translate(0, -40px);
			-moz-transform: translate(0, -40px);
			-ms-transform: translate(0, -40px);
			-o-transform: translate(0, -40px);
			transform: translate(0, -40px);
			opacity: 0;
		}
		60% {
			-webkit-transform: translate(0, 0);
			-moz-transform: translate(0, 0);
			-ms-transform: translate(0, 0);
			-o-transform: translate(0, 0);
			transform: translate(0, 0);
			opacity: 0.8;
		}
	}
	@-webkit-keyframes scrollanim2 {
		0% {
			-webkit-transform: translate(0, -40px);
			opacity: 0;
		}
		60% {
			-webkit-transform: translate(0, 0px);
			opacity: 0.6;
		}
	}
	@-moz-keyframes scrollanim2 {
		0% {
			-moz-transform: translate(0, -40px);
			opacity: 0;
		}
		60% {
			-moz-transform: translate(0, 0px);
			opacity: 0.6;
		}
	}
	@keyframes scrollanim2 {
		0% {
			-webkit-transform: translate(0, -40px);
			-moz-transform: translate(0, -40px);
			-ms-transform: translate(0, -40px);
			-o-transform: translate(0, -40px);
			transform: translate(0, -40px);
			opacity: 0;
		}
		60% {
			-webkit-transform: translate(0, 0px);
			-moz-transform: translate(0, 0px);
			-ms-transform: translate(0, 0px);
			-o-transform: translate(0, 0px);
			transform: translate(0, 0px);
			opacity: 0.6;
		}
	}
</style>
