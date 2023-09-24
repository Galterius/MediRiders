<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<caption
					class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
				>
					Order History
				</caption>
				<thead
					class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="px-6 py-3"> Product name </th>
						<th scope="col" class="px-6 py-3"> Color </th>
						<th scope="col" class="px-6 py-3"> Category </th>
						<th scope="col" class="px-6 py-3"> Price </th>
						<th scope="col" class="px-6 py-3">
							<span class="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<slot />
				</tbody>
			</table>
		</div>
	</div>
</section>
