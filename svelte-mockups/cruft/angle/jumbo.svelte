<script>
</script>
<div class="page"></div>
<div class="peepo">
  <div class="jumbo-content-inside">
    <div class="jumbo-content-liner">
      <h2>
        Unlock history!
      </h2>
      <p>
        Help preserve the past by improving access to handwritten letters and diaries at Newberry Digital Collections

      </p>
      <div class="jumbo-buttons">
        <button class="jumbo-button">Learn More</button>
        <button class="jumbo-button">Transcribe Now</button>
      </div>
    </div>
  </div>
</div>
<div class="julia"></div>
<div class="jumbo-content-outside">
  <div class="jumbo-content-liner">
    <h2>
      Unlock history!
    </h2>
    <p>
      Help preserve the past by improving access to handwritten letters and diaries at Newberry Digital Collections
    </p>
    <div class="jumbo-buttons">
      <button class="jumbo-button">Learn Morea</button>
      <button class="jumbo-button">Transcribe Now</button>
    </div>
  </div>
</div>
<style>
.julia, .page, .peepo {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.jumbo-content-outside {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9001;
  flex-direction: column;
  align-items : center;
  justify-content: end; 
  /* clip-path: polygon(0 150px, 100vw 150px, 100vw 100vh, 0 100vh); */
}
.jumbo-content-outside:not(button){
  pointer-events: none;
}
@media screen and (max-width: 777px) {
.jumbo-content-outside {
    display: flex;
  }
  .jumbo-content-inside {
    display: none;
  }
  .jumbo-content-liner {
    position: absolute;
    z-index: 200;
    text-align: center;
    background: rgb(var(--mulberry));
    padding: 11px;
    margin: 0;
  }
}
@media screen and ( min-width: 777px ){
  .jumbo-content-outside {
    display: none;
  }
  .jumbo-content-inside {
    display: flex;
  }
}
@media screen and (min-width: 777px) and (max-width: 1024px){
  /* @media screen and (min-width: 777px){ */
  .jumbo-content-inside {
    background: rgb(var(--mulberry));
    margin-inline: 50vw 33px;
    justify-content: flex-end;
    align-items: flex-end;

  }
  .jumbo-content-liner {
    padding: 33px;
    text-align: right;
    background: rgb(var(--mulberry));
  }
}
@media screen and (min-width: 1024px){
  .jumbo-content-inside {
    padding: 33px;
    background: rgb(var(--mulberry));
    margin-inline: 50vw 20vw;
    margin-block: 33vh 0;
    justify-content: flex-end;
    align-items: center;
  }
}
.jumbo-content-inside {
  height: 67vh;
  /* background: rgb(var(--bg-color-1)); */
  display: flex;
  flex-direction: column;
}
.jumbo-button {
  border: 1px solid rgb(var(--fg-color-1));
  background: rgb(var(--bg-color-2));
  color: rgb(var(--fg-color-1));
  padding: 6px;
}
.peepo {
  /* background-attachment: fixed; */
  background-size: auto 100% ;
  /* background-size: cover; */
  /* background-position: -20vh top; */
  background-position: top left;
  background-position: top left 10vh; 
  /* background-size: cover; */
  /* background-size:  auto 120vh; */
  /*  position: relative; */
  /* top: 0; */
  /* right: 0; */
  /* bottom: 0; */
  /* left: 0; */

}
.julia, .page {
  background-attachment: fixed;
  background-size: cover;
}
.page {
  background-position: center;
}
.julia, .peepo  {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

}
.peepo {
  position: absolute;
  /* top: 42vw; */
  top: 0;
  right: 0;
  bottom: 0;
  /* left: 20vw; */
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

}
.right {
  position: relative;
}
.julia {
  --overlay-color: rgba(var(--bg-color-1), 0.33);
  background-size: auto 110vh;
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/jumbo-julia.png');
  clip-path: polygon(0 0, 66vh 0, 33vh 100vh, 0 100vh); 
}
.page {
  --overlay-color: rgba(var(--bg-color-1), 0.77);
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/jumbo-page.webp');
  clip-path: polygon(0 0, 100vw 0, calc(100vw + 100vh) 100vh, 0 16vh); 
}

.peepo {
  --overlay-color: rgba(var(--bg-color-1), 0.66);
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/jumbo-peepo-lgsm.png');
  /* clip-path: polygon(0 33vh, 100vw 66vh, 100vw 100vh, 0 100vh);  */
  /* clip-path: polygon(0 0, 100% 33%, 100% 100%, 0 100%);  */
  /* clip-path: polygon(33vh 33vh, 300vh 100vh, 33vh 100vh);  */
} 

</style>
