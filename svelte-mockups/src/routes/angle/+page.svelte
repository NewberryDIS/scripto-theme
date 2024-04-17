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
import Blocks from './blocks.svelte'
let open = false

</script>
<dark-mode-toggle></dark-mode-toggle>
<Header />
<Jumbotron />
<Instructions />
<Blocks />
<style>
:global(main){
  position: relative;
  margin: 0;
  padding: 0;
}
</style>
