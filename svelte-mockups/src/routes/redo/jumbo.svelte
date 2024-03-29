<script>
function toggleAngle(){
  const julia = document.querySelector('.julia')
  const peepo = document.querySelector('.peepo')
  if(julia.classList.contains('wedge')){
    julia.classList.remove('wedge')
    julia.classList.add('straight')
    peepo.classList.remove('wedge')
    peepo.classList.add('straight')
  } else {
    julia.classList.remove('straight')
    julia.classList.add('wedge')
    peepo.classList.remove('straight')
    peepo.classList.add('wedge')
  }
}
$: angle = 'straight'
</script>
<div class="peepo {angle}"></div>
<div class="page">
  <div class="jumbo-content">
    <h2>
      Unlock history!
    </h2>
    <p>
      Help preserve the past by improving access to handwritten letters and diaries at Newberry Digital Collections

    </p>
    <div class="jumbo-buttons">
      <button class="jumbo-button" on:click={() => angle = angle === 'straight' ? 'wedge' : 'straight'}>Learn More</button>
      <button class="jumbo-button">Transcribe Now</button>
    </div>
  </div>
</div>
<div class="julia {angle}">
  <!-- <div class="julia"></div> -->
</div>
<style>
.julia, .page, .peepo {
  width: 100vw;
  height: 90vh;
}
.jumbo-content {
  height: 100%;
  margin-inline: 50vw 20vw;
  margin-block: 0;
  /* background: rgb(var(--splash-color)); */
  /* background: rgb(var(--bg-color-1)); */
  padding: 33px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.jumbo-content :is(p, h2) {
  width: 100%;
  /* color: rgb(var(--bg-color-2)); */
}
.jumbo-button {
  border: 1px solid rgb(var(--fg-color-1));
  background: rgb(var(--bg-color-2));
  color: rgb(var(--fg-color-1));
  padding: 6px;
}
.julia, .page, .peepo {
  background-attachment: fixed;
  background-size: cover;
}
.julia, .peepo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

}
.right {
  position: relative;
}
.julia {
  --overlay-color: rgba(var(--bg-color-1), 0.33);
  background-size: auto 110vh;
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/jumbo-julia.png');
}
.julia.straight {
  clip-path: polygon(0 0, 50vw 0, 50vw 100vh, 0 100vh); 
}
.julia.wedge {
  clip-path: polygon(0 0, 66vh 0, 33vh 100vh, 0 100vh); 
}
.page {
  --overlay-color: rgba(var(--bg-color-1), 0.77);
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/jumbo-page.webp');
  /* clip-path: polygon(0 33vh, 100vw 66vh, 100vw 100vh, 0 100vh);  */
}

.peepo {
  --overlay-color: rgba(var(--bg-color-1), 0.66);
  background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('/ohmekas/themes/papers/asset/img/peepo_3.png');
} 
.peepo.straight {
  clip-path: polygon(50vw 0, 100vw 0, 100vw 50vh, 50vw 50vh); 
}
.peepo.wedge {
  clip-path: polygon(0 0, 100vw 0, 100vw 66vh, 0 33vh); 
}


</style>
