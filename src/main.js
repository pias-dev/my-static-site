
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    function toggleMobileMenu() {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('inline-flex');
        closeIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('inline-flex');
    }

    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                toggleMobileMenu();
            }
        });
    });

    // Age Calculator
    const birthDateInput = document.getElementById('birthdate');
    const birthTimeInput = document.getElementById('birthtime');
    const calculateButton = document.getElementById('calculate-button');
    const resetButton = document.getElementById('reset-button');
    const errorMessage = document.getElementById('error-message');
    const resultsSection = document.getElementById('results');

    const yearsSpan = document.getElementById('years');
    const monthsSpan = document.getElementById('months');
    const daysSpan = document.getElementById('days');
    const totalDaysSpan = document.getElementById('total-days');
    const totalHoursSpan =document.getElementById('total-hours');
    const totalMinutesSpan = document.getElementById('total-minutes');
    const countdownDaysSpan = document.getElementById('countdown-days');

    // Set max date to today
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    birthDateInput.max = todayString;

    calculateButton.addEventListener('click', calculateAge);
    resetButton.addEventListener('click', resetCalculator);

    function calculateAge() {
        const birthDateValue = birthDateInput.value;
        if (!birthDateValue) {
            errorMessage.firstElementChild.textContent = 'Please enter your date of birth.';
            errorMessage.classList.remove('hidden');
            resultsSection.classList.add('hidden');
            return;
        }

        errorMessage.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        const birthDate = new Date(birthDateValue + 'T' + (birthTimeInput.value || '00:00'));
        const now = new Date();

        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        let days = now.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        yearsSpan.textContent = years;
        monthsSpan.textContent = months;
        daysSpan.textContent = days;

        const totalDays = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24));
        totalDaysSpan.textContent = totalDays.toLocaleString();
        totalHoursSpan.textContent = (totalDays * 24).toLocaleString();
        totalMinutesSpan.textContent = (totalDays * 24 * 60).toLocaleString();

        const nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (now > nextBirthday) {
            nextBirthday.setFullYear(now.getFullYear() + 1);
        }
        const countdownDays = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));
        countdownDaysSpan.textContent = countdownDays;
    }

    function resetCalculator() {
        birthDateInput.value = '';
        birthTimeInput.value = '';
        errorMessage.classList.add('hidden');
        resultsSection.classList.add('hidden');
    }

    // Theme Switcher
    const themeSwitch = document.getElementById('theme-switch-checkbox');
    const html = document.documentElement;

    // check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        themeSwitch.checked = true;
    } else {
        html.classList.remove('dark');
        themeSwitch.checked = false;
    }

    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });
});
