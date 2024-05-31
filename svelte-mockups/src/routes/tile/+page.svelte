
<h5>search tile</h5>
<!-- <li class="resource items tile"> -->
<!--         <div class="resource-thumbnail"> -->
<!--             <a class="resource-link" href="/dohmekas/s/transcribe/item/8461"><img src="https://transcribe.newberry.org/dohmekas/files/square/a2fd43d4a578a3f9a86dd9d9a92be00650e70b4a.jpg" alt=""></a>        </div> -->
<!--         <div class="resource-metadata"> -->
<!--             <h4><a href="/dohmekas/s/transcribe/item/8461">Arts Club letters [01.01], 1892-2004</a></h4> -->
<!--             <div class="description"> -->
<!--                             </div> -->
<!--             <div class="progress-bar" style="background-image:  -->
<!--                 linear-gradient(to right,  -->
<!--                   var(--progress-color-1) 0%,  -->
<!--                   var(--progress-color-1) 40%,  -->
<!--                   var(--progress-color-2) 40%,  -->
<!--                   var(--progress-color-2) 100% -->
<!--                 );"> -->
<!--                   5% Complete -->
<!--             </div> -->
<!--         </div> -->
<!--     </li> -->
<hr />
<h5>page tile</h5>
<!-- <dd class="value tile" id="12012"> -->
<!--         <a href="/dohmekas/scripto/2/8456/12012/edit" target="_blank"> -->
<!--           <img src="https://transcribe.newberry.org/dohmekas/files/square/3ddbd39b25f0dafa7791852c298502e9bf1a79b2.jpg" alt=""> -->
<!--           <div class="page progress-bar" id="progress-bar-12012"> -->
<!--             <span> -->
<!--               Not Started            </span> -->
<!--           </div> -->
<!--         </a> -->
<!--       </dd> -->
<hr />
<style>
:global(body){
  
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
  --fg-rgb: var(--midnight);
  --fg-rgb-2: var(--mulberry);
  --bg-rgb-2: var(--lavender);
  --bg-rgb: var(--granite);
  --splash-color: rgb(var(--splash-rgb));
  --fg-color: rgb(var(--fg-rgb));
  --fg-color-2: rgb(var(--fg-rgb-2));
  --bg-color-2: rgb(var(--bg-rgb-2));
  --bg-color: rgb(var(--bg-rgb));
  --color-1: color-mix(in oklab, var(--bg-color) 20%, var(--fg-color));
  --color-2: color-mix(in oklab, var(--fg-color) 20%, var(--bg-color));
  background-color: var(--color-2);

  --tile-width: 333px;
  --tile-width: 200px;
  --tile-ratio: 1 / 1.5;
  /* --tile-ratio: 1 / 2; */

}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.tile-container {
  display: flex;
}
.tile {
  width: var(--tile-width);
  aspect-ratio: var(--tile-aspect-ratio);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 0.5em;
  position: relative;

  border: 1px solid var(--fg-color);
  border-radius: 3px;

  & img {
   position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    z-index: -1;
  }
  & caption, .progress-bar {
    width: 100%;
  }
}
</style>
