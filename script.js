(function () {
  var mapMarkers = [];
  var mapInstance = null;

  var MAP_POPUP_KEYS = [
    ["map.baku.t", "map.baku.n"],
    ["map.lahij.t", "map.lahij.n"],
    ["map.gala.t", "map.gala.n"],
    ["map.karan.t", "map.karan.n"],
    ["map.qum.t", "map.qum.n"],
    ["map.ilisu.t", "map.ilisu.n"],
    ["map.karvansaray.t", "map.karvansaray.n"],
    ["map.kishtemple.t", "map.kishtemple.n"],
    ["map.kishv.t", "map.kishv.n"],
    ["map.shekipalace.t", "map.shekipalace.n"],
    ["map.vizezemin.t", "map.vizezemin.n"],
    ["map.yard.t", "map.yard.n"],
    ["map.hirkanpark.t", "map.hirkanpark.n"],
    ["map.sim.t", "map.sim.n"],
    ["map.hamosham.t", "map.hamosham.n"],
  ];

  /** Coordinates from Google place pages; click opens the same place in Google Maps. */
  var MAP_POINTS = [
    {
      lat: 40.4092617,
      lng: 49.8670924,
      url: "https://www.google.com/maps/place/%D0%91%D0%B0%D0%BA%D1%83,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@40.3945925,49.8549596,42914m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924!16zL20vMDFnZjU!5m1!1e2",
    },
    {
      lat: 40.8463482,
      lng: 48.3868634,
      url: "https://www.google.com/maps/place/%D0%9B%D0%B0%D0%B3%D0%B8%D1%87,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@40.8475144,48.3867717,2664m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4039c4508322be6b:0x549d4af29239fce2!8m2!3d40.8463482!4d48.3868634!16s%2Fm%2F028990r!5m1!1e2",
    },
    {
      lat: 41.0032391,
      lng: 47.9971684,
      url: "https://www.google.com/maps/place/Qalac%C4%B1q+%C5%9F%C9%99lal%C9%99si/@40.812179,48.2484141,666m/data=!3m1!1e3!4m6!3m5!1s0x403837d02cbd573d:0xb7242af1033d83c!8m2!3d41.0032391!4d47.9971684!16s%2Fg%2F11svw_b_fz!5m1!1e2",
    },
    {
      lat: 40.812179,
      lng: 48.250989,
      url: "https://www.google.com/maps/place/QARANOHUR+G%C3%96L%C3%9C/@40.812179,48.250989,666m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4039c727391a2655:0xa9e1aeaf33b61940!8m2!3d40.812179!4d48.250989!16s%2Fg%2F11s3y791h5!5m1!1e2",
    },
    {
      lat: 41.4584857,
      lng: 46.9110143,
      url: "https://www.google.com/maps/place/Qum+Basilica/@40.8125038,48.2487896,666m/data=!3m1!1e3!4m6!3m5!1s0x4047beaffb2bb117:0xb7727e0239735fd!8m2!3d41.4584857!4d46.9110143!16s%2Fm%2F0n8_9h3!5m1!1e2",
    },
    {
      lat: 41.4683322,
      lng: 47.0603465,
      url: "https://www.google.com/maps/place/%D0%98%D0%BB%D0%B8%D1%81%D1%83,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@41.4692285,47.0493364,2639m/data=!3m1!1e3!4m6!3m5!1s0x4047c0118835687b:0xa6b2b060b97b7635!8m2!3d41.4683322!4d47.0603465!16s%2Fm%2F04gsm4r!5m1!1e2",
    },
    {
      lat: 41.2010549,
      lng: 47.1933601,
      url: "https://www.google.com/maps/place/Karvansaray/@41.2010549,47.1933601,662m/data=!3m2!1e3!4b1!4m9!3m8!1s0x404787e634144a53:0x74824e15e017ff87!5m2!4m1!1i2!8m2!3d41.2010549!4d47.1933601!16s%2Fg%2F1tqt84c0!5m1!1e2",
    },
    {
      lat: 41.248999,
      lng: 47.1932015,
      url: "https://www.google.com/maps/place/Kish+Albanian+Temple/@41.248999,47.1932015,662m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4047898092916e27:0x1cfc23ff3e068cc0!8m2!3d41.248999!4d47.1932015!16s%2Fg%2F11h64tfgyh!5m1!1e2",
    },
    {
      lat: 41.2522466,
      lng: 47.1918835,
      url: "https://www.google.com/maps/place/%D0%9A%D0%B8%D1%88,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@41.4692285,47.0493364,2639m/data=!3m1!1e3!4m6!3m5!1s0x404788d9ba7dac37:0xa7b9ec266592e06c!8m2!3d41.2522466!4d47.1918835!16s%2Fm%2F04glj8g!5m1!1e2",
    },
    {
      lat: 41.2044097,
      lng: 47.1976291,
      url: "https://www.google.com/maps/place/%C5%9E%C9%99ki+Xan+Saray%C4%B1+(The+Palace+of+Shaki+Khans)/@40.812179,48.2484141,666m/data=!3m1!1e3!4m6!3m5!1s0x40478771c4b107d3:0x8c750e86430aeb81!8m2!3d41.2044097!4d47.1976291!16s%2Fg%2F11v67bvwn0!5m1!1e2",
    },
    {
      lat: 38.7736192,
      lng: 48.4151483,
      url: "https://www.google.com/maps/place/Vizezemin+kendi/@38.7736192,48.4151483,686m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4022ef5daff9c693:0x6277ebed1bb5c3da!8m2!3d38.7736192!4d48.4151483!16s%2Fg%2F11t410nd__!5m1!1e2",
    },
    {
      lat: 38.8670406,
      lng: 48.2033317,
      url: "https://www.google.com/maps/place/Nis%C9%99qala+kanyonu/@38.8670406,48.2033317,686m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4022c7e4ae5c3e05:0x1da4c37c6ce356d3!8m2!3d38.8670406!4d48.2033317!16s%2Fg%2F11sw4446y3!5m1!1e2",
    },
    {
      lat: 38.4742521,
      lng: 48.6927919,
      url: "https://www.google.com/maps/place/%D0%93%D0%B8%D1%80%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BF%D0%B0%D1%80%D0%BA/@38.4742521,48.6927919,689m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40225940ccedb679:0xd8c3cb147190f1c4!8m2!3d38.4742521!4d48.6927919!16zL20vMGg2emN4!5m1!1e2",
    },
    {
      lat: 38.4875811,
      lng: 48.6387428,
      url: "https://www.google.com/maps/place/%D0%A1%D1%8B%D0%BC,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@38.4875811,48.6387428,2757m/data=!3m1!1e3!4m6!3m5!1s0x402268b667c2176f:0xbd9ba7b0e0067890!8m2!3d38.4875811!4d48.6387428!16s%2Fm%2F04gsyd_!5m1!1e2",
    },
    {
      lat: 38.5599297,
      lng: 48.5969297,
      url: "https://www.google.com/maps/place/Hamo%C5%9Fam,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@38.5599292,48.5969297,2754m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4022673185a1fd51:0xbdca6ea8c3bcd95e!8m2!3d38.5599297!4d48.5969297!16s%2Fm%2F04gpwsn!5m1!1e2",
    },
  ];

  function updateMapPopups() {
    if (!window.TOURELAX_I18N || !mapMarkers.length) return;
    var t = TOURELAX_I18N.t;
    mapMarkers.forEach(function (m, i) {
      var pair = MAP_POPUP_KEYS[i];
      if (!pair) return;
      var content = "<strong>" + t(pair[0]) + "</strong><br>" + t(pair[1]);
      m.unbindTooltip();
      m.bindTooltip(content, { direction: "top", sticky: true });
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
    MAP_POINTS.forEach(function (p, i) {
      var m = L.marker([p.lat, p.lng], { icon: goldIcon }).addTo(mapInstance);
      mapMarkers.push(m);
      bounds.push([p.lat, p.lng]);
      m.on("click", function () {
        window.open(p.url, "_blank", "noopener,noreferrer");
      });
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
