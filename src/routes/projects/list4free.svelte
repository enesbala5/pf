<script lang="ts">
	import Introduction from '$lib/components/project/Introduction.svelte';
	import ProjectContainer from '$lib/components/project/containers/ProjectContainer.svelte';
	import SmallProjectContainer from '$lib/components/project/containers/SmallProjectContainer.svelte';
	import ImageCard from '$lib/components/project/ImageCard.svelte';
	import Quote from '$lib/components/project/Quote.svelte';
	import Callout from '$lib/components/project/Callout.svelte';
	import Headline from '$lib/components/project/Headline.svelte';
	import Text from '$lib/components/project/Text.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NextCase from '$lib/sections/NextCase.svelte';
</script>

<title>List4Free - Enes Bala</title>

<div class="mt-24  w-full font-aeonik lg:mt-24">
	<!-- make template -->
	<ProjectContainer noMargin>
		<div class="mx-auto w-full lg:w-10/12">
			<p class="projectSubheading">List4Free</p>

			<p class="projectHeadline mt-4">
				The UK's <br class="lg:hidden" /> Real Estate Marketplace
			</p>
			<p
				class="mt-16 font-mono text-xs opacity-50 lg:text-sm"
			>
				Branding & Identity Design - Website Design
			</p>
		</div>
	</ProjectContainer>

	<ImageCard
		fullscreen
		topMargin
		image="list4free/test.jpg"
		description="View of all List4Free screens"
	/>
	<ProjectContainer>
		<Introduction
			text="It was truly a novel experience for us to participate in
				an ambitious, large-scale project like uLesson. Our team
				partly took on the job of market research, strategy
				elaboration, development, and of course, getting
				creative with visuals. Cuberto worked through dozens of
				design concepts throughout the lengthy collaborative
				process and successfully created an unforgettable design
				for the mobile and desktop application. Oh, and did we
				mention that we built the website from scratch?"
		/>
	</ProjectContainer>
	<ImageCard
		fullscreen
		image="list4free/screens.jpg"
		description="View of all List4Free screens"
	/>

	<SmallProjectContainer topOnly>
		<Callout
			title="Creation of a design system"
			text="Our final flourish was transferring models to engineers. Side by side, Cisco’s and Cuberto’s teams collected specs and outlined all possible scenarios for adding elements and blocks for new pages."
		/>

		<div class="grid grid-cols-2 grid-rows-1 gap-8">
			<ImageCard
				image="list4free/logo.png"
				description="Lorem ipsum delor del ipsum."
			/>
			<ImageCard
				image="list4free/screens.jpg"
				description="Lorem ipsum delor del ipsum."
			/>
		</div>
	</SmallProjectContainer>
	<ProjectContainer>
		<ProjectContainer noMargin>
			<Headline
				>Site of the day according to Awwwards and CSSDA</Headline
			>
			<Text
				>List4Free provides with an easy solution to
				uploading your property to the biggest marketplace
				available</Text
			>
		</ProjectContainer>
		<ImageCard
			topMargin
			image="list4free/screens.jpg"
			description="View of all List4Free screens"
		/>
	</ProjectContainer>
	<SmallProjectContainer topOnly>
		<Quote person="Alban Bala">
			We’d like to express our sincere gratitude to Cuberto
			for their contribution to the development of our
			product.
			<br /><br />
			After over 2 years of tight cooperation, the team proved
			to be highly qualified specialists and took on a big chunk
			of work, starting with logo & brand identity for two DSX
			products, and moving forward with a complete website development,
			two native mobile applications development for iOS / Android
			and the design of our internal platform.
		</Quote>
	</SmallProjectContainer>
</div>
<NextCase />

<Footer />
