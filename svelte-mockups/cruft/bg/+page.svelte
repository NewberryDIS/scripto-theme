<script>
// /ohmekas/themes/papers/asset/
import { onMount } from 'svelte'
onMount( async ( ) => {
  // await import( '/ohmekas/themes/papers/asset/js/dark-mode-toggle.js' );
  // await import( '/ohmekas/themes/papers/asset/js/newberry-logo.js' );
  // await import( '/ohmekas/themes/papers/asset/js/toggle-menu.js' );
  await import( './js/dark-mode-toggle.js' );
  await import( './js/newberry-logo.js' );
  await import( './js/toggle-menu.js' );
})
import './newberry.css'
import Instructions from './inst.svelte'
import Blocks from './blocks.svelte'
let open = false

</script>

<style>

h1, nav ul { 
  margin: 0;
}
/* start important  */

main {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

header {
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}

/* julia and the page */

header::before, header::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition:  0.5s ease-out;
}

header::before {
  z-index: 0;
  background-attachment: fixed;
  background-image: linear-gradient(rgba(var(--bg-color-1), 0.66), rgba(var(--bg-color-1), 0.66)), url('/ohmekas/themes/papers/asset/img/jumbo-page.jpg');
}

header::after {
  z-index: 10;
  background-attachment: fixed;
  background-size: auto 150%;
  background-position: -50% 0;
  background-image: url('/ohmekas/themes/papers/asset/img/jumbo-julia.jpg');
  clip-path: polygon(0 0, 100vh 0, 66vh 100vh, 0 100vh); 
}

.header-top, nav{
  position: relative;
  z-index: 55;
}

/* header top */

.header-top {
  padding: 50px 33px 0 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* navigation menu */
@media screen and (max-width: 1024px){
  header.open :is(nav, ul) {
    opacity: 0.99;
    gap: 11px;
  }

  header.open li {
    opacity: 0.99;
    height: 22px;
  }

  header:not(.open) :is(nav, ul, li) {
    opacity: 0.001;
    gap: 0;
    margin: 0;
    padding: 0;
    border: 0;

  }

  header:not(.open) li {
    height: 0;
  }

  .button-wrapper {
    display: block;
  }

  .header-bottom-menu ul {
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
  }
  .header-bottom-menu, .header-bottom-menu * {
    width: 100%;
    text-align: center;
  }
  body:not(.header-menu-open) .header-bottom-menu li {
    padding: 0;
    margin: 0;
    height: 0;
    overflow: hidden;

  }
  .header-bottom-menu a {
    transition: opacity 150ms 100ms;
  }
  body:not(.header-menu-open) .header-bottom-menu a {
    opacity: 0.001;
  }
  body.header-menu-open .bg-3 {
    background: rgba(var(--bg-color-1), 0.77);
  }
  body.header-menu-open .header-bottom-menu li {
    /* height: 22px; */
    margin: 5px;
  }
  body.header-menu-open .header-bottom-menu a {
    opacity: 0.99;
  }
  /* .header-bottom-menu.header-menu-open, .header-bottom-menu.header-menu-open * { */
  /*   height: auto; */
  /**/
  /* } */

  body.header-menu-open nav  {
    padding-block: 9px;
  }
}
@media screen and (min-width: 1024px){
  ul {
    gap: 11px;
    padding-inline: 33px;
  }
  .button-wrapper {
    display: none;
  }
}
nav, nav * {
  transition: 0.5s;
}
nav ul {
  font-family: "styrene";
  list-style-type: none;
  display: flex;
  justify-content: end;
  align-items: end;
  padding-bottom: 11px;
}

/* main section */
/* background */

.bg {
  position: fixed;

}
.bg, .bg :is(.page, .julia, .bg-3) {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition:  0.5s ease-out;
}
.bg .page {
  position: absolute;
  z-index: 0;
  background-attachment: fixed;
  background-image: linear-gradient(rgba(var(--bg-color-1), 0.66), rgba(var(--bg-color-1), 0.66)), url('/ohmekas/themes/papers/asset/img/jumbo-page.jpg');
}
.bg .julia {
  position: absolute;
  z-index: 1;
  background-attachment: fixed;
  background-size: auto 150%;
  background-position: -50% 0;
  background-image: url('/ohmekas/themes/papers/asset/img/jumbo-julia.jpg');
  clip-path: polygon(0 0, 66vh 0, 33vh 100vh, 0 100vh); 
  clip-path: polygon(0 0, 100vh 0, 66vh 100vh, 0 100vh); 
}

/* jumbo */

.jumbotron {
  position: relative;
  height: 90vh;
  z-index: 3;
  display: flex;
  align-items: end;
}

.jumbo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 60%;
}

@media screen and (max-width: 777px){
  .jumbotron {
  justify-content: center;
  }
  .jumbo-text {
    width: 90%;
  }
}

@media screen and (min-width: 777px){
  .logo-wrapper {
    width: 220px;
    overflow: hidden;
  }
  .jumbotron {
  justify-content: end;
  }
  .jumbo-text {
    width: 50%;
  }
}

/* main content section */

/* .instructions can be added as is */

h1 {
  font-size: clamp(2rem, 7vw, 3.3rem);
}

.jumbotron h2 {
  font-size: clamp(2rem, 7vw, 3.3rem);
}

.jumbotron p {
  color: rgb(var(--fg-color-1));
  text-align: center;
  font-family: "styrene";
  font-size: clamp(1.2rem, 5.5vw, 1.33rem);
  margin: 11px;
}

</style>

<div class="bg">
  <div class="julia"></div>
  <div class="page"></div>
  <div class="bg-3"></div>
</div>

<header class:open>
  <div class="header-top">
    <div class="logo-wrapper">
      <newberry-logo></newberry-logo>
    </div>
    <!-- <dark-mode-toggle></dark-mode-toggle> -->
    <h1>Newberry Transcrib3</h1>
    <div class="button-wrapper"  on:click={() => open = !open}> 
      <toggle-menu></toggle-menu>
    </div>
  </div>
  <nav class="header-bottom">
    <div id="header-bottom-menu" class="header-bottom-menu">
      <ul class="navigation">
        <li>
          <a href="/ohmekas/s/transcribe/item">Browse</a>
        </li>
        <li class="active">
          <a href="/ohmekas/s/transcribe/page/home">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Tutorial</a>
        </li>
        <li>
          <a href="#">Educational Resources</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>    
    </div>
  </nav>
</header>
<section class="jumbotron">
  <div class="jumbo-text">
    <h2>
      Unlock history!
    </h2>
  </div>
</section>
<Instructions />
<Blocks />
