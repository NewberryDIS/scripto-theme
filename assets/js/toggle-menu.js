class ToggleMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('hidden-checkbox');
    checkbox.addEventListener('change',toggleMenu);
    let checky = checkbox.checked

    const button = document.createElement('button');
    // button.textContent = 'Toggle Menu';
    button.innerHTML = `<svg width="35" id="hamburger" class="Header__toggle-svg" viewbox="0 0 35 30">
	<g stroke="rgb(var(--fg-color-1))" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
  		<path id="top-line" d="M5,5 L30,5 Z"></path>
		<path id="middle-line" d="M5,15 L30,15 Z"></path>
		<path id="bottom-line" d="M5,25 L30,25 Z"></path> 
	</g>
  </svg>`

    button.addEventListener('click', (checkbox) => {
      checkbox.checked = !checkbox.checked;
      toggleMenu();
    });


    const style = document.createElement('style');
    style.textContent = `
        .hidden-checkbox {
            display: none;
        }
        button {
            background: none;
            border: 0;
        }
        
        #top-line,
        #bottom-line,
        #middle-line {
          transform-box: fill-box;
          transform-origin: center;
        }
        
        #middle-line {
          opacity: 0.01;
        }
        .open #top-line {
          animation: down-rotate 0.33s ease-in both;
        }
        .open #bottom-line {
          animation: up-rotate 0.33s ease-in both;
        }
        .open #middle-line {
          animation: hide 0.33s ease-in forwards;
        }
        
        button:not(.open) #top-line {
          animation: down-rev-rotate 0.33s ease-in both;
        }
        button:not(.open) #bottom-line {
          animation: up-rev-rotate 0.33s ease-in both;
        }
        button:not(.open) #middle-line {
          animation: show 0.33s ease-in forwards;
        }
        @keyframes up-rotate {
          0% {
            transform: translate( 0px, 0px );
          }
          30% {
            transform-origin: center;
            transform: translate( 0px, -10px );
          }
          100% {
            transform-origin: center;
            transform: translate( 0px, -10px ) rotate( 45deg );
          }
        }
        @keyframes up-rev-rotate {
          0% {
            transform: translate( 0px, -10px ) rotate( 45deg );
          }
          30% {
            transform-origin: center;
            transform: translate( 0px, -10px );
          }
          100% {
            transform-origin: center;
            transform: translate( 0px, 0px );
          }
        }
        @keyframes down-rotate {
          0% {
            transform: translate( 0px, 0px );
          }
          30% {
            transform-origin: center;
            transform: translate( 0px, 10px );
          }
          100% {
            transform-origin: center;
            transform: translate( 0px, 10px ) rotate(-45deg);
          }
        }
        @keyframes down-rev-rotate {
          0% {
            transform: translate( 0px, 10px ) rotate(-45deg);
          }
          30% {
            transform-origin: center;
            transform: translate( 0px, 10px );
          }
          100% {
            transform-origin: center;
            transform: translate( 0px, 0px );
          }
        }
        @keyframes hide {
          22% {
            opacity: 1;
          }
          33% {
            opacity: 0.01;
          }
          100% {
            opacity: 0.01;
          }
        }
        @keyframes show {
          22% {
            opacity: 0.01;
          }
          33% {
            opacity: 0.99;
          }
          100% {
            opacity: 1;
          }
        }
    `;

    shadow.append(button, checkbox, style);

    function  toggleMenu() {
        button.classList.toggle('open');
        document.body.classList.toggle('open') 
    }
  }
}

customElements.define('toggle-menu', ToggleMenu);
