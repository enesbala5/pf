<script lang="ts">
	export let customMargin: string = '';
	export let topOnly: boolean = false;
	export let bottomOnly: boolean = false;
	export let noMargin: boolean = false;
	export let noPadding: boolean = false;
	export let widthNotDefined: boolean = false;
</script>

<div
	class="
		mx-auto
		{widthNotDefined ? '' : noPadding? 'w-full px-0 lg:w-10/12' : 'w-full px-4 lg:w-10/12 lg:px-0'}
		{noMargin
		? ''
		: customMargin !== ''
		? customMargin
		: topOnly
		? 'mt-24 lg:mt-96'
		: bottomOnly
		? 'mb-24 lg:mb-96'
		: 'my-24 lg:my-96'}
		"
>
	<slot />
</div>
