class LogoLoader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    const bgSvg = document.createElement("div")
    bgSvg.setAttribute("class", "bg-img");
    bgSvg.innerHTML = `<svg 
   version="1.1"
   id="svg1"
   width="200"
   height="200"
   viewBox="0 0 200 199.99999"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <linearGradient
       id="swatch8">
      <stop
         style="stop-color:rgba(var(--fg-color-1));stop-opacity:0;"
         offset="0"
         id="stop7" />
      <stop
         style="stop-color:rgba(var(--fg-color-1));stop-opacity:1;"
         offset="0"
         id="stop8" />
    </linearGradient>
    <linearGradient
       id="swatch7">
      <stop
         style="stop-color:rgba(var(--fg-color-1));stop-opacity:1;"
         offset="0"
         id="stop8" />
      <stop
         style="stop-color:rgba(var(--fg-color-1));stop-opacity:0;"
         offset="0"
         id="stop7" />
    </linearGradient>
  </defs>
  <g
     id="g1"
     transform="matrix(0.18181819,0,0,0.18823529,-142.93456,-139.39891)"
     style="fill:#000000;fill-opacity:1">
    <path
       style="display:inline;fill:#swatch7;stroke-width:8.0505"
       d="m 1411.14,1469.0567 h 375 v 184 h 100 l -167.25,150 h -307.75 z"
       id="right-bottom" />
    <path
       d="m 1411.14,1136.0567 h 375 v 333 h -375 z"
       id="right-center" />
    <path
       d="m 1411.14,771.8067 62.5,-31.25 312.5,187.5 v 208 h -375 z"
       id="right-top" />
    <path
       d="m 1161.14,896.8067 250,-125 v 156.25 l -125,-62.5 -125,62.5 z"
       id="center" />
    <path
       d="m 786.14003,990.5567 v 145.5 H 1161.14 v -333 z"
       id="left-top" />
    <path
       d="m 786.14003,1136.0567 v 333 H 1161.14 v -333 z"
       id="left-center" />
    <path
       d="m 786.14003,1469.0567 v 334 H 1161.14 v -334 z"
       id="left-bottom" />
  </g>
    </svg>`
    wrapper.appendChild(bgSvg)
    const img = document.createElement("img");
    img.setAttribute("class", "fg-img");

    const src = this.getAttribute("src");
    img.src = src 

    wrapper.appendChild(img)

    const style = document.createElement('style');

    style.textContent =  `
      .wrapper {
      }

      .fg-img,
      .bg-img {
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
      }

      .fg-img {
             z-index: 1;
      }

      .bg-img {
             z-index: 0;

             display: flex;
             justify-content: center;
             align-items: center;
      }

      path {
opacity: 0.83;
      }
img {
opacity: 0.001;
}
@keyframes fader {
  0% {
    opacity: 0.83;
  }

  33% {
    opacity: 0.33;
  }

  66% {
    opacity: 0.83;
  }

  100% {
    opacity: 0.83;
  }
}
.wrapper {
  --duration: 1s;
  --interval: 0.12;
}
#right-bottom {
  animation: fader var(--duration) calc(var(--interval) * 7s) ease-in infinite;
}
#right-center {
  animation: fader var(--duration) calc(var(--interval) * 6s) ease-in infinite;
}
#right-top {
  animation: fader var(--duration) calc(var(--interval) * 5s) ease-in infinite;
}
#center {
  animation: fader var(--duration) calc(var(--interval) * 4s) ease-in infinite;
}
#left-top {
  animation: fader var(--duration) calc(var(--interval) * 3s) ease-in infinite;
}
#left-center {
  animation: fader var(--duration) calc(var(--interval) * 2s) ease-in infinite;
}
#left-bottom {
  animation: fader var(--duration) calc(var(--interval) * 1s) ease-in infinite;
}
        `;

shadow.append(wrapper, style)


  }
}

customElements.define('logo-loader', LogoLoader);
