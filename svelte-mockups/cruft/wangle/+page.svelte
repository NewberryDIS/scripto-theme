<script>
import { onMount } from 'svelte'
import './lels.css'
onMount( async ( ) => {
  // await import( '/ohmekas/themes/papers/asset/js/dark-mode-toggle.js' );
  // await import( '/ohmekas/themes/papers/asset/js/newberry-logo.js' );
  // await import( '/ohmekas/themes/papers/asset/js/toggle-menu.js' );
  await import( './js/dark-mode-toggle.js' );
  await import( './js/newberry-logo.js' );
  await import( './js/toggle-menu.js' );
})
import './newberry.css'
import Header from './header.svelte'
import Instructions from './inst.svelte'
import Jumbotron from './jumbo.svelte'
import Backgrounds from './bgs.svelte'
import Blocks from './blocks.svelte'
let open = false

</script>
<dark-mode-toggle></dark-mode-toggle>
<Header />
<Backgrounds/>
<main>
<Jumbotron />
<Instructions />
<Blocks />
</main>
<style>
main {
  position: fixed;
  overflow: scroll;
  height: 100vh;
  width: 100vw;
  clip-path: polygon( 0 150px, 100vw 150px, 100vw 100%, 0 100% );
}
</style>
