
const svgIcons = `
<svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
    <defs>
        <linearGradient id="gp-grad-1" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse"><stop stop-color="#00C3FF"/><stop offset="1" stop-color="#1BE2FA"/></linearGradient>
        <linearGradient id="gp-grad-2" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse"><stop stop-color="#FFCE00"/><stop offset="1" stop-color="#FFEA00"/></linearGradient>
        <linearGradient id="gp-grad-3" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse"><stop stop-color="#DE2453"/><stop offset="1" stop-color="#FE3944"/></linearGradient>
        <linearGradient id="gp-grad-4" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse"><stop stop-color="#11D574"/><stop offset="1" stop-color="#01F176"/></linearGradient>
        <symbol id="icon-google-play" viewBox="0 0 32 32"><g mask="url(#gp-mask)"><path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#gp-grad-1)"/><path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#gp-grad-2)"/><path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#gp-grad-3)"/><path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#gp-grad-4)"/></g></symbol>
        <mask id="gp-mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26"><path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663V4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4"/></mask>
    </defs>
</svg>
`;

const headerHTML = `
<style>
/* Extracted CSS for theme-toggle-container and logo-text-block */
.theme-toggle-container { font-size: clamp(10px, 0.6rem + 0.4vw, 14px); }
.switch { position: relative; display: inline-block; width: 5.625em; height: 2.75em; background-image: var(--switch-bg-light); border-radius: 1.375em; cursor: pointer; transition: background-image var(--transition-duration) ease; }
html.dark .switch { background-image: var(--switch-bg-dark); }
.switch__input { appearance: none; -webkit-appearance: none; position: absolute; width: 100%; height: 100%; margin: 0; z-index: 10; cursor: pointer;}
.switch__input::before { content: ""; position: absolute; top: 0.25em; left: 0.25em; width: 2.25em; height: 2.25em; background-color: var(--thumb-light); border-radius: 50%; transition: transform var(--transition-duration) var(--transition-timing), background-color var(--transition-duration) ease; }
.switch__input:checked::before { transform: translateX(2.875em); background-color: var(--thumb-dark); }
.switch__icon { position: absolute; width: 1.75em; height: 1.75em; top: 0.5em; transition: opacity var(--transition-duration) ease, transform var(--transition-duration) var(--transition-timing); }
.switch__icon--light { right: 0.625em; color: #ffffff; opacity: 1; }
.switch__icon--dark { left: 0.625em; color: #ffffff; opacity: 0; transform: translateX(0.625em); }
html.dark .switch__icon--light { opacity: 0; transform: translateX(-0.625em); }
html.dark .switch__icon--dark { opacity: 1; transform: translateX(0); }
.logo-main-line { display: flex; align-items: baseline; line-height: 1; }
.logo-text { font-family: 'Poppins', sans-serif; font-size: 1.75rem; font-weight: 700; white-space: nowrap; }
.alltool { color: var(--primary-blue); }
.ai { color: var(--primary-purple); }
.logo-sub-line { font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 400; text-align: right; }
.com-light { color: var(--accent-cyan); }
@media (max-width: 480px) {
    .logo-text { font-size: 1.5rem; }
    .logo-sub-line { font-size: 0.8rem; }
}
</style>

<header x-data="{ isOpen: false }" class="fixed top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0">
                <a href="#" class="flex items-center space-x-3 transition-opacity hover:opacity-85" aria-label="Homepage">
                    <img src="./assets/logo.svg" alt="All Tool AI Logo" class="w-10 h-10 lg:w-12 lg:h-12">

                    <div class="logo-text-block">
                        <div class="logo-main-line"><span class="logo-text alltool">All Tool&nbsp;</span><span class="logo-text ai">Ai</span></div>
                        <div class="logo-sub-line"><span class="com-light">.Com</span></div>
                    </div>
                </a>
            </div>
            <nav class="hidden lg:flex items-center space-x-8 mx-auto">
                <a href="index.html" class="nav-link-animated text-lg font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400">Home</a>
                <a href="" class="nav-link-animated text-lg font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400">Tools List</a>
                <a href="#" class="nav-link-animated text-lg font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400">About</a>
                <a href="#" class="nav-link-animated text-lg font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400">Contact</a>
                <a href="#" aria-label="Get our app on Google Play" title="Google Play" class="transition-transform hover:scale-110 flex items-center"><span class="sr-only">Google Play</span><svg class="w-7 h-7" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="#icon-google-play"></use></svg></a>
            </nav>
            <div class="flex flex-shrink-0 items-center space-x-2 sm:space-x-4">
                <div class="theme-toggle-container"><label class="switch" for="theme-toggle" aria-label="Toggle dark and light theme"><input type="checkbox" class="switch__input" id="theme-toggle"><svg aria-hidden="true" class="switch__icon switch__icon--light" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg><svg aria-hidden="true" class="switch__icon switch__icon--dark" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></label></div>
                <div class="lg:hidden"><button @click="isOpen = !isOpen" type="button" class="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 focus:outline-none border border-slate-300 dark:border-slate-600 rounded-md transition-colors" aria-controls="mobile-menu" :aria-expanded="isOpen.toString()"><span class="sr-only">Open main menu</span><svg x-show="!isOpen" class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"/></svg><svg x-show="isOpen" class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button></div>
            </div>
        </div>
        <div x-show="isOpen" @click.away="isOpen = false" x-transition class="lg:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-4 space-y-2 sm:px-3 border-t border-slate-200 dark:border-slate-700">
                <a href="index.html" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">Home</a>
                <a href="" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">Tools List</a>
                <a href="#" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">About</a>
                <a href="#" @click="isOpen = false" class="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">Contact</a>
                <a href="#" @click="isOpen = false" class="flex items-center space-x-3 px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"><svg class="w-6 h-6" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon-google-play"></use></svg><span>Google Play</span></a>
            </div>
        </div>
    </div>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = svgIcons + headerHTML;

    const themeToggle = this.querySelector('#theme-toggle');
    if (themeToggle) {
      const isDark = localStorage.getItem('color-theme') === 'dark' || 
                    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      themeToggle.checked = isDark;

      themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }
      });
    }

    const toolsListLink = this.querySelector('a[href=""]');
    if (toolsListLink) {
      toolsListLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainToolsSection = document.getElementById('main-tools');
        if (mainToolsSection) {
          mainToolsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const mobileMenuToolsListLink = this.querySelector('#mobile-menu a[href=""]');
    if (mobileMenuToolsListLink) {
      mobileMenuToolsListLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainToolsSection = document.getElementById('main-tools');
        if (mainToolsSection) {
          mainToolsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}

customElements.define('header-component', Header);