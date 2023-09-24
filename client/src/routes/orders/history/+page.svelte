<script lang="ts">
	import Row from '$lib/table/Row.svelte';
	import Table from '$lib/table/Table.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<Table>
		<!-- add data to this -->
		<Row />
	</Table>
</div>
