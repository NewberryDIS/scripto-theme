<script>
const image = "http://transcribe.newberry.org/dohmekas/files/square/9252b8ba13965e6bfc47057edbaadb8f8799f112.jpg"
// tile effects: 
// autoplay
// moouseover = stop temporarily
// onclick next/prev (also means stop permanently)
// array of all items; 
// array of visible items;
// active index  = central item;
// active index +&- 1/2/3/4/5
// wide enough to display all elements - 3 (so first and last are not displayed & next are half displayed)

</script>
<main>
<article class="content">
<div class="creator">
        <h2>Jack Conroy</h2>
        <figure>
          <img src="https://collections.newberry.org/IIIF3/Image/2KXJ8ZS5W9CGO/full/600,/0/default.jpg" alt="Jack Conroy">
          <figcaption><a href="https://collections.newberry.org/asset-management/2KXJ8ZS5W9CGO" target="_blank"> Jack Conroy, ca. 1930s.</a></figcaption>
        </figure>
        <p class="dates">1899-1990</p>
        <p class="detail">Author, proletarian literature</p>
        <p class="desc">John Wesley Conroy was born Dec. 5, 1898 to Irish immigrants in Monkey Nest, a coal mining camp in Missouri. From age 13 he labored in various train car factories, steel mills, and auto factories. Conroy drew upon these experiences to write his first novel, The Disinherited. Widely reviewed, The Disinherited propelled its impoverished author, then 34, into public attention both in the U.S. and abroad and firmly established his reputation as an authentic worker-writer of the proletarian literary movement...<a class="read-more" href="https://archives.newberry.org/repositories/2/resources/46" target="_blank">Read more at collection guide</a></p>
        <p class="coll">Correspondence, works, scrapbooks, subject files, magazines, journal submissions, photographs, and ephemera documenting the life and literary output of Jack Conroy. The bulk of the collection is correspondence to Jack from friends, relatives, coworkers, colleagues, and admirers. Prominent and frequent correspondents include Nelson Algren, Sanora Babb, Arna Bontemps, Gwendolyn Brooks, Malcolm Cowley, Lawrence "Bud" Fallon, Lou Gilbert, Curt Johnson...<a class="read-more" href="https://archives.newberry.org/repositories/2/resources/46" target="_blank">Read more at collection guide</a></p>
        <dl>
          <dt>Related Resources: </dt>
          <dd><a href="https://collections.newberry.org/C.aspx?VP3=DamView&amp;KW_RID=2KXJ20V8XZL&amp;KW_LT=NL1ND000000007406&amp;FR_=1&amp;W=1920&amp;H=953#/DamView&amp;VBID=2KXJA43N3F0V&amp;PN=1&amp;WS=SearchResults" title="Jack Conroy papers at Newberry Digital Collections" target="_blank">Jack Conroy papers at Newberry Digital Collections</a></dd><dd><a href="https://dcc.newberry.org/?p=14378" title="Teaching essay: The struggle for civil rights in the urban North" target="_blank">Teaching essay: The struggle for civil rights in the urban North</a></dd><dd><a href="https://digital.newberry.org/scalar/making-modernism/conroys-fragments-on-chicago" title="Making modernism: Conroy’s fragments on Chicago" target="_blank">Making modernism: Conroy’s fragments on Chicago</a></dd>        </dl>

      </div>
<div class="tiles">
      <div class="gradient-edges"></div>

      {#each Array.from({length: 20}).map((_, i) => i) as i}
      <div class="tile">
<img src={image} alt="asfd" />
      </div>
      {/each}
    </div>
  </article>
</main>
<style>
.tiles { 
display: flex;
justify-content: center;
  align-items: center;
  gap: 1rem;
width: 100%;
  height: 300px;
  overflow: auto;
scroll-snap-type: x mandatory;
position: relative;
}
.gradient-edges {
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
background: linear-gradient(to right, #fff 0% 3%, #fff0 9% 91%, #fff 97% 100%);
}
.tile {
scroll-snap-align: center;
  min-width: 250px;
  min-height: 250px;
  width: 250px;
  height: 250px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
