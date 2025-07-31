const footerHTML = `
<footer class="bg-slate-800/[.9] dark:bg-slate-900/[.8] transition-colors duration-300 border-t border-slate-700">
    <div class="max-w-7xl mx-auto px-6 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
            <div class="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-1">

                <!-- Flex container for Icon and Brand Name -->
                <div class="flex items-center justify-center md:justify-start gap-3">
                    <img src="./assets/logo.svg" alt="All Tool AI Logo" class="w-10 h-10 sm:w-12 sm:h-12">
                    <h3 class="text-3xl font-bold text-blue-300">All Tool AI</h3>
                </div>

                <p class="text-slate-400 mt-2 max-w-xs">Your trusted hub for free, web-based applications. We build simple, powerful, and secure applications for users worldwide.</p>
                <div class="mt-6 flex items-center gap-5">
                    <a href="#" class="text-slate-400 transition-colors hover:text-white" aria-label="Facebook">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="#" class="text-slate-400 transition-colors hover:text-white" aria-label="Twitter">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    </a>
                    <a href="#" class="text-slate-400 transition-colors hover:text-white" aria-label="Instagram">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="#" class="text-slate-400 transition-colors hover:text-white" aria-label="LinkedIn">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.126 2.062 2.062 0 0 1 0 4.126zM7.11 20.452H3.56v-11.4h3.55v11.4z"></path></svg>
                    </a>
                    <a href="#" class="text-slate-400 transition-colors hover:text-white" aria-label="GitHub">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.011c0 4.434 2.757 8.18 6.538 9.531.474.088.647-.206.647-.457 0-.225-.008-.823-.013-1.615-2.675.582-3.24-1.287-3.24-1.287-.43-1.093-1.05-1.385-1.05-1.385-.86-.588.065-.576.065-.576.95.067 1.45 1.006 1.45 1.006.845 1.448 2.215 1.03 2.755.787.086-.612.33-1.03.6-1.268-2.1-.238-4.305-1.05-4.305-4.672 0-1.033.37-1.878 1.005-2.54-.1-.24-.435-1.2.095-2.505 0 0 .795-.255 2.6 1.005a8.77 8.77 0 014.74 0c1.805-1.26 2.6-1.005 2.6-1.005.53 1.305.195 2.265.1 2.505.635.662 1 1.507 1 2.54 0 3.632-2.205 4.434-4.315 4.663.34.292.645.872.645 1.758 0 1.268-.01 2.29-.01 2.6 0 .253.17.548.65.455C19.245 20.19 22 16.444 22 12.01C22 6.477 17.523 2 12 2z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <div class="text-center md:text-left">
                <h4 class="text-lg font-bold text-blue-300">Quick Links</h4>
                <ul class="mt-4 space-y-2 list-none p-0">
                    <!-- CHANGE: Removed text-white/font-semibold and used new CSS class -->
                    <li><a href="#" class="text-white font-semibold no-underline transition-colors duration-300 hover:text-blue-300">Home</a></li>
                    <li><a href="#" class="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-300">About Us</a></li>
                    <li><a href="#" class="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-300">Contact</a></li>
                    <li><a href="#" class="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-300">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="text-center md:text-left">
                <h4 id="main-tools" class="text-lg font-bold text-blue-300">Main Tools</h4>
                <ul class="mt-4 space-y-2 list-none p-0">
                    <!-- CHANGE: Removed text-white/font-semibold and used new CSS class -->
                    <li><a href="#" class="footer-link-active no-underline transition-colors duration-300 hover:text-blue-400">Text to Binary Converter</a></li>
                    <li><a href="#" class="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-300">AI Image Editor</a></li>
                    <li><a href="#" class="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-300">AI Text Generator</a></li>
                </ul>
            </div>
            <div class="text-center md:text-left">
                <h4 class="text-lg font-bold text-blue-300">Company</h4>
                <ul class="mt-4 space-y-2 list-none p-0">
                    <li><a href="#" class="footer-link-active no-underline transition-colors duration-300 hover:text-blue-300">Blog</a></li>
                    <li><a href="#" class="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-300">Sitemap</a></li>
                </ul>
            </div>
        </div>
        <div class="mt-12 pt-8 border-t border-slate-700 text-center text-slate-500">
        <p>&copy; <span id="year"></span> All Tool AI. Proudly serving our users worldwide.</p>
        </div>
    </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerHTML;
    const yearSpan = this.querySelector('#year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }
}

customElements.define('footer-component', Footer);
