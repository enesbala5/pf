<script lang="ts">
	import ProjectContainer from './ProjectContainer.svelte';
	export let customMargin: string = '';
	export let topOnly: boolean = false;
	export let bottomOnly: boolean = false;
	export let noMargin: boolean = false;
</script>

<ProjectContainer
	{customMargin}
	{topOnly}
	{bottomOnly}
	{noMargin}
>
	<ProjectContainer noMargin={true} noPadding={true}>
		<slot />
	</ProjectContainer>
</ProjectContainer>
