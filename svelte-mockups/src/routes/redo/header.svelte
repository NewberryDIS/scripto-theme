
<script>

import { onMount } from 'svelte'
onMount( async ( ) => {
  // await import( '/ohmekas/themes/papers/asset/js/dark-mode-toggle.js' );
  // await import( '/ohmekas/themes/papers/asset/js/newberry-logo.js' );
  // await import( '/ohmekas/themes/papers/asset/js/toggle-menu.js' );
  await import( './js/dark-mode-toggle.js' );
  await import( './js/newberry-logo.js' );
  await import( './js/toggle-menu.js' );
})
let open = false

</script>
<div class="header-bg"></div>
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

<style>

.header-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: rgb( var(--bg-color-1) );
}

h1, nav ul { 
  margin: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  /* background: rgba(var(--bg-color-1), 0.5); */
}

.header-top, nav{
  position: relative;
  z-index: 55;
}

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
</style>
