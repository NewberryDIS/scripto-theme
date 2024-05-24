<script>
const pix = [
  "adam-bignell-Frt_UFRKMvc-unsplash.jpg",
  "agata-ciosek-eppywzUKWzA-unsplash.jpg",
  "alexandr-istomin-QmuHSij3bzk-unsplash.jpg",
  "andrea-de-santis-KF52HaIDtyM-unsplash.jpg",
  "andrew-keymaster-KiXccYM2eQo-unsplash.jpg",
  "annie-spratt-VfXZg_-8f6A-unsplash.jpg",
  "barthelemy-de-mazenod-rRLZZ8BHZNo-unsplash.jpg",
  "benoit-deschasaux-WSsW8EpMaeQ-unsplash.jpg",
  "blaire-harmon-HkG8cOpvUkU-unsplash.jpg",
  "bundo-kim-VRbd6ss_LJI-unsplash.jpg",
  "catia-dombaxe-cPFYcoMAi-I-unsplash.jpg",
  "chalo-gallardo-F01kfMEodyk-unsplash.jpg",
  "ciocan-ciprian-armvMS3dYng-unsplash.jpg",
  "clark-van-der-beken-IImZQk78xe0-unsplash.jpg",
  "clay-banks-RRjC0r8GwpI-unsplash.jpg",
  "clay-banks-X1vQu69kV48-unsplash.jpg",
  "clement-m-h7vKkZNNThE-unsplash.jpg",
  "clement-proust-m3StSUrsi3I-unsplash.jpg",
  "cristina-gottardi-CSpjU6hYo_0-unsplash.jpg",
  "cristina-gottardi-KX_214Qr7Ko-unsplash.jpg",
  "daniel-j-schwarz-6oKyf2Pip6Y-unsplash.jpg",
  "daniel-lerman-7bZi3hfM_Pc-unsplash.jpg",
  "di-an-yAjzHx986fQ-unsplash.jpg",
  "dylan-taylor-O_QJLYPvqa4-unsplash.jpg",
  "eberhard-grossgasteiger-l6WnmYW0LQY-unsplash.jpg",
  "elyssa-fahndrich-MF16lGb95WY-unsplash.jpg",
  "eugenivy_now-VxoaIWyyaaI-unsplash.jpg",
  "eugenivy_now-skXOY314xMQ-unsplash.jpg",
  "fadhil-abhimantra-OLWz1lhO_54-unsplash.jpg",
  "farriou-8jdrapiKD1I-unsplash.jpg",
  "francesca-saraco-fC9ydjoOOHA-unsplash.jpg",
  "fujiphilm-Q4c1RTklBhk-unsplash.jpg",
  "hannah-grace-znL3MUoOOtg-unsplash.jpg",
  "henry-be-IicyiaPYGGI-unsplash.jpg",
  "iskra-photography-IH9syVvlgT8-unsplash.jpg",
  "iskra-photography-KH84oeK05xE-unsplash.jpg",
  "iskra-photography-dZPYgXncUK8-unsplash.jpg",
  "jacek-kadaj-d5l_C354BHU-unsplash.jpg",
  "jorgen-hendriksen-2V1AgzYuOJc-unsplash.jpg",
  "jose-fuentes-1RWd2nKjq04-unsplash.jpg",
  "jovan-vasiljevic-D9SD5wciKtU-unsplash.jpg",
  "jubeo-hernandez-2FxiqXZyB7s-unsplash.jpg",
  "jubeo-hernandez-5ajzXUSb-q4-unsplash.jpg",
  "kirsten-frank-7LDcvZbEPQs-unsplash.jpg",
  "kit-suman-WQwtk_t4oJI-unsplash.jpg",
  "koushik-chowdavarapu-Zjd6NvWUf5k-unsplash.jpg",
  "kyle-vaughn-i3ka9q7EhH8-unsplash.jpg",
  "louis-maniquet-Ae64KHAzt1I-unsplash.jpg",
  "lucas-gallone-lJ5nW8PrfCU-unsplash.jpg",
  "mahdi-mahmoodi-Nis_bQyp2Qc-unsplash.jpg",
  "marcus-lenk-JQAiksStApk-unsplash.jpg",
  "maria-teneva-Y-0pfJPmjXY-unsplash.jpg",
  "mark-harpur-K2s_YE031CA-unsplash.jpg",
  "meg-BSfxs8o7wkg-unsplash.jpg",
  "micheile-henderson-KUbt9qYUmxw-unsplash.jpg",
  "micke-lindstrom-wJIhQLXG5CI-unsplash.jpg",
  "mos-design-ild0babk0Q0-unsplash.jpg",
  "nicola-richli-6NOHq2HWxRU-unsplash.jpg",
  "nik-_gScLDbcg2k-unsplash.jpg",
  "nikunj-singh-jCjiVCGc2Ik-unsplash.jpg",
  "noam-cohen-_dAXhRuNhDM-unsplash.jpg",
  "olegs-jonins-c5c2d84cjK8-unsplash.jpg",
  "oliver-sjostrom-ITRnilDKqGs-unsplash.jpg",
  "pawel-czerwinski-blD64oKLHXU-unsplash.jpg",
  "peter-amende-XxteOm21HOw-unsplash.jpg",
  "philip-oroni-VKIXwWsRwt4-unsplash.jpg",
  "ray-hennessy-6-JIDCnZG2E-unsplash.jpg",
  "ray-hennessy-jN5pk0lbv4E-unsplash.jpg",
  "reza-madani-ohdJdcO9-Tc-unsplash.jpg",
  "robert-nelson-9H3WouBtk0U-unsplash.jpg",
  "ryunosuke-kikuno-odJXXIELx6Q-unsplash.jpg",
  "saleh-yQ84oCgUdOo-unsplash.jpg",
  "sebastian-boring-1s66d5yY5gE-unsplash.jpg",
  "soekarno-omar-TkNwKbKQNbg-unsplash.jpg",
  "sourav-ek-JMmNHe9lvFU-unsplash.jpg",
  "sourav-ek-pm0O5YpXeAo-unsplash.jpg",
  "stacey-knipe-0hznujQ4fMk-unsplash.jpg",
  "vishwasa-navada-k-SMSzt8_xVeM-unsplash.jpg",
  "yuri-krupenin-qB-MKKLRwBc-unsplash.jpg",
  "zhivko-minkov-lAvtYSgNSfY-unsplash.jpg" ]
