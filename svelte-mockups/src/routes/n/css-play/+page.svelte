<script>
import '../../newberry.css';
</script>
<main>
<div class="the-action">
<p>Text Goes Here</p>
<p>text also goes here</p>
  </div>
</main>
<style>
main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
  overflow: hidden;
background: var(--sand);
}
main, .the-action {
  displaY: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 76px;
  font-family: "styrene";
  width: 100%;
  transition:  500ms;
  /* background-image: linear-gradient(60deg, rgba(var(--sapphire), 0.5) 33%, rgba(var(--mulberry), 0.5) 33%); */
  /* background-size: 10px 60px, 50px 50px; */
  		background: linear-gradient(to right,
    		rgba(var(--sapphire), 0.5) 50%,
    		rgba(var(--mulberry), 0.5) 50%
    
    		);
      transition:  500ms;
  		background: linear-gradient(to right,
    		rgba(var(--sapphire), 0.76),
    		rgba(var(--sapphire), 0.76) 33%,
    		rgba(var(--sapphire), 0.33) 66%,
    		rgba(var(--sapphire), 0.33)
    
    		);
  		background-size:
    		 200% 5%;
  		background-position:
    		 100% 100% ;
  		background-repeat: no-repeat;
&:hover {
  		background-position:
    		 0 100% ;
  }
}

</style>
