<script>
	import './irrele.css';
	import data from './data.json';
</script>

<main>
	{#each data as datum, i}
		{#if i !== 0}
			<div class="wrapper">
				<div class="tile">
					<img src={datum[1]} alt={datum[2]} />
					<!-- <div class="background">
                    <div class="overlay"></div>
				</div> -->
					<div class="text-block">
						<h4>{datum[2]}</h4>
						<p>0% complete</p>
					</div>
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
	.tile-tiny {
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute !important;
		top: 0;
		left: 0;
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
	.diamond {
		clip-path: path(
			'M 80 20 C 100 0 100 0 120 20 C 140 40 160 60 180 80 C 200 100 200 100 180 120 C 160 140 140 160 120 180 C 100 200 100 200 80 180 C 60 160 40 140 20 120 C 0 100 0 100 20 80 Z'
		);
	}
	.wrapper {
		grid-column: span 2;
		filter: drop-shadow(0 10px 10px var(--midphire));
		min-height: 300px;
		&:nth-child(5n) {
			grid-column: 2 / span 2;
		}
		&:hover {
			z-index: 3;
			& .tile {
				clip-path: var(--rectangle);
			}
		}
	}
	.tile {
		position: relative;

		/* width: 100%;
		height: 100%; */
		clip-path: var(--diamond);
	}
	.background {
		/* position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0; */
		/* width: 100%;
		height: 100%; */
	}
	:global(body):has(.tile:hover) {
		/* main:has(img:hover) { */
		background: #ccca;

		& img {
			filter: saturate(1.5);
		}
		& img:not(:hover) {
			filter: saturate(0);
		}
	}
</style>
