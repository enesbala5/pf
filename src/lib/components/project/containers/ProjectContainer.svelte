<script lang="ts">
	export let customMargin: string = '';
	export let topOnly: boolean = false;
	export let bottomOnly: boolean = false;
	export let noMargin: boolean = false;
	export let noPadding: boolean = false;
	export let widthNotDefined: boolean = false;

	export let halfMargin: boolean = false;
</script>

<div
	class="
		mx-auto
		{widthNotDefined ? '' : noPadding ? 'w-full px-0 lg:w-10/12' : 'w-full px-4 lg:w-10/12 lg:px-0'}
		{noMargin
		? ''
		: customMargin !== ''
		? customMargin
		: topOnly
		? halfMargin
			? 'mt-12 lg:mt-48'
			: 'mt-24 lg:mt-80'
		: bottomOnly
		? halfMargin
			? 'mb-12 lg:mb-48'
			: 'mb-24 lg:mb-80'
		: halfMargin
		? 'my-12 lg:my-48'
		: 'my-24 lg:my-80'}
		"
>
	<slot />
</div>
