<script>
	import './ireele.css';
	import { tick } from 'svelte';
  import tileData from '$lib/data.json'

	function hideTiles() {
		const allTiles = document.querySelectorAll('.tile');
		console.log(allTiles);
		const hideTiles = allTiles.filter((f, i) => i % 2 === 0);
		hideTiles.forEach((t) => t.classList.add('filter-hide'));
	}
	function filterThis(e) {
		let classForHiding = e.target.value;
		const tiles = document.querySelectorAll(`.${classForHiding}`);
		const checked = e.target.checked;
		// console.log(tiles)
		// tiles.forEach(t => t.classList.toggle('filter-hide'))
		if (checked) {
			// tiles.forEach(t => t.classList.add('display-none'))
			// tiles.forEach(t => t.style.position = 'absolute')
			tiles.forEach((t, i) => {
				setTimeout(() => {
					t.classList.add('filter-hide');
					setTimeout(() => {
						t.classList.add('display-none');
					}, 1000);
				}, 1000 * i);
			});
		} else {
			// tiles.forEach(t => t.classList.remove('display-none'))
			// tiles.forEach(t => t.style.position = 'relative')
			tiles.forEach((t, i) => {
				t.classList.remove('display-none');
				t.classList.remove('filter-hide');
				setTimeout(() => {
					tick();
				}, 1000 * i);
			});
			// tiles.forEach(t => t.style.display = 'flex')
		}
	}
	// console.log(tileData);
</script>

<button on:click={hideTiles}>hide em</button>
<div class="search-results-block tile-container">
	<div class="filter-box">
		<h4>Filter Items</h4>
		<p><em id="results-count">71 results.</em></p>
		<h5>Subjects</h5>
		<ul class="filter-list" id="subjects">
			<li>
				<input
					type="checkbox"
					id="american-indians-indigenous-peoples"
					value="american-indians-indigenous-peoples"
					name="filter"
					on:click={filterThis}
				/>
				<label for="american-indians-indigenous-peoples"
					>American Indians &amp; Indigenous Peoples</label
				>
			</li>
			<li>
				<input type="checkbox" id="arts" value="arts" name="filter" on:click={filterThis} />
				<label for="arts">Arts</label>
			</li>
			<li>
				<input
					type="checkbox"
					id="family-papers"
					value="family-papers"
					name="filter"
					on:click={filterThis}
				/>
				<label for="family-papers">Family Papers</label>
			</li>
			<li>
				<input
					type="checkbox"
					id="literature"
					value="literature"
					name="filter"
					on:click={filterThis}
				/>
				<label for="literature">Literature</label>
			</li>
			<li>
				<input type="checkbox" id="politics" value="politics" name="filter" on:click={filterThis} />
				<label for="politics">Politics</label>
			</li>
			<li>
				<input
					type="checkbox"
					id="railroads"
					value="railroads"
					name="filter"
					on:click={filterThis}
				/>
				<label for="railroads">Railroads</label>
			</li>
			<li>
				<input
					type="checkbox"
					id="social-action"
					value="social-action"
					name="filter"
					on:click={filterThis}
				/>
				<label for="social-action">Social Action</label>
			</li>
			<li>
				<input type="checkbox" id="travel" value="travel" name="filter" on:click={filterThis} />
				<label for="travel">Travel</label>
			</li>
			<li>
				<input type="checkbox" id="women" value="women" name="filter" on:click={filterThis} />
				<label for="women">Women</label>
			</li>
		</ul>
		<h5>Language</h5>
		<ul class="filter-list" id="language">
			<li>
				<input type="checkbox" id="english" value="english" name="filter" on:click={filterThis} />
				<label for="english">English</label>
			</li>
			<li>
				<input type="checkbox" id="french" value="french" name="filter" on:click={filterThis} />
				<label for="french">French</label>
			</li>
			<li>
				<input type="checkbox" id="german" value="german" name="filter" on:click={filterThis} />
				<label for="german">German</label>
			</li>
			<li>
				<input type="checkbox" id="spanish" value="spanish" name="filter" on:click={filterThis} />
				<label for="spanish">Spanish</label>
			</li>
		</ul>
		<h5>Format</h5>
		<ul class="filter-list" id="format">
			<li>
				<input type="checkbox" id="diaries" value="diaries" name="filter" on:click={filterThis} />
				<label for="diaries">Diaries</label>
			</li>
			<li>
				<input type="checkbox" id="letters" value="letters" name="filter" on:click={filterThis} />
				<label for="letters">Letters</label>
			</li>
		</ul>
		<div class="date-filter">
			<h5 id="date-display">Dates: 1800 - 2024</h5>
			<div
				id="date-slider"
				class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
			>
				<div
					class="ui-slider-range ui-corner-all ui-widget-header"
					style="left: 0%; width: 100%;"
				></div>
				<span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"
				></span><span
					tabindex="0"
					class="ui-slider-handle ui-corner-all ui-state-default"
					style="left: 100%;"
				></span>
			</div>
		</div>
	</div>
	<ul class="resource-list preview tiles">
		{#each tileData as tile}
			<a href="/dohmekas/s/transcribe/item/351" class={tile[0]}>
				<img src={tile[1]} alt="Jack Conroy letters [06.01], 1924-1991" />
				<div class="text-block">
					<h4 class="title">{tile[2]}</h4>
					<div class="progress-bar" style="background:  var(--progress-bg);">
						<span>0% Complete</span>
					</div>
				</div>
			</a>
		{/each}
	</ul>
</div>

<style>
	.tile {
		/* clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); */
	}
	.tiles {
		display: grid;
		grid-template-columns: repeat(6, 200px);
		gap: 0.25rem;
	}
	.tile {
		/* grid-column: span 2; */
		aspect-ratio: 1;
	}

	.tile:hover {
		filter: saturate(1.33);
		z-index: 1000;
		/* box-shadow: 0 0 5px 5px color-mix(in oklab, var(--midphire) 20%, transparent); */
		/* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); */
		& img {
		}
	}
</style>
