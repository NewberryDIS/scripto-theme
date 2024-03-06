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
    button.innerHTML = `<svg id="hamburger" class="Header__toggle-svg" viewbox="0 0 60 40">
				<g stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
					<path id="top-line" d="M10,10 L50,10 Z"></path>
					<path id="middle-line" d="M10,20 L50,20 Z"></path>
					<path id="bottom-line" d="M10,30 L50,30 Z"></path>
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

svg {
  width: 120px;
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
  animation: down-rotate 0.6s ease-out both;
}
.open #bottom-line {
  animation: up-rotate 0.6s ease-out both;
}
.open #middle-line {
  animation: hide 0.6s ease-out forwards;
}

button:not(.open) #top-line {
  animation: down-rev-rotate 0.6s ease-out both;
}
button:not(.open) #bottom-line {
  animation: up-rev-rotate 0.6s ease-out both;
}
button:not(.open) #middle-line {
  animation: show 0.6s ease-out forwards;
}
@keyframes up-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(-10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(-10px) rotate(45deg) scale(0.9);
  }
}
@keyframes up-rev-rotate {
  0% {
    transform: translateY(-10px) rotate(45deg) scale(0.9);
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(-10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(0px);
  }
}
@keyframes down-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(10px) rotate(-45deg) scale(0.9);
  }
}
@keyframes down-rev-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(10px) rotate(-45deg) scale(0.9);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(0px);
  }
}
@keyframes hide {
  29% {
    opacity: 0.99;
  }
  30% {
    opacity: 0.01;
  }
  100% {
    opacity: 0.01;
  }
}
@keyframes show {
  29% {
    opacity: 0.01;
  }
  30% {
    opacity: 0.99;
  }
  100% {
    opacity: 0.99;
  }
}
    `;

    shadow.append(button, checkbox, style);

    function  toggleMenu() {
        button.classList.toggle('open');
      
      const menu = document.getElementById('header-bottom-menu');
      if (menu) {
        menu.classList.toggle('open');
      }
    }
  }
}

customElements.define('toggle-menu', ToggleMenu);
