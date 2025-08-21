document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-md transition-colors duration-300 dark:bg-slate-900/80 dark:shadow-slate-800">
        <div class="px-4 sm:px-6">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="/" class="flex items-center space-x-3 transition-opacity hover:opacity-85" aria-label="Homepage">
                        <img src="./src/logo.svg" alt="All Tool AI Logo" class="w-10 h-10 lg:w-12 lg:h-12">
                        <div class="logo-text-block">
                            <div class="logo-main-line"><span class="logo-text alltool">All Tool </span><span class="logo-text ai">Ai</span></div>
                            <div class="logo-sub-line"><span class="com-color">.Com</span></div>
                        </div>
                    </a>
                </div>
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="#" class="nav-link-animated text-lg font-semibold text-slate-600 hover:text-purple-600 focus:text-purple-600 active:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 dark:focus:text-purple-400 dark:active:text-purple-400">Home</a>
                    <a href="#main-tools" class="nav-link-animated text-lg font-semibold text-slate-600 hover:text-purple-600 focus:text-purple-600 active:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 dark:focus:text-purple-400 dark:active:text-purple-400">Tools List</a>
                    <a href="#" class="nav-link-animated text-lg font-semibold text-slate-600 hover:text-purple-600 focus:text-purple-600 active:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 dark:focus:text-purple-400 dark:active:text-purple-400">About</a>
                    <a href="#" class="nav-link-animated text-lg font-semibold text-slate-600 hover:text-purple-600 focus:text-purple-600 active:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 dark:focus:text-purple-400 dark:active:text-purple-400">Contact</a>
                    <a href="#" aria-label="Get our app on Google Play" title="Google Play" class="transition-transform hover:scale-110 focus:scale-110 flex items-center">
                        <span class="sr-only">Google Play</span>
                        <img src="./src/icon-google-play.svg" alt="Google Play Icon" class="w-8 h-8">
                    </a>
                </nav>

                <div class="flex items-center">
                    <label class="theme-switch" for="theme-switch-checkbox">
                        <input type="checkbox" id="theme-switch-checkbox" />
                        <div class="slider round"></div>
                    </label>

                    <div class="md:hidden">
                        <button id="mobile-menu-button" type="button" class="border-2 border-indigo-600 p-1 ml-4 text-slate-500 hover:text-slate-600 focus:text-slate-600 focus:outline-none dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-slate-300" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path id="hamburger-icon" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div id="mobile-menu" class="lg:hidden hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700 dark:active:bg-slate-700">Home</a>
                <a href="#main-tools" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700 dark:active:bg-slate-700">Tools List</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700 dark:active:bg-slate-700">About</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700 dark:active:bg-slate-700">Contact</a>
                <a href="#" aria-label="Get our app on Google Play" title="Google Play" class="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700 dark:active:bg-slate-700"><span class="sr-only">Google Play</span><img src="./src/icon-google-play.svg" alt="Google Play Icon" class="w-6 h-6"><span class="ml-2">Google Play</span></a>
            </div>
        </div>
    </header>
    `;
    const placeholder = document.getElementById("header-placeholder");
    if (placeholder) {
        placeholder.innerHTML = headerHTML;
    }
});
