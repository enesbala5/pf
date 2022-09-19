<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Select from 'svelte-select';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import { darkMode } from '$lib/info/darkMode';
	import { theme } from '$lib/state/theme';

	let items = [
		{ value: 'designUIUX', label: 'Design - UI / UX' },
		{ value: 'designOther', label: 'Design - other' },
		{ value: 'website', label: 'Website' },
	];
	let interest = '';

	function handleSelect(event: any) {
		interest = event.detail;
	}

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function hoveredOverText() {
		hoverOverText.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}
</script>

<title>Contact - Enes Bala</title>

<!-- contact -->
<div
	class="mx-auto mt-24 w-full px-4 font-aeonik lg:mt-24 lg:w-10/12 lg:px-0"
	on:mouseenter={notHovering}
>
	<h1 class="headline">Contact</h1>
	<div
		class="relative mx-auto mt-20 mb-8 text-lg lg:grid lg:grid-cols-10 lg:gap-2"
	>
		<div
			class="col-span-8 col-start-2 flex items-center justify-between"
		>
			<p class="text-justify">
				Love to hear from you,<br />
				Get in touch!
			</p>
			<div
				class="h-20"
				on:mouseenter={hoveredOverText}
				on:mouseleave={notHovering}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-full fill-black object-cover transition-colors ease-in-out dark:fill-white"
					viewBox="0 0 582.854 686.677"
				>
					<path
						id="Union_1"
						data-name="Union 1"
						d="M132.424,655.754c-2.729,12.2-4.107,21.385-10.821,29.395C118.586,676.22,122.283,665.777,132.424,655.754ZM98.8,657.084a46.108,46.108,0,0,1-17.662,27.087A45.4,45.4,0,0,1,98.8,657.084Zm-46.311-3.362c4.369-3.833,9.2-7.118,13.835-10.721l1.859,2.522a108.81,108.81,0,0,1-24.818,23.888C43.543,660.9,43.543,660.9,52.487,653.722Zm108.728-15.664a35.976,35.976,0,0,1,8.59,25.158C162.5,659.112,160.281,653.036,161.215,638.058ZM35.235,624.231a108.821,108.821,0,0,1,15.248-6.415l1.477,2.967c-7.479,7.819-17.669,10.682-28.572,15.1C23.81,626.189,31.1,626.714,35.235,624.231Zm70.646-18.158a23.786,23.786,0,0,1-11.507-29.515c4.487-14.252,15.074-23.891,25.2-34.078,17.4-17.407,34.438-35.286,51.433-52.579,6.09-6.379,12.142-13.256,18.563-20.744-13.041-7.161-21.547-17.086-20.983-32.536-22.72-9.584-38.5-29.61-29.381-62.789-3.12-1.593-6.6-3.492-9.921-5.568-16.722-10.627-22.461-24.678-14.955-42.992a105.957,105.957,0,0,1,17.84-29.1c24.5-28.03,49.981-55.217,74.851-82.773a172.308,172.308,0,0,1,19.048-22.03,246.344,246.344,0,0,0,39.267-41.819c7.912-9.767,14.487-20.681,21.915-31.328-.674-1.2-1.451-2.637-2.138-4a20.3,20.3,0,0,1-3.424-15.311,21.021,21.021,0,0,1,8.4-13.219c3.032-2.814,6.434-5.156,9.479-7.8,9.7-8.239,18.958-16.694,28.575-24.844,4.919-4.29,9.7-8.238,15.034-12.478,5.249-4.317,10.282-9.284,15.887-13.294A386.232,386.232,0,0,1,394.007,2.941c10.6-6.224,19.984-2.2,24.975,8.579a61.523,61.523,0,0,1,3.754,14.2A40.993,40.993,0,0,0,443.872,57a34.27,34.27,0,0,1,15.993,19.593A48.075,48.075,0,0,0,490.592,104.8c3.426,1.237,6.865,2.639,10.445,3.7a40.925,40.925,0,0,1,23.279,16.87,41.343,41.343,0,0,0,31.354,19,57.294,57.294,0,0,1,18.582,5.57c7.972,4.053,9.066,9.632,4.478,17.146L564.344,190.17a23.356,23.356,0,0,1-2.854,4.049c-12.779,13.639-25.723,27.289-38.324,41.081-4.994,5.463-9.365,11.461-13.748,17.294-11.734,15.307-15.123,16.734-35.846,14.74,3.029,13.426,5.623,26.635,9.034,39.615,4.352,16.572,10.589,32.75,13.871,49.487a70.593,70.593,0,0,1-19.543,66.623c-2.854,2.967-5.262,6.317-8.027,9.36A78.8,78.8,0,0,1,431.1,458.469a210.944,210.944,0,0,0-20.433,7.23c-20.291,7.968-25.391,24.016-13.448,42.921,5.411,8.662,11.777,16.752,16.946,25.517a141.15,141.15,0,0,1,9.2,20.114,8.778,8.778,0,0,1,.8,7.184,8.951,8.951,0,0,1-4.753,5.361,25.771,25.771,0,0,0-4.791,3.782c-16.4,15.331-35.311,16.282-54.568,7.348-20.9-9.724-40.243-21.982-48.236-45.852a52.246,52.246,0,0,1-.577-33.6,188.227,188.227,0,0,1,19.945-47.25,24.75,24.75,0,0,0,2.322-15.335,69.261,69.261,0,0,0-9.694,6.074c-8.893,7.844-17.608,15.84-26.31,24-26.181,24.576-51.98,49.789-78.708,73.741-25.251,22.589-50.031,45.892-80.273,62.035a68.444,68.444,0,0,1-15.846,6.212,23.362,23.362,0,0,1-5.806.725A24.656,24.656,0,0,1,105.881,606.073ZM277.634,380.543c-7.632,9.08-15.875,17.79-23.162,27.01-29.84,37.681-64.175,71.044-96.269,105.4-14.231,15.332-29.914,29.11-44.069,44.353a64.833,64.833,0,0,0-13.073,21.74,16.851,16.851,0,0,0,19.584,21.9,55.411,55.411,0,0,0,15.872-5.881c29.567-16.258,53.977-38.948,79.061-61.526,31.684-28.828,62.707-58.689,93.933-88.066a169.067,169.067,0,0,1,13.058-11.078,29.072,29.072,0,0,1,8.281-4.964c6.88-2.609,11.794.678,11.105,7.976a34.544,34.544,0,0,1-4.666,15.182,193.491,193.491,0,0,0-19.7,46.065,45.765,45.765,0,0,0,2.488,35.7c11.61,23.261,32.076,34.933,56.363,41.066,14.01,3.506,25.169-1.93,35.426-12.626-2.967-1.772-5.4-3.084-7.908-4.308-13.73-6.359-27.675-12.285-41.264-18.987-11-5.569-11.931-15.493-2.643-23.616a37.668,37.668,0,0,1,7.975-5.692c6.1-2.965,12.828-5.4,19.6-8.248l-1.209-7.07c-2.657-18.368,1.777-26.786,18.567-33.736,8.394-3.475,16.815-6.62,25.439-9.279a57.306,57.306,0,0,0,25.2-14.59c8.243-8.71,16.626-17.764,24.309-27.265a56.766,56.766,0,0,0,11.355-26.77,109,109,0,0,0-5.884-49.6c-4.874-16.865-12.308-33.451-13.794-50.659-2.008-19.667-12.768-28.585-28.013-37.327a219.478,219.478,0,0,1-46.343-30.926,545.887,545.887,0,0,0-64.22-49.041A360.589,360.589,0,0,1,297.668,133.5c-2.241-2.077-4.189-4.676-6.71-7.148-4.766,6.278-8.664,11.907-13.086,17.242a408.758,408.758,0,0,1-35.33,42.1,408.744,408.744,0,0,0-30.245,31.3c-24.107,27.749-49.714,54.363-73.91,82.034a104.793,104.793,0,0,0-17.8,27.432c-7.953,19.013.947,34.071,20.5,39.235L215.44,274.3c.368,4.8,1.527,6.878.877,8.177a69.335,69.335,0,0,1-6.8,10.1c-15.71,18.86-31.686,37.49-47.039,56.655a120.469,120.469,0,0,0-15.33,24.91,39.964,39.964,0,0,0,14.393,51.945,25.628,25.628,0,0,0,7.616,2.664c7.659-13.079,13.419-25.929,21.472-37.122,17.519-24.578,35.752-48.545,53.87-72.92a71.974,71.974,0,0,1,7.3-6.889c1.427,3.388,1.45,5.885.165,7.566-9.493,13.053-19.139,26.284-29.5,38.9a344.541,344.541,0,0,0-37.8,54.365,83.748,83.748,0,0,0-7.443,18.06c-4.653,17.511,1.967,27.831,20.983,32.536,13.531-15.778,27.5-32.422,41.217-47.883s25.1-33.237,42.923-45.18A21.112,21.112,0,0,1,277.634,380.543ZM389.012,511.331a109.49,109.49,0,0,0-18.229,5.561c-5.134,2.559-11.057,5.678-10.143,15.435l56.191,25.756a29.383,29.383,0,0,0-1.209-7.07c-7.372-12.51-14.986-24.918-22.6-37.326-.758-1.069-2.417-2.407-3.632-2.407A1.4,1.4,0,0,0,389.012,511.331ZM0,591.539c5.237-6.647,22.687-9.317,34.736-5.328A58.919,58.919,0,0,1,8.85,592.217,57.906,57.906,0,0,1,0,591.539Zm20.594-44.218a39.853,39.853,0,0,1,34.2,13.7A89.859,89.859,0,0,1,20.594,547.321ZM49.808,519.93a30.391,30.391,0,0,1,20.77,16.729A28.558,28.558,0,0,1,49.808,519.93Z"
						transform="translate(0.923 0.525)"
						stroke="rgba(0,0,0,0)"
						stroke-miterlimit="10"
						stroke-width="1"
					/>
				</svg>
			</div>
		</div>

		<!-- form - fix emailAddress -->
		<form
			action="https://formsubmit.co/1982af4d0e444a4a2359fc6ae59df2da"
			method="POST"
			class="col-span-8 col-start-2 mt-8 space-y-4 bg-neutral-100 p-4 text-base transition-colors ease-in-out dark:bg-darkgray lg:p-6"
		>
			<!-- formsubmit redirect etc -->
			<input
				type="hidden"
				name="_next"
				value="https://www.enesbala.com/thankyou"
			/>
			<input type="hidden" name="_captcha" value="false" />
			<input type="hidden" name="_template" value="table" />

			<!-- row -->
			<div
				class="flex flex-col items-center space-y-3 sm:flex-row sm:space-x-6 lg:space-y-0"
			>
				<div
					class="flex w-full flex-col space-y-3 sm:w-1/2"
				>
					<p>Your Name</p>
					<input
						on:mouseenter={hoveredOverText}
						on:mouseleave={notHovering}
						type="text"
						class="inputPrimary"
						name="Name Surname"
						placeholder="Name Surname"
						required
					/>
				</div>
				<div
					class="flex w-full flex-col space-y-3 sm:w-1/2"
				>
					<p>Your Address</p>
					<input
						on:mouseenter={hoveredOverText}
						on:mouseleave={notHovering}
						type="email"
						name="Email Address"
						class="inputPrimary"
						placeholder="name@email.com"
						required
					/>
				</div>
			</div>
			<!-- row -->
			<div class="flex items-center space-x-6">
				<div
					class="{$theme === 'dark'
						? 'selectStylingDark'
						: 'selectStyling'} flex w-full flex-col"
				>
					<p class="mb-3">What are you interested in</p>
					<div
						class="w-full font-aeonik"
						on:mouseenter={hoveredOverText}
						on:mouseleave={notHovering}
					>
						<Select {items} on:select={handleSelect} />
					</div>
				</div>
			</div>
			<!-- row -->
			<div class="flex items-center space-x-6">
				<div class="flex w-full flex-col space-y-3">
					<p>Message</p>
					<textarea
						required
						on:mouseenter={hoveredOverText}
						on:mouseleave={notHovering}
						name="message"
						placeholder="Let me know what your project is about"
						class="inputPrimary"
						id="message"
						cols="30"
						rows="5"
					/>
				</div>
			</div>
			<!-- end row -->
			<div class="flex w-full space-x-6 ">
				<button
					class="buttonSecondary mt-6 w-full lg:w-1/2"
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}>Just Send</button
				>
				<div class="invisible mt-6 hidden w-1/2 lg:block" />
			</div>
		</form>
		<!-- end form -->
		<!-- map -->
		<div
			class="col-span-8 col-start-2 mt-8 space-y-4 text-base"
		>
			<p class="opacity-70">Where I'm Located</p>
			<div
				class="flex h-36 w-full items-center justify-center overflow-hidden bg-neutral-100 dark:bg-darkgray lg:h-56"
			>
				<img
					src="images/map.png"
					alt="Map of Tirana, Albania"
					class="hidden h-full w-full object-cover dark:block dark:mix-blend-difference"
				/>
				<img
					src="images/mapLight.png"
					alt="Map of Tirana, Albania"
					class="h-full w-full object-cover mix-blend-multiply dark:hidden"
				/>
			</div>
		</div>
		<!-- end map -->
		<!-- additional contact -->
		<div
			class="col-span-8 col-start-2 mt-8 space-y-4 text-base"
		>
			<p class="opacity-70">
				You can also contact me through:
			</p>
			<div
				class="flex w-full flex-col items-center justify-between space-y-3 lg:flex-row lg:space-x-4 lg:space-y-0"
			>
				<!-- phone -->
				<a
					href="tel:+355682415881"
					class="group flex w-full items-center justify-between rounded-full bg-neutral-100 p-1 text-neutral-800 hover:bg-neutral-200 active:bg-opacity-80 dark:bg-darkgray dark:text-white dark:hover:bg-lightgray dark:active:bg-opacity-80"
				>
					<div
						class="flex items-center justify-center rounded-full "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10 fill-neutral-700 group-hover:fill-neutral-800 group-active:fill-neutral-700 dark:fill-lightgray dark:group-active:fill-darkgray"
							viewBox="0 0 512 512"
						>
							<g
								id="Group_16"
								data-name="Group 16"
								transform="translate(-5411 -1960)"
							>
								<path
									id="Path_51"
									data-name="Path 51"
									d="M256,0C397.29,0,512,114.71,512,256S397.29,512,256,512,0,397.29,0,256,114.71,0,256,0Z"
									transform="translate(5411 1960)"
									fill-rule="evenodd"
								/>
								<path
									id="Subtraction_1"
									data-name="Subtraction 1"
									d="M296.148,320a200.779,200.779,0,0,1-40.277-4.073,198.855,198.855,0,0,1-37.538-11.68,200.356,200.356,0,0,1-33.988-18.476,201.191,201.191,0,0,1-72.555-88.107A199.085,199.085,0,0,1,100.113,160.1a201.093,201.093,0,0,1-4.073-40.308,13.585,13.585,0,0,1,10.6-13.318L150.717,96.3a13.634,13.634,0,0,1,3.079-.354,13.794,13.794,0,0,1,12.61,8.282l20.36,47.5a13.687,13.687,0,0,1-3.93,15.943L159.266,187a153.484,153.484,0,0,0,69.8,69.783l19.267-23.547a13.547,13.547,0,0,1,4.765-3.738,13.774,13.774,0,0,1,5.818-1.3,13.458,13.458,0,0,1,5.377,1.113l47.458,20.344a13.733,13.733,0,0,1,7.9,15.658L309.483,309.4A13.6,13.6,0,0,1,296.148,320Z"
									transform="translate(5458.96 2008.054)"
									fill="#fff"
								/>
							</g>
						</svg>
					</div>
					<p class="mr-4">Mobile Phone</p>
				</a>
				<!-- wp -->
				<a
					href="https://api.whatsapp.com/send?phone=355682415881"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex w-full items-center justify-between rounded-full bg-neutral-100 p-1 text-neutral-800 hover:bg-neutral-200 active:bg-opacity-80 dark:bg-darkgray dark:text-white dark:hover:bg-lightgray dark:active:bg-opacity-80"
				>
					<div
						class="flex items-center justify-center rounded-full "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10 fill-neutral-700 group-hover:fill-neutral-800 group-active:fill-neutral-700 dark:fill-lightgray dark:group-active:fill-darkgray"
							viewBox="0 0 512 512"
						>
							<g
								id="Group_17"
								data-name="Group 17"
								transform="translate(-6050 -1960)"
							>
								<path
									id="Path_52"
									data-name="Path 52"
									d="M256,0C397.29,0,512,114.71,512,256S397.29,512,256,512,0,397.29,0,256,114.71,0,256,0Z"
									transform="translate(6050 1960)"
									fill-rule="evenodd"
								/>
								<path
									id="Subtraction_2"
									data-name="Subtraction 2"
									d="M99.024,414.72l23.027-84.086a161.937,161.937,0,0,1-21.666-81.122c.035-89.468,72.851-162.256,162.319-162.256a162.322,162.322,0,0,1,162.32,162.385c-.036,89.474-72.851,162.266-162.317,162.266h-.067a162.248,162.248,0,0,1-77.567-19.751L99.024,414.72h0Zm90.033-51.942v0h0l4.927,2.922a134.749,134.749,0,0,0,68.667,18.8h.054c74.36,0,134.881-60.5,134.912-134.87A134.917,134.917,0,0,0,262.76,114.661c-74.393,0-134.94,60.5-134.969,134.861A134.522,134.522,0,0,0,148.418,321.3l3.208,5.1L138,376.169ZM304.9,327.564h0a51.1,51.1,0,0,1-15.7-2.384,233.391,233.391,0,0,1-23.121-8.541,129.112,129.112,0,0,1-26.067-15.35A177.031,177.031,0,0,1,219.358,283,210.409,210.409,0,0,1,197.5,256.429c-.337-.483-.58-.832-.714-1.011l-.035-.047a98.662,98.662,0,0,1-9.071-14.584,77.763,77.763,0,0,1-5.176-12.8,51.089,51.089,0,0,1-2.279-14.515,46.172,46.172,0,0,1,5.116-21.8,49.387,49.387,0,0,1,8.284-11.172l.026-.027c.276-.295.538-.574.769-.826a15.791,15.791,0,0,1,5.788-4.059,13.62,13.62,0,0,1,5.027-1.015c2.284,0,5.231.016,7.773.143.169.008.354.012.6.012h.636a6.187,6.187,0,0,1,3.769.977c1.53,1.035,2.878,2.989,4.12,5.974,1.113,2.673,2.737,6.625,4.456,10.809l.02.048c3.445,8.385,7.351,17.889,8.029,19.248a7.486,7.486,0,0,1,.338,7.1c-.2.4-.384.776-.562,1.139l-.005.011a22.991,22.991,0,0,1-3.489,5.613c-.676.789-1.383,1.65-2.067,2.483-1.377,1.677-2.8,3.408-4.016,4.62-1.958,1.949-4.177,4.158-1.778,8.275,2.91,4.991,10.934,17.718,22.563,28.087a105.416,105.416,0,0,0,29.938,18.919c1.126.488,2.015.874,2.678,1.2a10.071,10.071,0,0,0,4.416,1.305,5.623,5.623,0,0,0,4.371-2.32c2-2.285,10.034-11.681,12.843-15.9,1.417-2.128,2.889-3.077,4.772-3.077a13.416,13.416,0,0,1,4.352,1.047c3.632,1.322,23.074,10.87,27.715,13.191.791.4,1.516.746,2.216,1.085l.005,0c2.852,1.378,4.736,2.288,5.552,3.649.987,1.648,1.044,9.722-2.366,19.28-1.5,4.217-5.778,8.747-12.033,12.755-5.233,3.353-11.255,5.914-15.342,6.525A66.119,66.119,0,0,1,304.9,327.564Z"
									transform="translate(6050 1960)"
									fill="#fff"
								/>
							</g>
						</svg>
					</div>
					<p class="mr-4">WhatsApp</p>
				</a>
				<!-- linkedin -->
				<a
					href="https://www.linkedin.com/in/enesbala/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex w-full items-center justify-between rounded-full bg-neutral-100 p-1 text-neutral-800 hover:bg-neutral-200 active:bg-opacity-80 dark:bg-darkgray dark:text-white dark:hover:bg-lightgray dark:active:bg-opacity-80"
				>
					<div
						class="flex items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10 fill-neutral-700 group-hover:fill-neutral-800 group-active:fill-neutral-700 dark:fill-lightgray dark:group-active:fill-darkgray"
							viewBox="0 0 512 512"
						>
							<g
								id="Group_18"
								data-name="Group 18"
								transform="translate(-6850 -1960)"
							>
								<path
									id="Path_49"
									data-name="Path 49"
									d="M256,0C397.29,0,512,114.71,512,256S397.29,512,256,512,0,397.29,0,256,114.71,0,256,0ZM175.963,399.871V199.95H109.5V399.871Zm239.62,0V285.225c0-61.409-32.787-89.976-76.509-89.976-35.255,0-51.047,19.389-59.889,33.007V199.95H212.738c.881,18.757,0,199.921,0,199.921h66.446V288.221c0-5.976.43-11.95,2.191-16.221,4.8-11.935,15.737-24.3,34.1-24.3,24.034,0,33.663,18.34,33.663,45.2V399.871h66.45ZM143.18,103.55c-22.74,0-37.6,14.95-37.6,34.545,0,19.182,14.4,34.544,36.717,34.544h.429c23.175,0,37.6-15.362,37.6-34.544-.43-19.6-14.424-34.545-37.149-34.545Z"
									transform="translate(6850 1960)"
									fill-rule="evenodd"
								/>
								<path
									id="Subtraction_3"
									data-name="Subtraction 3"
									d="M415.583,399.872h-66.45V292.9c0-14.067-2.631-25.061-7.819-32.676-5.664-8.313-14.359-12.528-25.845-12.528-22.577,0-31.8,18.6-34.095,24.3-1.5,3.626-2.192,8.78-2.192,16.222v111.65H212.738c.009-1.794.867-181.444,0-199.921h66.447v28.306c4.249-6.545,10.369-14.915,20.039-21.61a61.365,61.365,0,0,1,16.862-8.155,77.974,77.974,0,0,1,22.987-3.242,82.555,82.555,0,0,1,30.4,5.423,65.227,65.227,0,0,1,24.251,16.537,76.468,76.468,0,0,1,16.053,28.051c3.853,11.6,5.806,25.049,5.806,39.966V399.871Zm-239.62,0H109.5V199.95h66.463V399.871ZM142.729,172.639H142.3a41.752,41.752,0,0,1-15.15-2.7A33.3,33.3,0,0,1,105.583,138.1a35.046,35.046,0,0,1,2.677-13.664,32.053,32.053,0,0,1,7.594-10.956,34.835,34.835,0,0,1,11.858-7.282,44.234,44.234,0,0,1,15.468-2.642c10.912,0,20.226,3.432,26.935,9.924a32.485,32.485,0,0,1,7.424,10.956,37.6,37.6,0,0,1,2.79,13.664,35.047,35.047,0,0,1-2.616,13.49,32.186,32.186,0,0,1-7.493,10.975,34.608,34.608,0,0,1-11.839,7.379A44.2,44.2,0,0,1,142.729,172.639Z"
									transform="translate(6850 1960)"
									fill="#fff"
								/>
							</g>
						</svg>
					</div>
					<p class="mr-4">Linkedin</p>
				</a>
			</div>
		</div>
		<!-- end additional contact -->
	</div>
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-96 font-aeonik">
	<Footer />
</div>

<!-- end footer -->
<style>
	.selectStylingDark {
		--background: #1f1f1f;
		--border: none;
		--inputFontSize: 1rem;
		--borderRadius: none;
		--listBorderRadius: none;
		--listBackground: #1f1f1f;
		--itemHoverBG: #141414;
		--placeholderColor: #fff;
		--placeholderOpacity: 50%;
		--inputColor: #fff;
		--inputPadding: 0.75rem 1.25rem;
		--height: 3rem;
		--clearSelectColor: #5d6167;
		--clearSelectFocusColor: #5d6167;
		--itemIsActiveBG: #141414;
	}
	.selectStyling {
		--background: #e5e5e5;
		--border: none;
		--inputFontSize: 1rem;
		--borderRadius: none;
		--listBorderRadius: none;
		--listBackground: #e5e5e5;
		--itemHoverBG: #f5f5f5;
		--placeholderColor: #475569;
		--placeholderOpacity: 100%;
		--inputColor: #000;
		--inputPadding: 0.75rem 1.25rem;
		--height: 3rem;
		--clearSelectColor: #5d6167;
		--clearSelectFocusColor: #5d6167;
		--itemIsActiveBG: #f5f5f5;
		--itemIsActiveColor: #000;
	}
</style>
