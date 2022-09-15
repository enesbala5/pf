<script>
	import {
		Parallax,
		ParallaxLayer,
		StickyLayer,
	} from 'svelte-parallax';
</script>

<Parallax
	sections={2}
	config={{ stiffness: 0.5, damping: 0.9 }}
>
	<ParallaxLayer rate={0.9} offset={0.9}>
		<img
			src="/images/projects/list4free/screens.jpg"
			alt="a horse"
		/>
	</ParallaxLayer>
</Parallax>
