
<script>

import { onMount } from 'svelte'
export let pos 
onMount( async ( ) => {
  // await import( 'https://transcribe.newberry.org/ohmekas/themes/papers/asset/js/dark-mode-toggle.js' );
  // await import( 'https://transcribe.newberry.org/ohmekas/themes/papers/asset/js/newberry-logo.js' );
  // await import( 'https://transcribe.newberry.org/ohmekas/themes/papers/asset/js/toggle-menu.js' );
  await import( '/src/routes/js/newberry-logo.js' );
  await import( '/src/routes/js/toggle-menu.js' );
})
let open = false

</script>

<div class="wrap">
<div  class="header-bg {pos}"></div>
<header class:open class={pos}>
  <div class="header-top">
    <newberry-logo></newberry-logo>
    <h1>Newberry Transcrib3</h1>
    <div class="button-wrapper"  on:click={() => open = !open}> 
      <toggle-menu></toggle-menu>
    </div>
  </div>
  <nav class="header-bottom">
    <div id="header-bottom-menu" class="header-bottom-menu">
      <ul class="navigation">
        <li>
          <a href="https://transcribe.newberry.org/ohmekas/s/transcribe/item">Browse</a>
        </li>
        <li class="active">
          <a href="https://transcribe.newberry.org/ohmekas/s/transcribe/page/home">Home</a>
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
</div>

<style>

.wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.left {

  --text-color: var(--page-bg);
}
.under{

  --text-color: var(--rev-lav);
  /* --text-color: var(--page-fg); */
  /* --text-color: var(--page-bg); */
  box-shadow: 4px 4px 60px 8px rgba(var(--midnight), 0.1);
}
.over {
  --text-color: var(--page-fg);
  /* --text-color: var(--page-bg); */
  /* --text-color: var(--lavender); */
}
  .header-bg.over, .header-bg.left {
    display: none;
  }
.header-bg.under{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb( var(--peepo-roof) );
}
h1, nav, li, a {
  color: rgba(var(--text-color), 1) !important;
}

h1, nav ul { 
  margin: 0;
}
header {
  transition: 200ms;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
header:not(.open){
  background: rgba(var(--bg-color-1), 0);
}
header.open {
  background: rgba(var(--bg-color-1), 0.77);
}
.header-top, nav{
  position: relative;
  z-index: 55;
}

.header-top {
  padding: 50px 33px 0 33px;
  padding: 11px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 h1 {
  padding-inline: 11px;
  text-align: right;
  flex: 1;
  font-size: clamp( 1.3rem, 0.3rem + 5.5vw, 4rem )
}

@media screen and (max-width: 500px){
  .header-top {
    flex-wrap: wrap;
  }
  .logo-wrapper {
    clip-path: polygon(0 0, 50px 0, 50px 50px, 0 50px);
    width: 50px;
  }
  h1 {
    width: 100%;
    order: 3;
  }
}

@media screen and (min-width: 500px){
  
  .logo-wrapper {
    clip-path: polygon(0 0, 220px 0, 220px 50px, 0 50px);
    width: 220px;
  }
}
/* navigation menu */
/* @media screen and(  min-width:  ) */
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
  header:not(.open) .header-bottom-menu li {
    padding: 0;
    margin: 0;
    height: 0;
    overflow: hidden;

  }
  .header-bottom-menu a {
    transition: opacity 150ms 100ms;
  }
  header:not(.open) .header-bottom-menu a {
    opacity: 0.001;
  }
  header.open .header-bottom-menu li {
    /* height: 22px; */
    margin: 5px;
  }
  header.open .header-bottom-menu a {
    opacity: 0.99;
  }
  header.open nav  {
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
</style>
