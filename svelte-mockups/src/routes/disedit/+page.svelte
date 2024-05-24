<script>
	let id = '2KXJ8ZPQ7TLX';
	let url = ['https://collections.newberry.org/IIIF3/Image/', '/full/max/0/default.jpg'];
	let maniUrl = 'https://collections.newberry.org/IIIF3/Presentation/Manifest/';
	let transc = '';
</script>

<main>
	<div class="left">
		<iframe src="https://digital.newberry.org/mirador?manifest={maniUrl + id}" name="mirador"
		></iframe>
	</div>
	<div class="right">
		<p>{maniUrl + id}</p>
		<textarea bind:value={transc}></textarea>
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
	iframe {
		flex: 1;
		/* width:  calc(100% - 33px); */
		/* height: calc(100% - 33px); */
		width: 100%;
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
