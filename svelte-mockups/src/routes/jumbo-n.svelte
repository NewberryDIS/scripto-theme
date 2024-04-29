<script>
import Header from './header.svelte'
</script>
<div class="bgs">
<div class="julia-left"></div>
<div class="peepo-right"></div>
</div>

<Header over />
<div class="page-wrap">
<div class="page-bg">
</div>
</div>
<style>
.bgs {
  display: flex;
  min-height: 100vh;
  /* height: 100dvh; */
  /* width: 100dvh; */
  position: relative;
  
  z-index: 5;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.page-wrap {

z-index: 10;
  display: flex;
  min-height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  justify-content: end;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
}
.page-bg {
  aspect-ratio: 1 / 1;
 clip-path: var(--n-path); 
  position: relative;
  height: 100vh;
  top: 0;
  /* right: 0; */
  bottom: 0;
  /* left: 0; */
  background-image: linear-gradient(to bottom, rgba(var(--julias-peach),0.77), rgba(var(--julias-peach),0.33)), url('https://transcribe.newberry.org/ohmekas/themes/papers/asset/img/jumbo-page.webp');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.julia-left, .peepo-right {
  background-size: auto 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
  min-height: 100vh;
  
}
.julia-left {
  position: relative;
  z-index: 5;
  height: 100vh;
  background-image:  url('https://transcribe.newberry.org/ohmekas/themes/papers/asset/img/jumbo-julia.png');
  flex: 1;
}
.peepo-right {
  position: relative;
  z-index: 5;
  background-image:  url('ohmekas/themes/papers/asset/img/jumbo-peepo-narro.webp');
  background-position: right;
flex: 2;
}

</style>
