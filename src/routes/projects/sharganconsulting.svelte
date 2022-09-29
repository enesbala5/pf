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
	import FourImagesContainer from '$lib/components/project/containers/Images/FourImagesContainer.svelte';
	import ProjectTitle from '$lib/components/project/ProjectTitle.svelte';
	import TwoImagesContainer from '$lib/components/project/containers/Images/TwoImagesContainer.svelte';
</script>

<title>Shargan Consulting - Enes Bala</title>

<div class="mt-24  w-full font-aeonik lg:mt-24">
	<!-- make template -->
	<ProjectTitle projectName="Shargan Consulting">
		<span slot="description">
			Consultancy Firm, <br />
			based in Tirana
		</span>
	</ProjectTitle>

	<ImageCard
		fullscreen
		topMargin
		image="sharganconsulting/heroImage.svg"
		description="View of all List4Free screens"
	/>
	<ProjectContainer>
		<Introduction>
			Building an identity for a company seeking to enter an
			industry as consolidated and static as Real Estate, is
			known to be challenging. <br />
			However, List4Free takes a different approach from typical
			Real Estate market players, as it seeks to connect buyers
			to sellers, in a modern, innovative way. <br /><br /> The
			brand has to convey the image of trust-worthiness and solidity,
			but not fail to acknowledge the modern, innovative approach
			the company is brining to the market.
		</Introduction>
	</ProjectContainer>
	<ImageCard
		fullscreen
		image="sharganconsulting/heroImage2.svg"
		description="View of all List4Free screens"
	/>

	<SmallProjectContainer topOnly>
		<Callout
			title="The wordmark"
			text={`Through the use of Negative Space, the number 4 in "List4Free", was incorporated in the wordmark, while preserving legibility.`}
		/>
		<FourImagesContainer>
			<div slot="firstCol">
				<ImageCard
					image="sharganconsulting/grid1/1.jpg"
					description="List4Free Wordmark"
				/>
				<ImageCard
					image="sharganconsulting/grid1/3.jpg"
					description="Compact version of wordmark"
				/>
			</div>
			<div slot="secondCol">
				<ImageCard
					image="sharganconsulting/grid1/2.jpg"
					description="Business Card"
				/>
				<ImageCard
					image="sharganconsulting/grid1/4.jpg"
					description="Stylised representative icon"
				/>
			</div>
		</FourImagesContainer>
	</SmallProjectContainer>
	<ProjectContainer topOnly>
		<ProjectContainer noMargin noPadding>
			<Headline
				>Creating a intuitive website experience</Headline
			>
			<Text
				>List4Free provides users the opportunity of direct
				and safe trade till they reach to a deal. The User
				Experience was designed around this deeply-rooted
				idea.
			</Text>
		</ProjectContainer>
		<ProjectContainer customMargin="mt-24 lg:mt-48">
			<TwoImagesContainer>
				<ImageCard image="sharganconsulting/grid2/1.jpg" />
				<ImageCard image="sharganconsulting/grid2/2.jpg" />
			</TwoImagesContainer>
		<ImageCard
			customAttribute="mt-8"
			aspectVideo
			image="sharganconsulting/heroImage3.jpg"
		/>
		</ProjectContainer>
	</ProjectContainer>
	<SmallProjectContainer topOnly={true}>
		<Quote person="Klod Shaqiri">
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
