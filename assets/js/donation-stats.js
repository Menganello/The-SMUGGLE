/**
 * Fetches the latest donation totals (kept fresh by a scheduled GitHub
 * Action that scrapes GoFundMe every few hours) straight from the `main`
 * branch on GitHub, so the number updates without needing a new site
 * deploy. If the fetch fails for any reason, the static fallback values
 * already baked into the HTML stay exactly as they are - never worse
 * than not having this script at all.
 */
(function () {
  "use strict";

  var STATS_URL =
    "https://raw.githubusercontent.com/Menganello/The-SMUGGLE/main/assets/data/donation-stats.json";

  function formatEuro(amount) {
    return (
      "€" + Math.round(amount).toLocaleString("it-IT", { maximumFractionDigits: 0 })
    );
  }

  function applyStats(data) {
    var raisedEl = document.getElementById("donation-raised");
    var donorsEl = document.getElementById("donation-donors");
    var percentEl = document.getElementById("donation-percent");
    var barEl = document.getElementById("donation-bar");

    if (!raisedEl || !donorsEl || typeof data.raised !== "number" || typeof data.donors !== "number") {
      return;
    }

    var goal = typeof data.goal === "number" && data.goal > 0 ? data.goal : null;

    raisedEl.textContent = formatEuro(data.raised);
    donorsEl.textContent = String(data.donors);

    if (goal && percentEl && barEl) {
      var pct = Math.max(0, Math.min(100, (data.raised / goal) * 100));
      var pctRounded = Math.round(pct);
      percentEl.textContent = pctRounded + "%";
      barEl.style.width = pctRounded + "%";
    }
  }

  fetch(STATS_URL, { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("Bad response " + res.status);
      return res.json();
    })
    .then(applyStats)
    .catch(function () {
      // Network hiccup, ad-blocker, etc. - keep the static fallback shown in the HTML.
    });
})();
