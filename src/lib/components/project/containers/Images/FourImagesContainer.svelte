<div class="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 lg:gap-8">
	<div
		class="flex flex-row space-y-4 lg:flex-col lg:space-y-8"
	>
		<slot name="firstCol" />
	</div>
	<div
		class="flex flex-row space-y-4 lg:flex-col  lg:space-y-8"
		style="margin-top: 25%"
	>
		<slot name="secondCol" />
	</div>
</div>
