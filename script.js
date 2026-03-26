(function () {
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

  function initTourMap() {
    var el = document.getElementById("tour-map");
    if (!el || typeof L === "undefined") return;

    var stops = [
      { lat: 40.4093, lng: 49.8671, title: "Баку", note: "Старт и финал, море, экскурсии" },
      { lat: 40.8453, lng: 48.3872, title: "Лахидж", note: "Район Исмаиллы, медные мастерские" },
      { lat: 40.634, lng: 48.371, title: "Водопад Галачик", note: "Природа и пикник" },
      { lat: 41.024, lng: 47.128, title: "Озеро Каранохур", note: "Горное озеро" },
      { lat: 41.4181, lng: 46.9208, title: "Ках", note: "Илису, Курмюк, мосты" },
      { lat: 41.1919, lng: 47.1706, title: "Шеки", note: "Дворец ханов, Киш, караван-сарай" },
      { lat: 38.772, lng: 48.4159, title: "Лерик", note: "Визеземин, водопад Токиахил" },
      { lat: 38.905, lng: 48.234, title: "Ярдимли", note: "Каньон Нисекала" },
      { lat: 38.681, lng: 48.536, title: "Хиркан", note: "Национальный парк, водопады" },
    ];

    var map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    var goldIcon = L.divIcon({
      className: "tour-marker",
      html:
        '<span style="display:block;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:#b8860b;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35);"></span>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    var bounds = [];
    stops.forEach(function (s) {
      var m = L.marker([s.lat, s.lng], { icon: goldIcon }).addTo(map);
      m.bindPopup("<strong>" + s.title + "</strong><br>" + s.note);
      bounds.push([s.lat, s.lng]);
    });

    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 8 });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTourMap);
  } else {
    initTourMap();
  }
})();
