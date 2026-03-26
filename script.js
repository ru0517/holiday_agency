(function () {
  var mapMarkers = [];
  var mapInstance = null;

  var MAP_POPUP_KEYS = [
    ["map.baku.t", "map.baku.n"],
    ["map.lahij.t", "map.lahij.n"],
    ["map.gala.t", "map.gala.n"],
    ["map.karan.t", "map.karan.n"],
    ["map.qakh.t", "map.qakh.n"],
    ["map.sheki.t", "map.sheki.n"],
    ["map.lerik.t", "map.lerik.n"],
    ["map.yard.t", "map.yard.n"],
    ["map.hirkan.t", "map.hirkan.n"],
  ];

  var MAP_COORDS = [
    { lat: 40.4093, lng: 49.8671 },
    { lat: 40.8453, lng: 48.3872 },
    { lat: 40.634, lng: 48.371 },
    { lat: 41.024, lng: 47.128 },
    { lat: 41.4181, lng: 46.9208 },
    { lat: 41.1919, lng: 47.1706 },
    { lat: 38.772, lng: 48.4159 },
    { lat: 38.905, lng: 48.234 },
    { lat: 38.681, lng: 48.536 },
  ];

  function updateMapPopups() {
    if (!window.TOURELAX_I18N || !mapMarkers.length) return;
    var t = TOURELAX_I18N.t;
    mapMarkers.forEach(function (m, i) {
      var pair = MAP_POPUP_KEYS[i];
      if (!pair) return;
      m.setPopupContent("<strong>" + t(pair[0]) + "</strong><br>" + t(pair[1]));
    });
  }

  window.TOURELAX_onLangChange = updateMapPopups;

  function initTourMap() {
    var el = document.getElementById("tour-map");
    if (!el || typeof L === "undefined") return;
    if (mapInstance) return;

    mapInstance = L.map(el, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(mapInstance);

    var goldIcon = L.divIcon({
      className: "tour-marker",
      html:
        '<span style="display:block;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:#b8860b;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35);"></span>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    var bounds = [];
    MAP_COORDS.forEach(function (c, i) {
      var m = L.marker([c.lat, c.lng], { icon: goldIcon }).addTo(mapInstance);
      mapMarkers.push(m);
      bounds.push([c.lat, c.lng]);
    });

    updateMapPopups();
    mapInstance.fitBounds(bounds, { padding: [36, 36], maxZoom: 8 });
  }

  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      if (open) {
        mobileNav.setAttribute("hidden", "");
      } else {
        mobileNav.removeAttribute("hidden");
      }
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.setAttribute("hidden", "");
      });
    });
  }

  document.querySelectorAll(".day-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var card = btn.closest(".day-card");
      var body = card && card.querySelector(".day-body");
      if (!body) return;
      btn.setAttribute("aria-expanded", String(!expanded));
      if (expanded) {
        body.setAttribute("hidden", "");
      } else {
        body.removeAttribute("hidden");
      }
    });
  });

  function boot() {
    if (window.TOURELAX_I18N) {
      TOURELAX_I18N.init();
    }
    initTourMap();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
