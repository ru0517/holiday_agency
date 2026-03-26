(function () {
  var STORAGE_KEY = "tourelax-lang";
  var DEFAULT_LANG = "pl";

  var STR = {
    ru: {
      "meta.title": "Tourelax — Азербайджан | Люксовый тур",
      "meta.desc":
        "10-дневное люксовое путешествие по Азербайджану с Tourelax — виллы, VIP-транспорт, гид. 1–10 июля. 6000 zł.",
      "nav.label": "Основная навигация",
      "nav.tour": "Тур",
      "nav.included": "Включено",
      "nav.program": "Программа",
      "nav.videos": "Видео",
      "nav.advantages": "Преимущества",
      "nav.map": "Карта",
      "nav.contact": "Контакты",
      "nav.cta": "Забронировать",
      "menu.open": "Открыть меню",
      "lang.label": "Язык сайта",
      "hero.label": "Эксклюзивный маршрут",
      "hero.h1": "10-дневное люксовое и незаменимое путешествие по Азербайджану",
      "hero.dates": "1 июля — 10 июля",
      "hero.sub": "Проживание в частных домах и виллах с VIP-транспортом",
      "hero.priceNote": "Авиабилет и виза не включены",
      "hero.cta": "Забронировать",
      "inc.title": "Что входит в стоимость",
      "inc.lead": "Полный комфорт: от питания до экскурсий — всё продумано.",
      "inc.1": "Проживание в частных домах и виллах с бассейном",
      "inc.2":
        "Три приёма пищи в день (завтрак, обед, ужин), национальные сладости, свежие фрукты, алкогольные и безалкогольные напитки",
      "inc.3": "VIP-транспорт (комфортабельный микроавтобус или роскошный автомобиль)",
      "inc.4": "Услуги гида",
      "inc.5": "Экскурсии и входные билеты",
      "prog.title": "Программа тура",
      "prog.lead": "10 дней: море, горы, леса и история Азербайджана.",
      "day1.num": "День 1",
      "day1.title": "Встреча и размещение",
      "day1.body":
        "Трансфер в домик и размещение. Музыкальная вечеринка с мангалом на пляже в Баку: алкогольные напитки (пиво, вино, водка), игры и кальян, закат.",
      "day2.num": "День 2",
      "day2.title": "Баку: архитектура и Старый город",
      "day2.body":
        "Завтрак. Экскурсия по Баку: Центр Гейдара Алиева, Старый город, Девичья башня, Дворец Ширваншахов, Национальный музей истории. Обед. Променад у Каспия. Музей азербайджанского ковра. Башни Пламени, Площадь Фонтанов. Ужин с живой музыкой.",
      "day3.num": "День 3",
      "day3.title": "Исмаиллы и Лахидж",
      "day3.body":
        "Завтрак, выезд в Исмаиллу в 09:00. Размещение в доме с бассейном. Деревня Лахидж — улочки и мастерские. Фотосессия в национальных костюмах. Обед с блюдами из тандыра. Возврат, отдых и музыкальный пикник у бассейна.",
      "day4.num": "День 4",
      "day4.title": "Галачик и озеро Каранохур",
      "day4.body": "Завтрак. Водопад Галачик, пикник у водопада. Озеро Каранохур.",
      "day5.num": "День 5",
      "day5.title": "Ках: Илису, храм Курмюк, мосты",
      "day5.body":
        "Завтрак, выезд в Ках, размещение с бассейном. Деревня Илису. Обед в ресторане у озера с рыбой. Храм Курмюк (I–III вв.), Улья мосты (XVIII в.), базилика в Куме (V в.). Мангал-вечеринка с напитками.",
      "day6.num": "День 6",
      "day6.title": "Шеки и Лерик",
      "day6.body":
        "Завтрак, выезд в Шеки. Дворец шекинских ханов (XVIII в.) с резными окнами. Албанский храм в Кише, чай с шекинской пахлавой. Караван-сарай. Обед — шекинский пити. Отъезд в Лерик, размещение, ужин.",
      "day7.num": "День 7",
      "day7.title": "Визеземин и водопад Токиахил",
      "day7.body":
        "Завтрак в Лерике. Деревня Визеземин, водопад Токиахил, пикник. Прогулка по деревне. Ужин с вином.",
      "day8.num": "День 8",
      "day8.title": "Каньон Нисекала",
      "day8.body":
        "Завтрак. Каньон Нисекала (Ярдимли), пикник, купание у водопадов. Вечером мангал.",
      "day9.num": "День 9",
      "day9.title": "Хиркан, водопады, Левенга",
      "day9.body":
        "Завтрак. Национальный парк Хиркан, пикник у водопада Сим, водопады Балликая и Сен. Ужин с левенгой (блюдо талышей). Вершина Хамошам. Возврат в Баку.",
      "day10.num": "День 10",
      "day10.title": "Шоппинг и прощание",
      "day10.body": "Шоппинг в Баку и прощание с группой.",
      "vid.title": "Атмосфера тура",
      "vid.lead": "Кадры с маршрута — вертикальные ролики с телефона смотрятся естественно на любом экране.",
      "vid.cap1": "Баку и Каспий",
      "vid.cap2": "Горы и деревни",
      "vid.cap3": "Водопады и природа",
      "adv.title": "Почему этот тур",
      "adv1.h": "Виллы и бассейны",
      "adv1.p": "Роскошные частные дома — спокойствие и приватность.",
      "adv2.h": "VIP и гид",
      "adv2.p": "Комфортный транспорт и сопровождение на всём маршруте.",
      "adv3.h": "Полный Азербайджан",
      "adv3.p": "Море, горы, леса и наследие в одном путешествии.",
      "map.title": "Маршрут на карте",
      "map.lead": "Основные точки программы — от Баку до Хиркана и обратно.",
      "map.aria": "Карта маршрута тура",
      "map.legend":
        "Карта © OpenStreetMap. Метки приблизительные; точные локации уточняет гид в туре.",
      "map.baku.t": "Баку",
      "map.baku.n": "Старт и финал, море, экскурсии",
      "map.lahij.t": "Лахидж",
      "map.lahij.n": "Район Исмаиллы, медные мастерские",
      "map.gala.t": "Водопад Галачик",
      "map.gala.n": "Природа и пикник",
      "map.karan.t": "Озеро Каранохур",
      "map.karan.n": "Горное озеро",
      "map.qakh.t": "Ках",
      "map.qakh.n": "Илису, Курмюк, мосты",
      "map.sheki.t": "Шеки",
      "map.sheki.n": "Дворец ханов, Киш, караван-сарай",
      "map.lerik.t": "Лерик",
      "map.lerik.n": "Визеземин, водопад Токиахил",
      "map.yard.t": "Ярдимли",
      "map.yard.n": "Каньон Нисекала",
      "map.hirkan.t": "Хиркан",
      "map.hirkan.n": "Национальный парк, водопады",
      "contact.title": "Контакты",
      "contact.lead":
        "Напишите на почту или в Instagram — ответим на вопросы и поможем с бронированием.",
      "contact.ig": "Instagram @tourelax.pl",
      "footer.line": "Люксовые путешествия по Азербайджану",
    },
    pl: {
      "meta.title": "Tourelax — Azerbejdżan | Luksusowa wycieczka",
      "meta.desc":
        "10-dniowa luksusowa podróż po Azerbejdżanie z Tourelax — wille, transport VIP, przewodnik. 1–10 lipca. 6000 zł.",
      "nav.label": "Nawigacja główna",
      "nav.tour": "Wycieczka",
      "nav.included": "W cenie",
      "nav.program": "Program",
      "nav.videos": "Wideo",
      "nav.advantages": "Zalety",
      "nav.map": "Mapa",
      "nav.contact": "Kontakt",
      "nav.cta": "Rezerwuj",
      "menu.open": "Otwórz menu",
      "lang.label": "Język strony",
      "hero.label": "Ekskluzywna trasa",
      "hero.h1": "10-dniowa luksusowa i niezapomniana podróż po Azerbejdżanie",
      "hero.dates": "1–10 lipca",
      "hero.sub": "Nocleg w prywatnych domach i willach z transportem VIP",
      "hero.priceNote": "Bilet lotniczy i wiza nie są wliczone",
      "hero.cta": "Rezerwuj",
      "inc.title": "Co zawiera cena",
      "inc.lead": "Pełen komfort: od wyżywienia po wycieczki — wszystko zaplanowane.",
      "inc.1": "Nocleg w prywatnych domach i willach z basenem",
      "inc.2":
        "Trzy posiłki dziennie (śniadanie, obiad, kolacja), lokalne słodycze, świeże owoce, napoje alkoholowe i bezalkoholowe",
      "inc.3": "Transport VIP (komfortowy minibus lub luksusowy samochód)",
      "inc.4": "Usługi przewodnika",
      "inc.5": "Wycieczki i bilety wstępu",
      "prog.title": "Program wycieczki",
      "prog.lead": "10 dni: morze, góry, lasy i historia Azerbejdżanu.",
      "day1.num": "Dzień 1",
      "day1.title": "Powitanie i zakwaterowanie",
      "day1.body":
        "Transfer do domu i zakwaterowanie. Wieczór z muzyką i grillem na plaży w Baku: napoje alkoholowe (piwo, wino, wódka), gry i shisha, zachód słońca.",
      "day2.num": "Dzień 2",
      "day2.title": "Baku: architektura i Stare Miasto",
      "day2.body":
        "Śniadanie. Zwiedzanie Baku: Centrum Heydara Alijewa, Stare Miasto, Wieża Dziewicza, Pałac Szirwanszachów, Narodowe Muzeum Historii. Obiad. Spacer nad Morzem Kaspijskim. Muzeum azerskiego dywanu. Płomienne Wieże, Plac Fontann. Kolacja przy muzyce na żywo.",
      "day3.num": "Dzień 3",
      "day3.title": "Ismaiilli i Lahidż",
      "day3.body":
        "Śniadanie, wyjazd do Ismaiilli o 09:00. Zakwaterowanie w domu z basenem. Wioska Lahidż — wąskie uliczki i warsztaty. Sesja zdjęciowa w strojach ludowych. Obiad z potrawami z pieca tandoor. Powrót, odpoczynek i piknik muzyczny przy basenie.",
      "day4.num": "Dzień 4",
      "day4.title": "Wodospad Galach i jezioro Karanohur",
      "day4.body": "Śniadanie. Wodospad Galach, piknik przy wodospadzie. Jezioro Karanohur.",
      "day5.num": "Dzień 5",
      "day5.title": "Kach: Ilisu, świątynia Kurmuk, mosty",
      "day5.body":
        "Śniadanie, wyjazd do Kach, zakwaterowanie z basenem. Wioska Ilisu. Obiad w restauracji nad jeziorem z rybą. Świątynia Kurmuk (I–III w.), mosty Ulja (XVIII w.), bazylika w Kum (V w.). Wieczór z grillem i napojami.",
      "day6.num": "Dzień 6",
      "day6.title": "Szeki i Lerik",
      "day6.body":
        "Śniadanie, wyjazd do Szeki. Pałac chanów szekińskich (XVIII w.) z rzeźbionymi oknami. Albańska świątynia w Kisz, herbata z bakławą szekińską. Karawansaraj. Obiad — piti szekińskie. Przejazd do Leriku, zakwaterowanie, kolacja.",
      "day7.num": "Dzień 7",
      "day7.title": "Wizezemin i wodospad Tokiachil",
      "day7.body":
        "Śniadanie w Leriku. Wioska Wizezemin, wodospad Tokiachil, piknik. Spacer po wiosce. Kolacja z winem.",
      "day8.num": "Dzień 8",
      "day8.title": "Kanion Nisakala",
      "day8.body":
        "Śniadanie. Kanion Nisakala (Jardyimly), piknik, kąpiel przy wodospadach. Wieczorem grill.",
      "day9.num": "Dzień 9",
      "day9.title": "Hirkan, wodospady, levengi",
      "day9.body":
        "Śniadanie. Park Narodowy Hirkan, piknik przy wodospadzie Sim, wodospady Ballikaya i Sen. Kolacja z levengi (potrawa ludów talyskich). Szczyt Hamoszam. Powrót do Baku.",
      "day10.num": "Dzień 10",
      "day10.title": "Zakupy i pożegnanie",
      "day10.body": "Zakupy w Baku i pożegnanie z grupą.",
      "vid.title": "Klimat wycieczki",
      "vid.lead": "Ujęcia z trasy — pionowe nagrania z telefonu wyglądają naturalnie na każdym ekranie.",
      "vid.cap1": "Baku i Morze Kaspijskie",
      "vid.cap2": "Góry i wioski",
      "vid.cap3": "Wodospady i natura",
      "adv.title": "Dlaczego ta wycieczka",
      "adv1.h": "Wille i baseny",
      "adv1.p": "Luksusowe prywatne domy — spokój i prywatność.",
      "adv2.h": "VIP i przewodnik",
      "adv2.p": "Komfortowy transport i opieka na całej trasie.",
      "adv3.h": "Cały Azerbejdżan",
      "adv3.p": "Morze, góry, lasy i dziedzictwo w jednej podróży.",
      "map.title": "Trasa na mapie",
      "map.lead": "Główne punkty programu — od Baku po Hirkan i z powrotem.",
      "map.aria": "Mapa trasy wycieczki",
      "map.legend":
        "Mapa © OpenStreetMap. Punkty przybliżone; dokładne lokalizacje podaje przewodnik podczas wycieczki.",
      "map.baku.t": "Baku",
      "map.baku.n": "Start i finał, morze, zwiedzanie",
      "map.lahij.t": "Lahidż",
      "map.lahij.n": "Rejon Ismaiilli, warsztaty miedzi",
      "map.gala.t": "Wodospad Galach",
      "map.gala.n": "Natura i piknik",
      "map.karan.t": "Jezioro Karanohur",
      "map.karan.n": "Górskie jezioro",
      "map.qakh.t": "Kach",
      "map.qakh.n": "Ilisu, Kurmuk, mosty",
      "map.sheki.t": "Szeki",
      "map.sheki.n": "Pałac chanów, Kisz, karawansaraj",
      "map.lerik.t": "Lerik",
      "map.lerik.n": "Wizezemin, wodospad Tokiachil",
      "map.yard.t": "Jardyimly",
      "map.yard.n": "Kanion Nisakala",
      "map.hirkan.t": "Hirkan",
      "map.hirkan.n": "Park narodowy, wodospady",
      "contact.title": "Kontakt",
      "contact.lead":
        "Napisz na e-mail lub na Instagram — odpowiemy na pytania i pomożemy z rezerwacją.",
      "contact.ig": "Instagram @tourelax.pl",
      "footer.line": "Luksusowe podróże po Azerbejdżanie",
    },
    en: {
      "meta.title": "Tourelax — Azerbaijan | Luxury tour",
      "meta.desc":
        "10-day luxury trip across Azerbaijan with Tourelax — villas, VIP transport, guide. July 1–10. 6000 PLN.",
      "nav.label": "Main navigation",
      "nav.tour": "Tour",
      "nav.included": "Included",
      "nav.program": "Itinerary",
      "nav.videos": "Videos",
      "nav.advantages": "Highlights",
      "nav.map": "Map",
      "nav.contact": "Contact",
      "nav.cta": "Book now",
      "menu.open": "Open menu",
      "lang.label": "Website language",
      "hero.label": "Exclusive route",
      "hero.h1": "10-day luxury and unforgettable journey through Azerbaijan",
      "hero.dates": "July 1 — July 10",
      "hero.sub": "Stay in private houses and villas with VIP transport",
      "hero.priceNote": "Flight and visa not included",
      "hero.cta": "Book now",
      "inc.title": "What’s included",
      "inc.lead": "Full comfort: from meals to excursions — everything is arranged.",
      "inc.1": "Accommodation in private houses and villas with a pool",
      "inc.2":
        "Three meals a day (breakfast, lunch, dinner), local sweets, fresh fruit, alcoholic and soft drinks",
      "inc.3": "VIP transport (comfortable minibus or luxury car)",
      "inc.4": "Professional guide",
      "inc.5": "Excursions and entrance tickets",
      "prog.title": "10-day itinerary",
      "prog.lead": "Ten days: sea, mountains, forests and Azerbaijan’s heritage.",
      "day1.num": "Day 1",
      "day1.title": "Arrival and check-in",
      "day1.body":
        "Transfer to the villa and check-in. Evening by the Caspian with music and barbecue: beer, wine, vodka, games, hookah and sunset.",
      "day2.num": "Day 2",
      "day2.title": "Baku: architecture and Old City",
      "day2.body":
        "Breakfast. Baku tour: Heydar Aliyev Center, Old City, Maiden Tower, Shirvanshahs’ Palace, National History Museum. Lunch. Caspian promenade. Azerbaijan Carpet Museum. Flame Towers, Fountain Square. Dinner with live music.",
      "day3.num": "Day 3",
      "day3.title": "Ismayilli and Lahij",
      "day3.body":
        "Breakfast, departure for Ismayilli at 09:00. Pool villa. Lahij village — cobbled streets and workshops. Photo session in traditional dress. Lunch with tandoor dishes. Return, relax and music by the pool.",
      "day4.num": "Day 4",
      "day4.title": "Galah waterfall and Lake Karanohur",
      "day4.body": "Breakfast. Galah waterfall, picnic by the falls. Lake Karanohur.",
      "day5.num": "Day 5",
      "day5.title": "Qakh: Ilisu, Kurmuk temple, bridges",
      "day5.body":
        "Breakfast, drive to Qakh, pool accommodation. Ilisu village. Lunch at a lakeside fish restaurant. Kurmuk temple (1st–3rd c.), Ulia bridges (18th c.), Kum basilica (5th c.). Barbecue evening with drinks.",
      "day6.num": "Day 6",
      "day6.title": "Sheki and Lerik",
      "day6.body":
        "Breakfast, drive to Sheki. Khans’ Palace (18th c.) with carved windows. Kish Albanian church, tea with Sheki baklava. Caravanserai. Lunch — Sheki piti. Transfer to Lerik, check-in, dinner.",
      "day7.num": "Day 7",
      "day7.title": "Vizezemin and Tokiakhil waterfall",
      "day7.body":
        "Breakfast in Lerik. Vizezemin village, Tokiakhil waterfall, picnic. Village walk. Dinner with wine.",
      "day8.num": "Day 8",
      "day8.title": "Nisakala canyon",
      "day8.body":
        "Breakfast. Nisakala canyon (Yardimli), picnic, swimming by waterfalls. Evening barbecue.",
      "day9.num": "Day 9",
      "day9.title": "Hirkan, waterfalls, levengi",
      "day9.body":
        "Breakfast. Hirkan National Park, picnic at Sim waterfall, Ballikaya and Sen falls. Dinner with levengi (Talysh cuisine). Hamosham summit. Return to Baku.",
      "day10.num": "Day 10",
      "day10.title": "Shopping and farewell",
      "day10.body": "Shopping in Baku and farewell to the group.",
      "vid.title": "Feel the trip",
      "vid.lead": "Moments from the route — vertical phone clips look great on any screen.",
      "vid.cap1": "Baku and the Caspian",
      "vid.cap2": "Mountains and villages",
      "vid.cap3": "Waterfalls and nature",
      "adv.title": "Why this tour",
      "adv1.h": "Villas and pools",
      "adv1.p": "Luxury private homes — calm and privacy.",
      "adv2.h": "VIP and guide",
      "adv2.p": "Comfortable transport and support along the entire route.",
      "adv3.h": "All of Azerbaijan",
      "adv3.p": "Sea, mountains, forests and heritage in one journey.",
      "map.title": "Route on the map",
      "map.lead": "Main stops — from Baku to Hirkan and back.",
      "map.aria": "Tour route map",
      "map.legend":
        "Map © OpenStreetMap. Pins are approximate; your guide confirms exact locations on tour.",
      "map.baku.t": "Baku",
      "map.baku.n": "Start and finish, sea, city tours",
      "map.lahij.t": "Lahij",
      "map.lahij.n": "Ismayilli district, coppersmiths",
      "map.gala.t": "Galah waterfall",
      "map.gala.n": "Nature and picnic",
      "map.karan.t": "Lake Karanohur",
      "map.karan.n": "Mountain lake",
      "map.qakh.t": "Qakh",
      "map.qakh.n": "Ilisu, Kurmuk, bridges",
      "map.sheki.t": "Sheki",
      "map.sheki.n": "Khans’ Palace, Kish, caravanserai",
      "map.lerik.t": "Lerik",
      "map.lerik.n": "Vizezemin, Tokiakhil waterfall",
      "map.yard.t": "Yardimli",
      "map.yard.n": "Nisakala canyon",
      "map.hirkan.t": "Hirkan",
      "map.hirkan.n": "National park, waterfalls",
      "contact.title": "Contact",
      "contact.lead":
        "Email or message us on Instagram — we’ll answer questions and help you book.",
      "contact.ig": "Instagram @tourelax.pl",
      "footer.line": "Luxury travel in Azerbaijan",
    },
    tr: {
      "meta.title": "Tourelax — Azerbaycan | Lüks tur",
      "meta.desc":
        "Tourelax ile Azerbaycan’da 10 günlük lüks tur — villalar, VIP ulaşım, rehber. 1–10 Temmuz. 6000 PLN.",
      "nav.label": "Ana menü",
      "nav.tour": "Tur",
      "nav.included": "Dahil olanlar",
      "nav.program": "Program",
      "nav.videos": "Videolar",
      "nav.advantages": "Avantajlar",
      "nav.map": "Harita",
      "nav.contact": "İletişim",
      "nav.cta": "Rezervasyon",
      "menu.open": "Menüyü aç",
      "lang.label": "Site dili",
      "hero.label": "Özel rota",
      "hero.h1": "Azerbaycan’da 10 günlük lüks ve unutulmaz bir yolculuk",
      "hero.dates": "1 Temmuz — 10 Temmuz",
      "hero.sub": "VIP ulaşımla özel evler ve villalarda konaklama",
      "hero.priceNote": "Uçak bileti ve vize dahil değildir",
      "hero.cta": "Rezervasyon",
      "inc.title": "Fiyata neler dahil",
      "inc.lead": "Tam konfor: yemeklerden gezilere kadar her şey düşünüldü.",
      "inc.1": "Havuzlu özel ev ve villalarda konaklama",
      "inc.2":
        "Günde üç öğün (kahvaltı, öğle, akşam), yerel tatlılar, taze meyve, alkollü ve alkolsüz içecekler",
      "inc.3": "VIP ulaşım (konforlu minibüs veya lüks araç)",
      "inc.4": "Rehber hizmeti",
      "inc.5": "Geziler ve giriş biletleri",
      "prog.title": "Tur programı",
      "prog.lead": "10 gün: deniz, dağ, orman ve Azerbaycan’ın tarihi.",
      "day1.num": "1. gün",
      "day1.title": "Karşılama ve konaklama",
      "day1.body":
        "Villaya transfer ve yerleşme. Bakü sahilinde müzik ve mangal partisi: bira, şarap, votka, oyunlar ve nargile, gün batımı.",
      "day2.num": "2. gün",
      "day2.title": "Bakü: mimari ve Eski Şehir",
      "day2.body":
        "Kahvaltı. Bakü turu: Haydar Aliyev Merkezi, Eski Şehir, Kız Kulesi, Şirvanşahlar Sarayı, Ulusal Tarih Müzesi. Öğle yemeği. Hazar sahili yürüyüşü. Azerbaycan Halı Müzesi. Alev Kuleleri, Çeşme Meydanı. Canlı müzikle akşam yemeği.",
      "day3.num": "3. gün",
      "day3.title": "İsmayıllı ve Lahıc",
      "day3.body":
        "Kahvaltı, 09:00’da İsmayıllı’ya hareket. Havuzlu evde konaklama. Lahıc köyü — dar sokaklar ve atölyeler. Geleneksel kıyafetle fotoğraf çekimi. Tandır yemekleriyle öğle yemeği. Dönüş, dinlenme ve havuz başında müzikli piknik.",
      "day4.num": "4. gün",
      "day4.title": "Galaç şelalesi ve Karanohur gölü",
      "day4.body": "Kahvaltı. Galaç şelalesi, şelalede piknik. Karanohur gölü.",
      "day5.num": "5. gün",
      "day5.title": "Kah: İlisu, Kurmuk tapınağı, köprüler",
      "day5.body":
        "Kahvaltı, Kah’a hareket, havuzlu konaklama. İlisu köyü. Göl kenarında balık restoranında öğle yemeği. Kurmuk tapınağı (MS I–III), Ulya köprüleri (18. yy), Kum bazilikası (5. yy). İçeceklerle mangal akşamı.",
      "day6.num": "6. gün",
      "day6.title": "Şeki ve Lerik",
      "day6.body":
        "Kahvaltı, Şeki’ye hareket. Hanlar Sarayı (18. yy), oymalı pencereler. Kiş Arnavut kilisesi, Şeki baklavasıyla çay. Kervansaray. Öğle yemeği — Şeki pitisi. Lerik’e geçiş, konaklama, akşam yemeği.",
      "day7.num": "7. gün",
      "day7.title": "Vizezemin ve Tokiahil şelalesi",
      "day7.body":
        "Lerik’te kahvaltı. Vizezemin köyü, Tokiahil şelalesi, piknik. Köyde yürüyüş. Şaraplı akşam yemeği.",
      "day8.num": "8. gün",
      "day8.title": "Nisakala kanyonu",
      "day8.body":
        "Kahvaltı. Nisakala kanyonu (Yardımlı), piknik, şelalelerde yüzme. Akşam mangalı.",
      "day9.num": "9. gün",
      "day9.title": "Hirkan, şelaleler, levenci",
      "day9.body":
        "Kahvaltı. Hirkan Milli Parkı, Sim şelalesinde piknik, Ballıkaya ve Sen şelaleleri. Talış mutfağından levenci ile akşam yemeği. Hamoşam zirvesi. Bakü’ye dönüş.",
      "day10.num": "10. gün",
      "day10.title": "Alışveriş ve vedalaşma",
      "day10.body": "Bakü’de alışveriş ve grupla vedalaşma.",
      "vid.title": "Turun atmosferi",
      "vid.lead": "Rotadan kareler — telefonla çekilen dikey videolar her ekranda iyi durur.",
      "vid.cap1": "Bakü ve Hazar",
      "vid.cap2": "Dağlar ve köyler",
      "vid.cap3": "Şelaleler ve doğa",
      "adv.title": "Neden bu tur",
      "adv1.h": "Villalar ve havuzlar",
      "adv1.p": "Lüks özel evler — huzur ve mahremiyet.",
      "adv2.h": "VIP ve rehber",
      "adv2.p": "Konforlu ulaşım ve tüm rota boyunca refakat.",
      "adv3.h": "Tüm Azerbaycan",
      "adv3.p": "Deniz, dağ, orman ve miras tek yolculukta.",
      "map.title": "Haritada rota",
      "map.lead": "Programın ana durakları — Bakü’den Hirkan’a ve geri.",
      "map.aria": "Tur rotası haritası",
      "map.legend":
        "Harita © OpenStreetMap. İşaretler yaklaşıktır; kesin noktalar turda rehber tarafından netleştirilir.",
      "map.baku.t": "Bakü",
      "map.baku.n": "Başlangıç ve bitiş, deniz, şehir turları",
      "map.lahij.t": "Lahıc",
      "map.lahij.n": "İsmayıllı bölgesi, bakırcı atölyeleri",
      "map.gala.t": "Galaç şelalesi",
      "map.gala.n": "Doğa ve piknik",
      "map.karan.t": "Karanohur gölü",
      "map.karan.n": "Dağ gölü",
      "map.qakh.t": "Kah",
      "map.qakh.n": "İlisu, Kurmuk, köprüler",
      "map.sheki.t": "Şeki",
      "map.sheki.n": "Hanlar Sarayı, Kiş, kervansaray",
      "map.lerik.t": "Lerik",
      "map.lerik.n": "Vizezemin, Tokiahil şelalesi",
      "map.yard.t": "Yardımlı",
      "map.yard.n": "Nisakala kanyonu",
      "map.hirkan.t": "Hirkan",
      "map.hirkan.n": "Milli park, şelaleler",
      "contact.title": "İletişim",
      "contact.lead":
        "E-posta veya Instagram’dan yazın — sorularınızı yanıtlarız ve rezervasyonda yardımcı oluruz.",
      "contact.ig": "Instagram @tourelax.pl",
      "footer.line": "Azerbaycan’da lüks seyahat",
    },
  };

  var LANG_HTML = { ru: "ru", pl: "pl", en: "en", tr: "tr" };

  var current = DEFAULT_LANG;

  function normalizeLang(lang) {
    if (STR[lang]) return lang;
    return DEFAULT_LANG;
  }

  function t(key) {
    var pack = STR[current] || STR[DEFAULT_LANG];
    var fallback = STR.en || STR[DEFAULT_LANG];
    if (pack[key] !== undefined) return pack[key];
    if (fallback[key] !== undefined) return fallback[key];
    return key;
  }

  function setText(el, text) {
    if (el.tagName === "TITLE") {
      el.textContent = text;
      return;
    }
    if (el.tagName === "META") {
      el.setAttribute("content", text);
      return;
    }
    el.textContent = text;
  }

  function apply(lang) {
    current = normalizeLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, current);
    } catch (e) {}

    document.documentElement.lang = LANG_HTML[current] || "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      setText(el, t(key));
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var raw = el.getAttribute("data-i18n-attr");
      if (!raw) return;
      var parts = raw.split(";");
      parts.forEach(function (p) {
        var kv = p.split(":");
        if (kv.length !== 2) return;
        var attr = kv[0].trim();
        var key = kv[1].trim();
        el.setAttribute(attr, t(key));
      });
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var l = btn.getAttribute("data-lang");
      var on = l === current;
      btn.classList.toggle("lang-btn--active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    if (typeof window.TOURELAX_onLangChange === "function") {
      window.TOURELAX_onLangChange(current);
    }
  }

  function init() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    var initial = normalizeLang(saved || DEFAULT_LANG);
    apply(initial);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var l = btn.getAttribute("data-lang");
        if (l) apply(l);
      });
    });
  }

  window.TOURELAX_I18N = {
    t: t,
    apply: apply,
    init: init,
    getLang: function () {
      return current;
    },
  };
})();
