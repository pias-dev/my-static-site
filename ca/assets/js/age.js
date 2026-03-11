document.addEventListener("DOMContentLoaded", () => {
    // --- grabbing stuff from the DOM (I always forget half of these, so grouping here) ---
    const birthYearInput = document.getElementById("birth-year");
    const birthMonthInput = document.getElementById("birth-month");
    const birthDayInput = document.getElementById("birth-day");
    const timeInput = document.getElementById("birth-time");
    const calcBtn = document.getElementById("calculate-button");
    const wipeBtn = document.getElementById("reset-button");
    const errBox = document.getElementById("error-message");
    const resultsBox = document.getElementById("results");

    // little display spans
    const yearsEl = document.getElementById("years");
    const monthsEl = document.getElementById("months");
    const daysEl = document.getElementById("days");
    const livedDaysEl = document.getElementById("total-days");
    const livedHoursEl = document.getElementById("total-hours");
    const livedMinutesEl = document.getElementById("total-minutes");
    const nextBdayEl = document.getElementById("countdown-days");

    // ms constants (kept them here instead of inline because I always forget the hour one...)
    const MS_MIN = 60000;
    const MS_HR = 3600000;
    const MS_DAY = 86400000;


    // ------------------------- UTILS ------------------------------------

    // I always end up re-googling this every project…
    function daysInMonth(y, m) {
        return new Date(y, m + 1, 0).getDate();
    }

    function leapYearCheck(year) {
        // nothing fancy, just the usual rule
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Basic age calc — I had to rewrite this twice; leaving both versions so I don't break something later
    function calcAgeRough(b, c) {
        let yy = c.getFullYear() - b.getFullYear();
        let mm = c.getMonth() - b.getMonth();
        let dd = c.getDate() - b.getDate();

        if (dd < 0) {
            mm--;
            const prevM = c.getMonth() === 0 ? 11 : c.getMonth() - 1;
            const prevY = c.getMonth() === 0 ? c.getFullYear() - 1 : c.getFullYear();
            dd += daysInMonth(prevY, prevM);
        }

        if (mm < 0) {
            yy--;
            mm += 12;
        }

        return {
            years: Math.max(0, yy),
            months: Math.max(0, mm),
            days: Math.max(0, dd)
        };
    }

    // This was your "precise" version; I just left it slightly more verbose (future-me might clean this up)
    function calcAgePrecise(bd, cd) {
        const born = {
            y: bd.getFullYear(),
            m: bd.getMonth(),
            d: bd.getDate()
        };

        const curr = {
            y: cd.getFullYear(),
            m: cd.getMonth(),
            d: cd.getDate()
        };

        let yy = curr.y - born.y;
        let mm = curr.m - born.m;
        let dd = curr.d - born.d;

        if (dd < 0) {
            mm--;
            const lastMonth = new Date(curr.y, curr.m, 0);
            dd += lastMonth.getDate();
        }

        if (mm < 0) {
            yy--;
            mm += 12;
        }

        return { years: yy, months: mm, days: dd };
    }

    // This looks long but it handles weird cases like Feb 29 — leaving comments for sanity
    function daysUntilBirthday(bd, today) {
        const cy = today.getFullYear();
        const bm = bd.getMonth();
        const bdDay = bd.getDate();

        let nextBday = new Date(cy, bm, bdDay);

        // feb 29 stuff — handled the lazy way
        if (bm === 1 && bdDay === 29 && !leapYearCheck(cy)) {
            nextBday = new Date(cy, 1, 28);
        }

        // sometimes JS rolls date to next month if invalid — forcing last valid date
        if (nextBday.getMonth() !== bm) {
            nextBday = new Date(cy, bm + 1, 0);
        }

        const tMid = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const bMid = new Date(nextBday.getFullYear(), nextBday.getMonth(), nextBday.getDate());

        if (bMid < tMid) {
            const nextY = cy + 1;
            nextBday = new Date(nextY, bm, bdDay);

            if (bm === 1 && bdDay === 29 && !leapYearCheck(nextY)) {
                nextBday = new Date(nextY, 1, 28);
            }
            if (nextBday.getMonth() !== bm) {
                nextBday = new Date(nextY, bm + 1, 0);
            }
        }

        if (bMid.getTime() === tMid.getTime()) {
            return 0; // happy birthday!
        }

        const gap = nextBday.getTime() - tMid.getTime();
        return Math.ceil(gap / MS_DAY);
    }

    // I kept this separate even though you could combine it with others — readability > optimization
    function totalDaysAlive(bd, cd) {
        const d1 = new Date(bd.getFullYear(), bd.getMonth(), bd.getDate());
        const d2 = new Date(cd.getFullYear(), cd.getMonth(), cd.getDate());

        return Math.floor((d2 - d1) / MS_DAY);
    }

    // tiny wrapper
    const niceNum = (n) => n.toLocaleString();


    // -------------- UI / Validation Stuff -----------------

    const rightNow = new Date();
    // Set max year to current year
    birthYearInput.max = rightNow.getFullYear();
    birthYearInput.min = 1900;

    function showErr(msg) {
        if (!errBox) return;
        errBox.querySelector("p").textContent = msg;
        errBox.classList.remove("hidden");
        resultsBox.classList.add("hidden");
    }

    function clearErr() {
        if (!errBox) return;
        errBox.classList.add("hidden");
    }


    // -------------- CENTRAL CALC LOGIC ---------------------

    function runCalc() {
        const yearVal = birthYearInput.value;
        const monthVal = birthMonthInput.value;
        const dayVal = birthDayInput.value;

        if (!yearVal || !monthVal || !dayVal) {
            showErr("Please enter your complete date of birth (year, month, and day).");
            return;
        }

        const y = parseInt(yearVal);
        const m = parseInt(monthVal) - 1;
        const d = parseInt(dayVal);

        let hh = 0,
            mm = 0;
        if (timeInput.value) {
            const [h2, m2] = timeInput.value.split(":");
            hh = parseInt(h2) || 0;
            mm = parseInt(m2) || 0;
        }

        const dobFull = new Date(y, m, d, hh, mm);
        const dobOnly = new Date(y, m, d);
        const now = new Date();
        const todayOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        if (isNaN(dobFull.getTime())) {
            showErr("That date doesn't look right. Double-check?");
            return;
        }

        if (dobOnly > todayOnly) {
            showErr("Birth date cannot be in the future.");
            return;
        }

        if (y < 1900) {
            showErr("Please use a year after 1900. (Old JS date quirk too!)");
            return;
        }

        clearErr();

        // age calculation (using the precise variant)
        const ageBits = calcAgePrecise(dobOnly, todayOnly);

        const livedDays = totalDaysAlive(dobOnly, todayOnly);
        const livedHours = Math.floor((now - dobFull) / MS_HR);
        const livedMinutes = Math.floor((now - dobFull) / MS_MIN);

        const untilNext = daysUntilBirthday(dobOnly, todayOnly);

        yearsEl.textContent = ageBits.years;
        monthsEl.textContent = ageBits.months;
        daysEl.textContent = ageBits.days;

        livedDaysEl.textContent = niceNum(livedDays);
        livedHoursEl.textContent = niceNum(livedHours);
        livedMinutesEl.textContent = niceNum(livedMinutes);

        if (untilNext === 0) {
            nextBdayEl.textContent = "🎉 Today is your birthday!";
            nextBdayEl.parentElement.innerHTML =
                '<span id="countdown-days" class="text-2xl font-extrabold text-purple-600 dark:text-purple-400">🎉 Happy Birthday! 🎉</span>';
        } else {
            nextBdayEl.textContent = niceNum(untilNext);
        }

        resultsBox.classList.remove("hidden");
        resultsBox.scrollIntoView({ behavior: "smooth", block: "nearest" });

        // debug logs - leaving these because they help when something breaks randomly
        console.log("DOB:", dobOnly.toDateString());
        console.log("Today:", todayOnly.toDateString());
        console.log("Age:", ageBits);
        console.log("Days lived:", livedDays);
        console.log("Next bday in:", untilNext);
    }


    function resetAll() {
        birthYearInput.value = "";
        birthMonthInput.value = "";
        birthDayInput.value = "";
        timeInput.value = "";
        clearErr();
        resultsBox.classList.add("hidden");

        const countdownContainer = document.querySelector('#results p:has(#countdown-days)') || document.querySelector('#results .glass-card:last-child p');

        if (countdownContainer) {
            countdownContainer.innerHTML =
                '<span id="countdown-days" class="text-4xl font-extrabold text-purple-600 dark:text-purple-400"></span> <span class="text-xl">Days to Go! 🎂</span>';
        }

        birthYearInput.focus();
    }


    // ----- LISTENERS -----
    calcBtn.addEventListener("click", runCalc);
    wipeBtn.addEventListener("click", resetAll);

    [birthYearInput, birthMonthInput, birthDayInput, timeInput].forEach((box) => {
        box.addEventListener("keydown", (ev) => {
            if (ev.key === "Enter") runCalc();
        });
        box.addEventListener("input", clearErr);
    });
});