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
      viewBox="0 0 200 200"
      <defs
        id="defs1"></defs>
      <g
        id="g1"
        transform="matrix(0.37052935,0,0,0.38527681,0.01635167,-4.1967113)">
        <path
          d="m 310,445 v -85 h 93.5 93.5 v 48.4805 48.4805 l 21.36209,0.2695 21.36208,0.2695 -39.61208,36.23269 -39.61209,36.2327 -75.25,0.0173 L 310,530 Z"
          id="path7" />
        <path
          d="m 310,270 v -90 h 93.5 93.5 v 90 90 H 403.5 310 Z"
          id="path6" />
        <path
          d="m 310,152.66459 v -27.33542 l -0.66136,-53.979524 -0.66135,-53.979529 5.26355,-3.2387 5.26356,-3.238701 1.23194,0.303642 L 321.66828,11.5 409.33414,68.46517 497,125.43034 V 152.71517 180 H 403.5 310 Z"
          id="path5" />
        <path
          d="M 189.22589,107.0296 189.5,89.826714 l 59,-35.892962 59,-35.892963 0.64411,8.729606 0.64412,8.729605 0.10588,44.218615 0.10589,44.218615 -1.75,-0.64936 -1.75,-0.64936 -28.30334,-17.2725 -28.30333,-17.272505 -28.69667,17.574015 -28.69666,17.57402 -1.27411,0.49547 -1.27412,0.49547 z"
          id="path4" />
        <path
          d="M 0.22793472,161.32821 0.5,142.65642 94,89.804695 187.5,36.952966 188.11856,67.726483 188.73712,98.5 l 0.13102,40.75 0.13103,40.75 H 94.477518 -0.04413057 Z"
          id="path3" />
        <path
          d="M 0,270 V 180 H 94.5 189 v 90 90 H 94.5 0 Z"
          id="path2" />
        <path
          d="M 0,445 V 360 H 94.5 189 v 85 85 H 94.5 0 Z"
          id="path1" />
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
             fill: rgb(var(--fg-color-1, 33, 33, 37));
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

      #path7 {
             animation: fader 2s 1.5s ease-in infinite;
      }

      #path6 {
             animation: fader 2s 1.25s ease-in infinite;
      }

      #path5 {
             animation: fader 2s 1s ease-in infinite;
      }

      #path4 {
             animation: fader 2s 0.75s ease-in infinite;
      }

      #path3 {
             animation: fader 2s 0.5s ease-in infinite;
      }

      #path2 {
             animation: fader 2s 0.25s ease-in infinite;
      }

      #path1 {
             animation: fader 2s ease-in infinite;
      }
        `;

shadow.append(wrapper, style)


  }
}

customElements.define('logo-loader', LogoLoader);
