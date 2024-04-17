<script>
import { onMount } from 'svelte'
onMount( async ( ) => {
  await import( './js/dark-mode-toggle.js' );
  await import( './js/newberry-logo.js' );
  await import( './js/toggle-menu.js' );
})
const tiles = [    
  {
    url: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/s/transcribe/item/6480",
    name: "Mark J. Satter papers, [02.01]",
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/square/d30379818b3f7654bbad260c32afc62459eb3da2.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/6479",
    name: "Mark J. Satter papers, [01.01]",
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/square/70a8ad64d8eca2e7ea03726ccb95727880730f05.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/5514",
    name: "Mary Hartwell Catherwood papers [01.05], 1865-1945",
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/square/24c578bbaba9ab01e6c2c3a1712a7153b2dcbea2.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/5513",
    name: "Mary Hartwell Catherwood papers [01.04], 1865-1945",
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/square/55fb699cf6938fe39094bb3f95048134d4fa46a4.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/5512",
    name: "Mary Hartwell Catherwood papers [01.03], 1865-1945",
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/square/cb1777b929335b5189ec3f8a0b1b3ded80671d14.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/5511",
    name: "Mary Hartwell Catherwood papers [01.02], 1865-1945",
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/square/2eee7cd0ee5696aa2bb8084d0f0eb80240834962.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/5510",
    name: "Mary Hartwell Catherwood papers [01.01], 1865-1945",
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/square/a2856005107c2871916fbe48f07eb2c65e33fcd1.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/603",
    name: "Jack Conroy papers [38.01], 1924-1991",
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/square/8e56dbe123c6769adcdab9227d1eb8f4adc992f9.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/602",
    name: "Jack Conroy papers [37.02], 1924-1991",
    img: ""
  } ]

const peepos = [ 
  {
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/5509",
    name: "Mary Hartwell Catherwood",
    img: "",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/3132",
    name: "Isaac Stevens Metcalf" ,
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/asset/753402eec9fe06571c095a4ae4d11857145c1d1a.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/3083" ,
    name: "Mark J. Satter" ,
    img: "https://transcribe.newberry.orghttps://transcribe.newberry.org/ohmekas/files/asset/17d92b47a46d944c7b2505deddbaf2ea06c9a898.jpg",
  },{
    url: "https://transcribe.newberry.org/ohmekas/s/transcribe/item/2987",
    name: "May Walden",
    img: "",
  } ]
// sm: 1 across: first 5  (1 * 6 - 1)
// md: 2 across: first 7  (2 * 4 - 1)
// lg: 3 across: first 11 (3 * 4 - 1)
// xl: 4 across: first 11 (4 * 3 - 1)
// 2x: 5 across: first 9  (5 * 2 - 1)
// 2x: 5 across: first 14 (5 * 3 - 1)
</script>
<section class="preview-block">
  <h2>Objects and other things</h2>
  <ul class="resource-list preview">
    {#each tiles as tile, idx}
      <li class="item resource">
        <a class="resource-thumbnail" href={tile.url}>
          <img 
            src={tile.img} alt="">
        </a> 
        <h3>
          <a class="resource-title" href={tile.url}>
            {tile.name}
          </a>
        </h3>
      </li>
    {/each}
    <li class="browse-all">
      <a href="https://transcribe.newberry.org/ohmekas/s/transcribe/item?resource_class_id%5B0%5D=31&amp;sort_by=created&amp;sort_order=desc">Browse all</a>
    </li>
  </ul>


</section>
<section class="preview-block">
  <h2>Peepo</h2>
  <ul class="resource-list preview">
    {#each peepos as peepo, idx}
      <li class="item resource">
        <a class="resource-thumbnail" href={peepo.url}>
          <img 
            src={peepo.img} alt="">
        </a> 
        <h3>
          <a class="resource-title" href={peepo.url}>
            {peepo.name}
          </a>
        </h3>
      </li>
    {/each}
    <li class="browse-all">
      <a href="https://transcribe.newberry.org/ohmekas/s/transcribe/item?resource_class_id%5B0%5D=31&amp;sort_by=created&amp;sort_order=desc">Browse all</a>
    </li>
  </ul>


</section>
<style>
/* .no-img { */
/*   border: 1px solid #f0f; */
/* } */
.preview-block {
  position: relative;
  z-index: 40;
  padding: 33px;
  background: rgb(var(--bg-color-1));

}
@media screen and (max-width: 500px) {
.preview-block {
    margin: 0;
  }
.preview-block .resource-list .resource {
    aspect-ratio: auto;
  } 
.preview-block .resource-list .resource h3 a {
    position: relative;
  } 
}

@media screen and (min-width: 500px) {
.preview-block .resource-list .resource {
    aspect-ratio: 1 / 1;
  } 
.preview-block .resource-list .resource h3  a {
    position: absolute;
  } 
}
.preview-block .resource-list .resource h3 {
  margin:0;
  display: flex;
  } 
  .resource-list.preview {
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  } 
.resource-list.preview {
  display: grid;
  gap: 11px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.preview-block .resource-list .resource-thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  float: none;
  width: 100%;
  height: 100%;

}
.preview-block .resource-list .resource-thumbnail img {
  width: 120%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

.preview-block .resource-list  h3 {
  background: rgb(var(--bg-color-2));
}
.preview-block .resource-list  h3 a {
  background: rgb(var(--bg-color-2));
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 11px;
  line-height: 22px;
}
.preview-block .resource-list .browse-all {
  background: rgb(var(--bg-color-2));
  border-bottom: 1px solid rgb(var(--fg-color-2));
  color: rgb(var(--fg-color-2));
}
.preview-block .resource-list .browse-all a {
  font-family: 'styrene';
  font-size: 20px;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.browse-all{ 
  aspect-ratio: 1 / 1; 
}

.preview-block .resource-list a {
  /* background: none !important; */
}
.preview-block li {
  position: relative;
  width: 100%;
}
.preview-block .resource-list .resource {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-top: 0;


}
.preview-block .resource-list .resource , .browse-all{
/* box-shadow: 0 0 10px rgba(var(--fg-color-1),0.5); */
box-shadow: 0 0 20px rgba(var(--fg-color-1),0.33);
/* box-shadow: 0 0 40px rgba(var(--fg-color-1),0.5); */
/* box-shadow: 0 0 80px rgba(var(--fg-color-1),0.5); */
/* box-shadow: 0 0 160px rgba(var(--fg-color-1),0.5); */
/* box-shadow: 0 0 320px rgba(var(--fg-color-1),0.5); */
/* box-shadow: 0 0 640px rgba(var(--fg-color-1),0.5); */
  /* box-shadow: 0 0 10px rgba(var(--fg-color-1),0.5), 0 0 20px rgba(var(--fg-color-1),0.5), 0 0 40px rgba(var(--fg-color-1),0.5), 0 0 80px rgba(var(--fg-color-1),0.5), 0 0 160px rgba(var(--fg-color-1),0.5), 0 0 320px rgba(var(--fg-color-1),0.5), 0 0 640px rgba(var(--fg-color-1),0.5); */
}
@media screen and (max-width: 500px) {

}
</style>

