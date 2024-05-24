<script>
	import { onMount } from 'svelte';

	import 'tify/dist/tify.css';

	let id = '2KXJ8ZPQ7TLX';
	let url = ['https://collections.newberry.org/IIIF3/Image/', '/full/max/0/default.jpg'];
	let maniUrl = 'https://collections.newberry.org/IIIF3/Presentation/Manifest/';
	let transc = '';

	let tify = false;
	onMount(async () => {
		await import('tify');
		tify = new Tify({
			container: '#tify',
			manifestUrl: maniUrl + id
		});
	});

	function nextPage() {
		if (tify) {
			// if (tify.page + 1 < )
			tify.setPage(tify.page + 1);
		}
	}
	function prevPage() {
		if (tify) {
			tify.setPage(tify.page - 1);
		}
	}
</script>

<main>
	<div class="left">
		<div id="tify"></div>
	</div>
	<div class="right">
		<p class="mani-title">{maniUrl + id}</p>
		<textarea bind:value={transc}></textarea>
		<div class="button-container">
			{#each Array.from({ length: 4 }).map((_, i) => i) as i}
				<button>buttin {i}</button>
			{/each}
		</div>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		--tify-base-color-light: #333;
		--tify-base-color-lighter: #222;
		--tify-border-color: #ccc;
		--tify-link-color: #0f0;
		--tify-link-hover-color: #f0f;
		--tify-text-color: #ccc;
		--tify-text-muted-color: #bbb;
		--tify-header-bg: var(--tify-base-color-light);
		background: var(--tify-base-color-lighter);
		color: var(--tify-text-color);
	}
	main {
		height: 100%;
		height: 95svh;
		/* height: 100dvh; */
		/* width: 100dvw; */
		overflow: hidden;

		/* display: flex; */
		/* gap: 11px; */
		padding: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.left,
	.right {
		flex: 1;
		position: relative;
	}
	.right {
		display: flex;
		flex-direction: column;
		/* width:  calc(100% - 22px); */
		/* height: calc(100% - 22px); */
	}
	#tify {
		flex: 1;
		/* width:  calc(100% - 33px); */
		/* height: calc(100% - 33px); */
		/* width:  100%; */
		height: 100%;
	}
	textarea {
		flex: 1;
		background: var(--tify-base-color-light);
		border: 1pix solid var(--tify-border-color);

		color: var(--tify-text-color);
	}
	.button-container,
	.mani-title {
		margin: 0;
		padding: 0;
		flex-basis: 50px;
	}
</style>
