<script lang="ts">
	import { Navbar } from '$lib/navbar';
	import '../app.css';
</script>

<main>
	<Navbar />
	<div>
		<slot />
	</div>
</main>
