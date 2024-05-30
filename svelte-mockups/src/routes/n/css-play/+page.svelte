<script>
import { base } from '$app/paths'
import '../../newberry.css';
const style = `background-image: url('${base}/peepo.jpg')`
</script>
<main>
<div class="background">
<!--     <div class="pages"> -->
<!-- <img src="{base}/jumbo-page.webp" alt="" /> -->
<!-- <img src="{base}/jumbo-page.webp" alt="" /> -->
<!-- <img src="{base}/jumbo-page.webp" alt="" /> -->
<!-- <img src="{base}/jumbo-page.webp" alt="" /> -->
<!--     </div> -->
<div class="foreground" style={style}>

<!--     <div class="pages"> -->
<!-- <img src="{base}/jumbo-page.webp" alt="" /> -->
<!-- <img src="{base}/jumbo-page.webp" alt="" /> -->
<!-- <img src="{base}/jumbo-page.webp" alt="" /> -->
<!-- <img src="{base}/jumbo-page.webp" alt="" /> -->
<!--     </div> -->
    </div>
  </div>
  <div class="the-action" >
    <p>Text Goes Here</p>
    <p>text also goes here</p>
  </div>
  <p>

  Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
  </p>
</main>
<style>

p {
  font-size: 10vh;
}
.background {
  position:absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 600vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  & .pages {
    /* height: 600vh; */
    /* position: relative; */
    /* z-index: 1; */
  }
& img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  & .foreground {
    /* background: white; */
    /* z-index: 2; */
    margin: auto;
  width: 80vh;
  height: 80vh;
  clip-path: var(--n-path);

    background-attachment: scroll;
  position: fixed;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  }
}
main {
  --n-path:  polygon( 0% 63.657%,0% 27.317%,17.233% 17.494%,17.233% 17.494%,20.02% 15.906%,22.67% 14.398%,25.147% 12.99%,27.413% 11.702%,29.433% 10.557%,31.171% 9.573%,32.589% 8.772%,33.652% 8.174%,34.323% 7.8%,34.566% 7.671%,34.566% 7.671%,34.581% 7.735%,34.597% 7.922%,34.611% 8.22%,34.624% 8.619%,34.635% 9.109%,34.645% 9.68%,34.653% 10.322%,34.659% 11.024%,34.663% 11.776%,34.664% 12.567%,34.664% 12.567%,34.667% 13.412%,34.673% 14.195%,34.684% 14.909%,34.698% 15.549%,34.716% 16.107%,34.737% 16.579%,34.761% 16.956%,34.788% 17.234%,34.818% 17.405%,34.85% 17.463%,34.85% 17.463%,35.037% 17.367%,35.519% 17.088%,36.271% 16.643%,37.268% 16.046%,38.484% 15.313%,39.894% 14.459%,41.472% 13.5%,43.193% 12.45%,45.031% 11.326%,46.961% 10.143%,46.961% 10.143%,48.893% 8.959%,50.736% 7.832%,52.465% 6.778%,54.054% 5.813%,55.477% 4.952%,56.708% 4.21%,57.722% 3.604%,58.494% 3.148%,58.997% 2.858%,59.205% 2.75%,59.205% 2.75%,59.47% 2.879%,60.137% 3.273%,61.171% 3.912%,62.537% 4.771%,64.201% 5.83%,66.128% 7.066%,68.282% 8.457%,70.63% 9.98%,73.136% 11.614%,75.766% 13.336%,92.009% 23.993%,92.108% 55.051%,92.207% 86.108%,96.104% 86.208%,100% 86.308%,92.582% 93.154%,85.163% 100%,71.353% 99.949%,57.543% 99.897%,57.444% 61.947%,57.345% 23.996%,51.732% 20.535%,46.118% 17.074%,40.499% 20.516%,34.88% 23.958%,34.871% 61.978%,34.862% 99.997%,17.431% 99.997%,0% 99.997% ); 
  position: relative;
  /* width: 100vw; */
  /* height: 600vh; */
  /* top: 0; */
  /* right: 0; */
  /* bottom: 0; */
  /* left: 0; */

  /* height: 100vh; */
  width: 100vw;
  /* overflow: hidden; */
  background: var(--sand);
}
.the-action {
  position: relative;
  /* top: 0; */
  /* left: 0; */
  /* right: 0; */
  /* bottom: 0; */
  /* background: gray; */
  z-index: 10;
}
main, .the-action {
  displaY: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 76px;
  font-family: "styrene";
  width: 100%;
  transition:  500ms;
  /* background-image: linear-gradient(60deg, rgba(var(--sapphire), 0.5) 33%, rgba(var(--mulberry), 0.5) 33%); */
  /* background-size: 10px 60px, 50px 50px; */
  background: linear-gradient(to right,
    rgba(var(--sapphire), 0.5) 50%,
    rgba(var(--mulberry), 0.5) 50%

  );
  transition:  500ms;
  background: linear-gradient(to right,
    rgba(var(--sapphire), 0.76),
    rgba(var(--sapphire), 0.76) 33%,
    rgba(var(--sapphire), 0.33) 66%,
    rgba(var(--sapphire), 0.33)

  );
  background-size:
    200% 5%;
  background-position:
    100% 100% ;
  background-repeat: no-repeat;
  &:hover {
    background-position:
      0 100% ;
  }
}

</style>
