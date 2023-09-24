<script lang="ts">
	import { Button } from '$lib/button';
	import { Field, Form } from '$lib/form';
	import { formKey } from '$lib/form/form-key';
	import { getContext } from 'svelte';
	import { v4 as uuid } from 'uuid';

	const formStore: any = getContext(formKey);
	const textAreaName = 'details';
	const id = uuid();
</script>

<div>
	<section class="bg-gray-50 dark:bg-gray-900">
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<div
				class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
			>
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1
						class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
					>
						Create An Order
					</h1>
					<Form>
						<div>
							<label for={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Order Details</label
							>
							<textarea
								{id}
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Describe Your Order Here"
								name={textAreaName}
								on:input={(e) => {
									$formStore.values[textAreaName] = e.currentTarget.value;
								}}
							/>
						</div>
						<!-- <Field
							name="password"
							type="password"
							text="Your password"
							placeholder="••••••••"
							required={true}
						/> -->
						<Button type="submit" text="Create Order" />
					</Form>
				</div>
			</div>
		</div>
	</section>
</div>