import albums from './all_albums.json'
let shortened = albums.map(a => {
  return {
    name: a.name,
    artist: a.byArtist.name,
    link: a['@id'],
    trackCount: a.track.numberOfItems, 
    tracks: a.track ? a.track.itemListElement  ? a.track.itemListElement.map(li => ({
      position: li.position,
      name: li.item.name,
      duration: li.item.duration,
      link: li.item.mainEntityOfPage,
      id: li.item.additionalProperty.find(f => f.name === "track_id").value

    })) : 'no item list element' : 'no track;;'
  }
}).filter(f => f.trackCount > 0)
const algo = shortened.map(album => {
  console.log(album.name)
  // let retval = []
    let trackfinds = album.tracks.map(track => `find ~/Tests/toyohirakumin/ -iname "*${track.id}*" -exec mv {} "${album.artist}/${album.name}" \\;`)
     return  [ `mkdir -p "${album.artist}/${album.name}"`, ...trackfinds]
})
console.log(shortened)
console.log(algo)
</script>
<main>
  <section class="grid">
    {#each pix as pic}
      <img src="/n/{pic}" alt="" />
    {/each}
  </section>
  <section class="overlay">
    <article>
      <h1>{shortened.reduce((w, p) => w + p.trackCount, 0)}</h1>
      <!-- <pre>{JSON.stringify(shortened, null, 2)}</pre> -->
      <ul>
        {#each algo as alfo}
          {#each alfo as al}
            <li>{al}</li>
          {/each}
        {/each}
        <!-- {#each shortened.filter(f => f.trackCount > 0) as album} -->
        <!--   <li>mkdir -p {album.byArtist.name}/{album.name}</li> -->
        <!--   <!-- <li>echo "album: {album.name}" &gt;&gt; filestuff.txt</li> --> -->
        <!--   {#each album.tracks as track} -->
        <!--   <!-- <li>echo "track: {track.position}. {track.name}" &gt;&gt; filestuff.txt</li> --> -->
        <!--   <li>find ~/Tests/toyohirakumin/ -iname "*{track.id}*" -exec mv &U204; {album.byArtist.name}/{album.name} \; </li> -->

        <!-- {/each} -->
        <!-- {/each} -->
      </ul>
    </article>
  </section>
</main>
<style>
* {
  font-family: "Monaspace Xenon", monospace;

}
main {
  position: relative;
  height: 100vh;


}
.overlay {
  position: fixed;
  overflow: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  /* background: url('/jumbo-page.webp'); */
  /* background-size: cover; */
  /* background-position: center; */
  /* background-attachment: fixed; */
  & article {
    width: 50%;
    margin: auto;

    background: #333;
    color: #ccc;

  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
:global(body){
  margin:0;
}
.grid {
  overflow: scroll;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  /* gap: 1rem; */

}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;

}

</style>
