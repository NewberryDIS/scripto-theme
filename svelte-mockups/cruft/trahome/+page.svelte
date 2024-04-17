<script>
import './css/omeka-base.css';
import './css/body.css';
import './css/newberry.css';
import './css/instructions.css';
import './css/browse-preview.css';
import './css/header.css';
import './css/mq.css';
import './css/elevations.css';
import Body from './Body.svelte';
import Header from './Header.svelte';


</script>
<!-- <body class="page page-home dark">         -->

  <a id="skipnav" href="#content">Skip to main content</a>
  <div id="user-bar">
    <div class="site-links">
      <span class="admin logo show">
        <a href="/ohmekas/admin">Newberry Transcribe</a>	    
      </span>
      <span class="admin site show">
        <a href="/ohmekas/admin/site/s/transcribe/show">Newberry Transcribe</a>	    
      </span>
      <span class="admin page browse">
        <a href="/ohmekas/admin/site/s/transcribe/page">Pages</a>	   
      </span>
      <span class="admin page edit">
        <a href="/ohmekas/admin/site/s/transcribe/page/home">Edit</a>	    
      </span>
    </div>

    <div class="user-links">
      <span class="user-id">
        Signed in as <a href="/ohmekas/admin/user/1">Digital Newberry</a>	    
      </span>
      <a class="logout" href="/ohmekas/logout">Logout</a>	
    </div>
  </div>

  <Header />
  <Body />

  <footer class="site-footer h-card">
    <div class="wrapper">	
      Powered by Nick W                            
    </div>
  </footer>

<!-- </body> -->

<style>
 </style>
