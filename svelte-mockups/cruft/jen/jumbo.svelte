<script>
</script>
<div class="jumbo">
  <div class="backgrounds">
    <div class="julia"></div>
    <div class="right">
      <div class="page"></div>
      <div class="peepo"></div>
    </div>
  </div>
  <div class="wedge">
    <div class="wedge-top">&nbsp;</div>
    <div class="wedge-bottom">
      <div class="jumbo-content">
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
</div>
<style>
:global(html) {
  margin: 0;
  padding: 0;
}
.wedge {
  position: relative;
  width: 50vw;
  height: 33vw;
  margin: 0;
  gap: 0;
}
.jumbo {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.backgrounds {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.jumbo, .backgrounds, .right, .wedge {
  display: flex;

}
.jumbo {
  justify-content: end;
  align-items: end;
}
.page {flex: 11;} 
.peepo {flex: 9;}
.julia, .right {
  flex: 1;
}
.right, .wedge {
  flex-direction: column;
}
.wedge-top {
  margin: 0 auto;
}
.wedge-bottom {
  padding: 1rem;
  margin: -1px auto 0 auto;
}
.wedge-top, .wedge-bottom {
  width: 33vw;

  border: 0;
  background: rgba(var(--mulberry));
  flex: 1;
}
.wedge-top { 
  /* clip-path: polygon(50vw 0, 100vw 0, 100vw 50vh, 50vw 50vh);   */
  clip-path: polygon(0 100%, 100% 0, 100% 100%, 50% 100%);  
}
.jumbo-button {
  border: 1px solid rgb(var(--fg-color-1));
  background: rgb(var(--bg-color-2));
  color: rgb(var(--fg-color-1));
  padding: 6px;
}

.julia, .page, .peepo {
  /* background-attachment: fixed; */
  background-size: cover;
}
.julia {
  --overlay-color: rgba(var(--bg-color-1), 0.33);
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/jumbo-julia.png');
}
.page {
  --overlay-color: rgba(var(--bg-color-1), 0.5);
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/jumbo-page.webp');
  /* clip-path: polygon(0 33vh, 100vw 66vh, 100vw 100vh, 0 100vh);  */
}
.peepo {
  --overlay-color: rgba(var(--bg-color-1), 0.66);
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/peepo_3.png');
} 

</style>
