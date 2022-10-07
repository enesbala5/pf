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
	import ImageContainer from '$lib/components/project/containers/Images/ImageContainer.svelte';
	import ProjectTitle from '$lib/components/project/ProjectTitle.svelte';
</script>

<title>Click Properties - Enes Bala</title>

<div class="mt-24  w-full font-aeonik lg:mt-24">
	<!-- make template -->
	<ProjectTitle projectName="Click Properties">
		<span slot="description">
			Emerging Real Estate <br />
			Company in Tirana
		</span>
	</ProjectTitle>

	<ImageCard fullscreen topMargin image="clickproperties/heroImage_1.svg" description="View of all List4Free screens" />
	<ProjectContainer>
		<Introduction>
			Click Properties is a Real Estate company based in Tirana, Albania. It seeks to find properties for their clients,
			which will 'CLICK' the moment they lay eyes on them.
			<br /><br />
			Click Properties maintains a modern and professional profile, and being that it is a new entry on an already established
			industry, the challenge faced while building their identity, was creating a mark which would remain engrained on all
			who happened to observe it, and as to the client's liking, also tied to the concept of 'Property'.
		</Introduction>
	</ProjectContainer>
	<ProjectContainer>
		<ImageCard aspectVideo image="clickproperties/heroImage_4.jpg" />
	</ProjectContainer>
	<SmallProjectContainer topOnly>
		<Callout
			title="A careful and purposeful branding"
			text="I really enjoyed creating the branding of Click Properties; building a solid and memorable symbol 
that represents the company and appeals to the target audience was a difficult yet interesting challenge."
		/>
	</SmallProjectContainer>
	<ProjectContainer>
		<ImageCard aspectVideo image="clickproperties/heroImage_2.jpg" />
	</ProjectContainer>
	<SmallProjectContainer bottomOnly>
		<ImageContainer>
			<div slot="firstCol">
				<ImageCard
					description="First I created a symbol which was simple 
											and mobile-friendly, since that is where most users interact with the brand."
					image="clickproperties/gridItems/1.jpg"
					aspectGridItem
				/>
			</div>
			<div slot="secondCol">
				<ImageCard
					description="Then, I found a solid typeface, which suited the logomark, and created a hierarchy between 'Click' and 'Properties'."
					image="clickproperties/gridItems/2.jpg"
					aspectGridItem
				/>
			</div>
		</ImageContainer>
	</SmallProjectContainer>
	<SmallProjectContainer noMargin>
		<Headline>Iterations of the logomark</Headline>
		<Text
			>I experimented on many different logomark versions and went through many iterations on the journey of finding the
			most suitable option for the Click Properties brand identity. These are some of the options which were considered
			and later improved upon.</Text
		>
	</SmallProjectContainer>
	<ProjectContainer halfMargin>
		<ImageCard
			image="clickproperties/heroImage_7.jpg"
			aspectVideo
			description="Alternate Logomark Options"
			altText="Iterations of the Click Properties Logomark"
		/>
	</ProjectContainer>
	<SmallProjectContainer topOnly>
		<Callout
			title="Building a complete Brand Identity"
			text="After the branding process, Click Properties completed their Brand Identity with a Letterhead Template, Business Card, etc."
		/>
	</SmallProjectContainer>
	<ProjectContainer halfMargin>
			<ImageCard
				aspectVideo
				image="clickproperties/identity/1.jpg"
				altText="Click Properties Business Card - Enes Bala"
				description="Engraved Business Card"
			/>
		<div class="space-y-8">
			<ImageCard
				aspectVideo
				image="clickproperties/identity/2.jpg"
				altText="Click Properties Poster Design - Enes Bala"
			/>
			<ImageCard
				aspectVideo
				image="clickproperties/identity/3.jpg"
				altText="Click Properties Letterhead Template - Enes Bala"
				
			/>
			<ImageCard
				aspectVideo
				image="clickproperties/identity/4.jpg"
				altText="Click Properties Social Media Posts - Enes Bala"
			/>
		</div>
	</ProjectContainer>

	<!-- quote -->
	<!-- <SmallProjectContainer topOnly={true}>
		<Quote person="Ermal Mullalli">
			We’d like to express our sincere gratitude to Cuberto for their contribution to the development of our product.
			<br /><br />
			After over 2 years of tight cooperation, the team proved to be highly qualified specialists and took on a big chunk
			of work, starting with logo & brand identity for two DSX products, and moving forward with a complete website development,
			two native mobile applications development for iOS / Android and the design of our internal platform.
		</Quote>
	</SmallProjectContainer> -->
</div>
<NextCase />

<Footer />
