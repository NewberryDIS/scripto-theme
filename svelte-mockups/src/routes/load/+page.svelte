<script>
import tileData from '$lib/data.json';
let loading = false;


	function filterThis(e) {
		let classForHiding = e.target.value;
		const tiles = document.querySelectorAll(`.${classForHiding}`);
		const checked = e.target.checked;
		if (checked) {
			tiles.forEach((t, i) => {
				setTimeout(() => {
					t.classList.add('filter-hide');
					setTimeout(() => {
						t.classList.add('display-none');
					}, 1000);
				}, 1000 * i);
			});
		} else {
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
</script>

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
body {
    box-sizing: border-box;
    --diamond: path('M 80 20 C 100 0 100 0 120 20 C 140 40 160 60 180 80 C 200 100 200 100 180 120 C 160 140 140 160 120 180 C 100 200 100 200 80 180 C 60 160 40 140 20 120 C 0 100 0 100 20 80 Z');
    --square: path('M 0 0 C 100 0 100 0 200 0 C 200 50 200 50 200 80 C 200 100 200 100 200 120 C 200 150 200 150 200 200 C 100 200 100 200 0 200 C 0 150 0 150 0 120 C 0 100 0 100 0 80 Z');
    --square: path('M 180 0 C 200 0 200 0 200 20 C 200 40 200 160 200 180 C 200 200 200 200 180 200 C 0 200 40 200 20 200 C 0 200 0 200 0 180 C 0 140 0 60 0 20 C 0 0 0 0 20 0 Z');
    --rectangle: path('M 180 0 C 200 0 200 0 200 20 C 200 40 200 300 200 280 C 200 300 200 300 180 300 C 160 300 60 300 20 300 C 0 300 0 300 0 280 C 0 28 0 60 0 20 C 0 0 0 0 20 0 Z');
    padding-top: 222px;
    background: #cccc;
    color: #ccc;
    display: grid;
    place-items: center;
    --midphire-lab: 23, 7, -31;
    --midphire-cmyk: 96, 88, 32, 21;
    --parknite-lab: 64, -12, 3;
    --parknite-cmyk: 51, 26, 43, 1;
    --mulnite-lab: 66, 27, 0;
    --mulnite-cmyk: 18, 51, 22, 0;
    --flame: 241, 97, 81;
    --park-green: 32, 84, 62;
    --tile: 146, 88, 64;
    --sapphire: 64, 81, 163;
    --lake: 126, 196, 226;
    --mulberry: 173, 43, 90;
    --lavender: 205, 184, 209;
    --midnight: 17, 26, 42;
    --granite: 234, 235, 231;
    --sand: 234, 220, 201;
    --angle: 70deg;
    --dist: 66%;
    --midpark: color-mix(in oklab, rgb(var(--park-green)) 80%, rgb(var(--midnight)));
    --midphire: color-mix(in oklab, rgb(var(--sapphire)), rgb(var(--midnight)));
    --parknite: color-mix(in oklab, rgb(var(--park-green)), rgb(var(--granite)));
    --mulnite: color-mix(in oklab, rgb(var(--mulberry)), rgb(var(--granite)));
    --sm: 640px;
    --md: 768px;
    --lg: 1024px;
    --xl: 1280px;
    --xxl: 1536px;
    --splash-color: var(--midpark);
    --fg-color: rgb(var(--midnight));
    --fg-color-2: rgb(var(--granite));
    --bg-color: rgb(var(--granite));
    --bg-color-2: var(--midphire);
    --progress-green: var(--parknite);
    --progress-red: var(--mulnite);
    --progress-bg: rgb(var(--granite));
    --shadow: color-mix(in oklab, var(--midphire) 10%, transparent);

}

html {
    background: #333;
}

body,
main,
.tile,
img {
    transition: 200ms;

}

main {
    min-height: 100vh;
}

p,
h4 {
    font-family: "Monaspace Xenon";
    margin: 0;
    padding: 0;
}

.tile {
    display: flex;
    /* flex-direction: column;
    justify-content: end;
    align-items: center; */
    position: relative;
    padding-top: 200px;
}

.text-block {
    position: relative;
    /* top: 200px; */
    z-index: 2;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    text-align: center;

    & h4,
    p {

        background: var(--bg-color-2);
    }
}

img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    object-fit: cover;
    /* filter: saturate(0.5); */
    z-index: 1;
}

.tile-tiny {
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    opacity: 0;
    pointer-events: none;
    top: 0;
    left: 0;
}

/* @keyframes unfold {
    from {
        clip-path: var(--diamond);

    }


    to {
        clip-path: var(--square);

    }
} */
</style>
