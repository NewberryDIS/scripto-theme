<script>
	import { page } from '$app/stores';
	let viewerType = $page.params.edit;
	import { onMount } from 'svelte';
	import 'tify/dist/tify.css';

	let id = '2KXJ8ZPQ7TLX';
	let imageUrl = ['https://collections.newberry.org/IIIF3/Image/', '/full/max/0/default.jpg'];
	let maniUrl = 'https://collections.newberry.org/IIIF3/Presentation/Manifest/';
	let transc = '';
	function saveIt() {
		console.log('save');
	}
	function resetIt() {
		console.log('reset');
	}

	let tify = false;
	onMount(async () => {
		if (viewerType === 'tify') {
			await import('tify');
			console.log(maniUrl + id);
			tify = new Tify({
				container: '#tify',
				manifestUrl: maniUrl + id
			});
		}
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
		{#if viewerType === 'tify'}
			<div id="tify"></div>
		{:else if viewerType === 'mira'}
			<iframe src="https://digital.newberry.org/mirador?manifest={maniUrl + id}" title="mirador"
			></iframe>
		{/if}
	</div>
	<div class="right">
		<p class="mani-title">{maniUrl + id}</p>
		<textarea bind:value={transc}></textarea>
		<div class="button-container">
			<button on:click={prevPage}>Previous</button>
			<button on:click={saveIt}>Save</button>
			<button on:click={resetIt}>Reset</button>
			<button on:click={nextPage}>Next</button>
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
	iframe {
		flex: 1;
		height: 100%;
		width: 100%;
		border: 1pix solid var(--tify-border-color);
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
