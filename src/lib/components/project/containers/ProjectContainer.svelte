<script lang="ts">
	export let customMargin: string = '';
	export let topOnly: boolean = false;
	export let bottomOnly: boolean = false;
	export let noMargin: boolean = false;
</script>

<div
	class="mx-auto w-full px-4 lg:w-10/12 lg:px-0
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

<!-- {customMargin !== '' ? customMargin : ''}
{topOnly && customMargin === '' && !bottomOnly && !noMargin
? 'mt-24 lg:mt-96'
: ''}
{bottomOnly && customMargin === '' && !topOnly
? 'mb-24 lg:mb-96'
: ''}
{customMargin === '' && !topOnly && !bottomOnly
? 'my-24 lg:my-96'
: ''} -->
