<script>
	import '../simpler/irrele.css';
	import data from '../simpler/data.json';
</script>

<main>
	{#each data as datum, i}
		{#if i !== 0}
			<div class="tile {i === 3 ? 'exposed' : ''}">
				<img src={datum[1]} alt={datum[2]} />&nbsp;
				<!-- <div class="background">
					<div class="overlay"></div>
				</div> -->
				<div class="text-block">
					<h4>{datum[2]}</h4>
					<p>0% complete</p>
				</div>
			</div>
		{:else}
			<div class="tile tile-tiny">
				<img src={datum[1]} alt={datum[2]} />
				<div class="text-block">
					<h4>{datum[2]}</h4>
					<p>0% complete</p>
				</div>
				<div class="overlay"></div>
			</div>
		{/if}
	{/each}
</main>

<style>
	.tile {
		position: relative;
		grid-column: span 2;
		aspect-ratio: 1 / 1.25;
		height: 300px;
		width: 200px;
		/* height: 100%; */
		&:nth-child(5n) {
			grid-column: 2 / span 2;
		}
		&:not(.exposed) {
			clip-path: var(--diamond);

			&:hover {
				clip-path: var(--rectangle);
				/* z-index: 3; */
				/* clip-path: path(
				'M 0 0 C 100 0 100 0 200 0 C 200 50 200 50 200 80 C 200 100 200 100 200 120 C 200 150 200 150 200 200 C 100 200 100 200 0 200 C 0 150 0 150 0 120 C 0 100 0 100 0 80 Z'
			); */
				/* clip-path: path(
				'M 0 0 C 100 0 100 0 200 0 C 200 50 200 50 200 80 C 200 100 200 100 200 120 C 200 150 200 150 200 300 C 100 300 100 300 0 300 C 0 150 0 150 0 120 C 0 100 0 100 0 80 Z'
			); */
			}
		}
	}
	img {
		height: 100%;
		width: 100%;
	}
	main {
		padding: 0.5rem;
		display: grid;
		place-items: center;
		background: #cccc;
		grid-template-columns: repeat(6, 100px);
		grid-auto-rows: 100px;
		gap: 0.5rem;
	}
</style>
