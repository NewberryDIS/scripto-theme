class NewberryLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    })
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<svg version="1.1" id="svg96" width="270" height="55.578121" viewBox="0 0 263.54107 55.578121"><defs id="defs100" />
            <g id="g102">
                <a href="https://www.newberry.org" target="_blank" id="n-path">
                    <path id="path231-2" d="M 34.415451,0.28531669 27.454514,4.5060197 20.495529,8.7267227 20.272873,5.6681287 20.050217,2.6095357 10.161545,8.1896137 0.27287252,13.771645 V 34.81852 55.863437 h 10.00000048 10 V 34.197426 12.531411 l 2.111328,-1.216797 c 1.16086,-0.669449 2.640347,-1.5542383 3.28711,-1.9648443 1.155696,-0.733711 1.233214,-0.710808 4.554687,1.3593753 l 3.380859,2.107422 v 21.523438 21.523432 l 8.111328,-0.0195 8.109376,-0.0215 4.445312,-4.19142 4.445312,-4.19336 -2.550781,-0.008 -2.550781,-0.01 L 53.499435,29.999731 53.384201,12.579809 43.899826,6.4313707 Z" />
                </a>
                <a href="https://collections.newberry.org" id="dc-text" target="_blank" style="text-decoration: none; color: inherit;">
                    <text xml:space="preserve" x="77.995346" y="9.8382692" id="text1">
                        <tspan x="77.995346" y="9.8382692" id="tspan2">Digital Collections</tspan>
                    </text>
                </a>
            </g>
        </svg>`
    const style = document.createElement('style');
    style.textContent = `
                :host {
                    display: flex;
                    transform-origin: left center;
                    overflow: hidden;
                }
                @media screen and (max-width: 776px){
                    :host {
                        width: 77px;
                    }
                    #dc-text {
                        display: none;
                    }
                    #n-path {
                        transform: scale(0.5);
                        transform-origin: center left;
                    }
                }
                @media screen and (min-width: 777px) {
                    :host {
                        transform: scale(0.77);
                    }
#dc-text {
width: 200px;
clip-path: polygon(0 0, 200px 0, 200px 30px, 0 30px);
}
                }
                svg, text, path {
                    transition: 300ms;
                    fill: rgba(var(--fg-color-1, 234, 235, 231), 0.7);
                    fill: rgba(var(--text-color, 234, 235, 231), 1);
                }
                a:hover :is(svg, path, text) {
                    fill: rgba(var(--splash-color, 4, 1, 163),1);
                    fill: rgba(var(--text-color, 234, 235, 231), 0.7);
                }
                g {
                    transform: translate(-0.27287251px,-0.28531668px);
                }
                text {
                    font-style:normal;
                    font-variant:normal;
                    font-weight:bold;
                    font-stretch:normal;
                    font-size:21.3333px;
                    font-family:'styrene';
                    -inkscape-font-specification:'Styrene B Web Bold';
                    white-space:pre;
                    inline-size:208px;
                    display:inline;
                    fill-opacity:1;
                    transform: translate(-14.779014px,26.491328px);
                }
                `;
    this.shadowRoot.appendChild(wrapper);
    this.shadowRoot.appendChild(style);
  }
}

customElements.define('newberry-logo', NewberryLogo);
